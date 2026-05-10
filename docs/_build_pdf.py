"""
Build a typographically pleasant PDF from docs/innehallskarta.md.

Style: editorial — Lora-like serif for display, sans for body, mono for code/labels.
ReportLab uses built-in fonts (Helvetica, Times, Courier) since custom font
embedding requires file paths to TTFs we may not have. The PDF mirrors the
sajt's calm-editorial tone within ReportLab's constraints.
"""

import re
from pathlib import Path
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import ParagraphStyle, getSampleStyleSheet
from reportlab.lib.units import mm
from reportlab.lib import colors
from reportlab.lib.enums import TA_LEFT
from reportlab.platypus import (
    SimpleDocTemplate,
    Paragraph,
    Spacer,
    PageBreak,
    Table,
    TableStyle,
    KeepTogether,
)


# ─── Färgpalett (matchar sajten) ──────────────────────────────
GFF_PRIMARY = colors.HexColor("#0B7A4C")  # emerald
GFF_PRIMARY_SUBTLE = colors.HexColor("#E8F2EE")
GFF_FOREGROUND = colors.HexColor("#0F1418")
GFF_MUTED = colors.HexColor("#666B70")
GFF_BORDER = colors.HexColor("#D9DCE0")
GFF_BG = colors.HexColor("#F7F4EE")  # warm cream


# ─── Stilar ──────────────────────────────────────────────────
def build_styles():
    base = getSampleStyleSheet()

    title = ParagraphStyle(
        "Title",
        parent=base["Title"],
        fontName="Times-Bold",
        fontSize=28,
        leading=34,
        textColor=GFF_FOREGROUND,
        spaceBefore=0,
        spaceAfter=14,
        alignment=TA_LEFT,
    )

    subtitle = ParagraphStyle(
        "Subtitle",
        parent=base["BodyText"],
        fontName="Helvetica",
        fontSize=11,
        leading=16,
        textColor=GFF_MUTED,
        spaceAfter=24,
        leftIndent=0,
        borderPadding=8,
    )

    h1 = ParagraphStyle(
        "H1",
        parent=base["Heading1"],
        fontName="Times-Bold",
        fontSize=18,
        leading=22,
        textColor=GFF_FOREGROUND,
        spaceBefore=24,
        spaceAfter=10,
        keepWithNext=1,
    )

    h2 = ParagraphStyle(
        "H2",
        parent=base["Heading2"],
        fontName="Helvetica-Bold",
        fontSize=12.5,
        leading=16,
        textColor=GFF_FOREGROUND,
        spaceBefore=14,
        spaceAfter=6,
        keepWithNext=1,
    )

    h3 = ParagraphStyle(
        "H3",
        parent=base["Heading3"],
        fontName="Helvetica-Bold",
        fontSize=10.5,
        leading=14,
        textColor=GFF_PRIMARY,
        spaceBefore=10,
        spaceAfter=4,
        keepWithNext=1,
    )

    body = ParagraphStyle(
        "Body",
        parent=base["BodyText"],
        fontName="Helvetica",
        fontSize=9.5,
        leading=14,
        textColor=GFF_FOREGROUND,
        spaceAfter=6,
        alignment=TA_LEFT,
    )

    bullet = ParagraphStyle(
        "Bullet",
        parent=body,
        leftIndent=14,
        bulletIndent=2,
        spaceAfter=3,
    )

    blockquote = ParagraphStyle(
        "BQ",
        parent=body,
        fontName="Times-Italic",
        fontSize=10.5,
        leading=15,
        leftIndent=14,
        rightIndent=10,
        textColor=GFF_MUTED,
        spaceBefore=8,
        spaceAfter=10,
        borderColor=GFF_PRIMARY,
        borderWidth=0,
    )

    code = ParagraphStyle(
        "Code",
        parent=body,
        fontName="Courier",
        fontSize=8.5,
        leading=11,
        textColor=GFF_FOREGROUND,
        leftIndent=8,
        rightIndent=8,
        spaceBefore=6,
        spaceAfter=8,
        backColor=GFF_PRIMARY_SUBTLE,
        borderPadding=8,
    )

    return {
        "title": title,
        "subtitle": subtitle,
        "h1": h1,
        "h2": h2,
        "h3": h3,
        "body": body,
        "bullet": bullet,
        "blockquote": blockquote,
        "code": code,
    }


