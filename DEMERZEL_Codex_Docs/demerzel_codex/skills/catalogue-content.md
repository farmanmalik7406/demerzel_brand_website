# Skill: Catalogue Content

## Purpose

Use this skill whenever Codex creates, edits or imports product
catalogue content.

## Rules

1.  Use supplied catalogue data as the primary source.
2.  Preserve product and series names exactly.
3.  Preserve numeric specifications exactly unless a normalization rule
    explicitly exists.
4.  Store units separately where practical.
5.  Keep source references in seed/import data.
6.  Mark ambiguous records for review.
7.  Never invent commercial fields.

## Import pattern

Use:

``` ts
{
  name: "VANRAAJ 10X42 ED",
  series: "VANRAAJ",
  specifications: [
    { key: "magnification", value: "10", unit: "X", source: "Vanrakshak catalogue p.11" }
  ],
  dataQualityStatus: "verified"
}
```

## Review status

Use `needs_review` if: - model naming conflicts - source extraction is
ambiguous - specification appears inconsistent - commercial relationship
is unclear

Do not silently repair source inconsistencies.
