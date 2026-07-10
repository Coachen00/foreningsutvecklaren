import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import LoggedInHeroCountdown from "@/components/dashboard/LoggedInHeroCountdown";
import HarvestedSuccessesVideo from "@/components/dashboard/HarvestedSuccessesVideo";
import EffectLogicSummary from "@/components/dashboard/EffectLogicSummary";
import {
  HARVESTED_SUCCESSES,
  EFFECT_LOGIC,
} from "@/content/harvestedSuccesses";
import { CAMPAIGN_TIMELINE } from "@/content/campaignTimeline";

describe("LoggedInHeroCountdown", () => {
  it("renderar hero-rubriken och pause-kontrollen", () => {
    render(<LoggedInHeroCountdown />);
    expect(
      screen.getByRole("heading", { level: 2, name: CAMPAIGN_TIMELINE.heroTitle }),
    ).toBeInTheDocument();
    // Pause-knapp finns från start (autoplay om inte reduced-motion)
    expect(
      screen.getByRole("button", { name: /pausa bakgrundsvideo/i }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /skördade framgångar/i }),
    ).toBeInTheDocument();
  });

  it("visar progressbar med aria-valuenow", () => {
    render(<LoggedInHeroCountdown />);
    const bar = screen.getByRole("progressbar");
    const value = Number(bar.getAttribute("aria-valuenow"));
    expect(value).toBeGreaterThanOrEqual(0);
    expect(value).toBeLessThanOrEqual(100);
  });
});

describe("HarvestedSuccessesVideo", () => {
  it("renderar alla framgångskort", () => {
    render(<HarvestedSuccessesVideo />);
    for (const s of HARVESTED_SUCCESSES) {
      expect(screen.getByText(s.title)).toBeInTheDocument();
      expect(screen.getByText(s.description)).toBeInTheDocument();
    }
  });

  it("har sektionens id för scroll-target", () => {
    const { container } = render(<HarvestedSuccessesVideo />);
    expect(container.querySelector("#harvested-successes")).not.toBeNull();
  });
});

describe("EffectLogicSummary", () => {
  it("renderar fyra effektsteg i rätt ordning", () => {
    render(<EffectLogicSummary />);
    const items = screen.getAllByRole("listitem");
    expect(items).toHaveLength(EFFECT_LOGIC.length);
    EFFECT_LOGIC.forEach((entry, i) => {
      expect(items[i]).toHaveTextContent(entry.label);
      expect(items[i]).toHaveTextContent(entry.body);
    });
  });
});