# ─── Markdown → ReportLab inline ─────────────────────────────
def md_inline(text: str) -> str:
    """Convert markdown inline syntax to ReportLab Paragraph XML."""
    # Escape ReportLab-relevant XML chars first
    text = text.replace("&", "&amp;").replace("<", "&lt;").replace(">", "&gt;")

    # Bold **x**
    text = re.sub(r"\*\*(.+?)\*\*", r"<b>\1</b>", text)
    # Italic *x* or _x_
    text = re.sub(r"(?<!\*)\*(?!\*)(.+?)(?<!\*)\*(?!\*)", r"<i>\1</i>", text)
    text = re.sub(r"(?<!_)_(?!_)(.+?)(?<!_)_(?!_)", r"<i>\1</i>", text)
    # Inline code `x`
    text = re.sub(
        r"`([^`]+?)`",
        r'<font name="Courier" size="9" color="#0B7A4C">\1</font>',
        text,
    )
    return text


# ─── Markdown parsing ────────────────────────────────────────
def parse_markdown_to_flowables(md_path: Path, styles: dict):
    """Parse a markdown file into ReportLab flowables. Supports the subset we use."""
    text = md_path.read_text(encoding="utf-8")
    lines = text.split("\n")

    flowables = []
    i = 0
    in_code_block = False
    code_buffer = []
    table_buffer = []
    in_table = False

    def flush_table():
        nonlocal table_buffer
        if not table_buffer:
            return
        # Strip separator line (--- | ---) if present
        rows = [r for r in table_buffer if not re.match(r"^\s*\|?\s*[:-]+\s*\|", r)]
        # Parse cells
        parsed = []
        for r in rows:
            cells = [c.strip() for c in r.strip().strip("|").split("|")]
            parsed.append(
                [Paragraph(md_inline(c), styles["body"]) for c in cells]
            )
        if parsed:
            n_cols = max(len(r) for r in parsed)
            # pad short rows
            for r in parsed:
                while len(r) < n_cols:
                    r.append(Paragraph("", styles["body"]))
            # column widths: equal, total = page width - margins (≈170mm)
            avail = 170 * mm
            col_widths = [avail / n_cols] * n_cols
            tbl = Table(parsed, colWidths=col_widths, repeatRows=1)
            tbl.setStyle(
                TableStyle(
                    [
                        ("BACKGROUND", (0, 0), (-1, 0), GFF_PRIMARY_SUBTLE),
                        ("TEXTCOLOR", (0, 0), (-1, 0), GFF_FOREGROUND),
                        ("FONTNAME", (0, 0), (-1, 0), "Helvetica-Bold"),
                        ("FONTSIZE", (0, 0), (-1, -1), 8.5),
                        ("VALIGN", (0, 0), (-1, -1), "TOP"),
                        ("LEFTPADDING", (0, 0), (-1, -1), 6),
                        ("RIGHTPADDING", (0, 0), (-1, -1), 6),
                        ("TOPPADDING", (0, 0), (-1, -1), 6),
                        ("BOTTOMPADDING", (0, 0), (-1, -1), 6),
                        ("GRID", (0, 0), (-1, -1), 0.4, GFF_BORDER),
                    ]
                )
            )
            flowables.append(Spacer(1, 4))
            flowables.append(tbl)
            flowables.append(Spacer(1, 8))
        table_buffer = []

    while i < len(lines):
        line = lines[i]
        rstripped = line.rstrip()

        # Code block fences ```
        if rstripped.startswith("```"):
            if in_code_block:
                # close
                code_text = "\n".join(code_buffer).replace("&", "&amp;").replace(
                    "<", "&lt;"
                ).replace(">", "&gt;")
                flowables.append(Paragraph(code_text, styles["code"]))
                code_buffer = []
                in_code_block = False
            else:
                if in_table:
                    flush_table()
                    in_table = False
                in_code_block = True
            i += 1
            continue

        if in_code_block:
            code_buffer.append(line)
            i += 1
            continue

        # Markdown table row
        if "|" in rstripped and rstripped.startswith("|") or (
            "|" in rstripped and in_table
        ):
            in_table = True
            table_buffer.append(rstripped)
            i += 1
            continue
        else:
            if in_table:
                flush_table()
                in_table = False

        # Headings
        if rstripped.startswith("# "):
            flowables.append(Paragraph(md_inline(rstripped[2:]), styles["title"]))
        elif rstripped.startswith("## "):
            flowables.append(Paragraph(md_inline(rstripped[3:]), styles["h1"]))
        elif rstripped.startswith("### "):
            flowables.append(Paragraph(md_inline(rstripped[4:]), styles["h2"]))
        elif rstripped.startswith("#### "):
            flowables.append(Paragraph(md_inline(rstripped[5:]), styles["h3"]))
        elif rstripped.startswith("> "):
            flowables.append(Paragraph(md_inline(rstripped[2:]), styles["blockquote"]))
        elif rstripped.startswith("---"):
            flowables.append(Spacer(1, 6))
            # decorative line via 1-row table
            line_tbl = Table([[""]], colWidths=[170 * mm], rowHeights=[0.6])
            line_tbl.setStyle(
                TableStyle(
                    [("LINEABOVE", (0, 0), (-1, 0), 0.4, GFF_BORDER)]
                )
            )
            flowables.append(line_tbl)
            flowables.append(Spacer(1, 6))
        elif re.match(r"^\s*[-*]\s+", rstripped):
            content = re.sub(r"^\s*[-*]\s+", "", rstripped)
            flowables.append(
                Paragraph(md_inline(content), styles["bullet"], bulletText="•")
            )
        elif re.match(r"^\s*\d+\.\s+", rstripped):
            content = re.sub(r"^\s*(\d+)\.\s+", r"\1. ", rstripped)
            flowables.append(Paragraph(md_inline(content), styles["bullet"]))
        elif rstripped == "":
            flowables.append(Spacer(1, 4))
        else:
            flowables.append(Paragraph(md_inline(rstripped), styles["body"]))

        i += 1

    flush_table()
    return flowables


