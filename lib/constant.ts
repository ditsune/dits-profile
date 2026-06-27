export const SECTION_IDS = [
  "intro",
  "projects",
  "connect",
] as const;

export type SectionID = (typeof SECTION_IDS)[number];
