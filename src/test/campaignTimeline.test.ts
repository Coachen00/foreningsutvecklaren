import { describe, it, expect } from "vitest";
import {
  computeTimelineProgress,
  formatActivityDate,
  type CampaignTimeline,
} from "@/content/campaignTimeline";

const fixture: CampaignTimeline = {
  heroEyebrow: "Test",
  heroTitle: "Test",
  heroLead: "Test",
  heroVideoUrl: "/v.mp4",
  latestActivity: {
    title: "Senaste",
    name: "A",
    date: "2026-05-01",
  },
  nextActivity: {
    title: "Nästa",
    name: "B",
    date: "2026-06-15",
  },
};

describe("computeTimelineProgress", () => {
  it("räknar dagar sedan senaste och kvar till nästa", () => {
    const now = new Date("2026-05-10T12:00:00Z");
    const p = computeTimelineProgress(fixture, now);
    expect(p.daysSinceLatest).toBe(9);
    expect(p.daysUntilNext).toBe(36);
  });

  it("klampar progress till [0, 100]", () => {
    const before = computeTimelineProgress(fixture, new Date("2026-04-01"));
    expect(before.progressPercent).toBe(0);

    const after = computeTimelineProgress(fixture, new Date("2026-07-01"));
    expect(after.progressPercent).toBe(100);
  });

  it("ger ~20% halvvägs (9 av 45 dagar)", () => {
    const now = new Date("2026-05-10T12:00:00Z");
    const p = computeTimelineProgress(fixture, now);
    expect(p.progressPercent).toBe(20);
  });
});

describe("formatActivityDate", () => {
  it("formaterar till svensk lokal", () => {
    const formatted = formatActivityDate("2026-05-01");
    expect(formatted).toMatch(/2026/);
    expect(formatted.toLowerCase()).toMatch(/maj/);
  });
});