# ─── Page decoration ────────────────────────────────────────
def on_page(canvas, doc):
    canvas.saveState()
    # Header: tiny mono mark
    canvas.setFont("Courier", 7)
    canvas.setFillColor(GFF_MUTED)
    canvas.drawString(
        20 * mm,
        285 * mm,
        "INNEHÅLLSKARTA · FOTBOLLSNYTTAN ARBETSRUM · GFF",
    )
    # Footer: page number
    canvas.drawRightString(
        190 * mm,
        12 * mm,
        f"{doc.page}",
    )
    # Brand dot
    canvas.setFillColor(GFF_PRIMARY)
    canvas.circle(15 * mm, 286 * mm, 1.2, fill=1, stroke=0)
    canvas.restoreState()


# ─── Build ──────────────────────────────────────────────────
def main():
    here = Path(__file__).parent
    md_file = here / "innehallskarta.md"
    pdf_file = here / "innehallskarta.pdf"

    styles = build_styles()
    flowables = parse_markdown_to_flowables(md_file, styles)

    doc = SimpleDocTemplate(
        str(pdf_file),
        pagesize=A4,
        leftMargin=20 * mm,
        rightMargin=20 * mm,
        topMargin=22 * mm,
        bottomMargin=18 * mm,
        title="Innehållskarta — Fotbollsnyttan Arbetsrum",
        author="GFF",
    )

    doc.build(flowables, onFirstPage=on_page, onLaterPages=on_page)
    print(f"OK: Wrote {pdf_file}")


if __name__ == "__main__":
    main()
