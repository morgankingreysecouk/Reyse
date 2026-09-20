// The Full System's own free-spot pool — separate from the general,
// county-based offer in freeForever.ts. Confirmed by Morgan as a
// distinct pool (2026-09-13): this one is specifically for the first 5
// clients who take the full 5-product bundle, in exchange for honest
// feedback, a testimonial, and a charity donation, per the Master Offer
// Document. SYSTEM_SPOTS_CLAIMED is hand-maintained — update it the
// moment a real client actually takes a spot, not before.
export const SYSTEM_TOTAL_SPOTS = 5;
export const SYSTEM_SPOTS_CLAIMED = 3;
export const SYSTEM_SPOTS_REMAINING = SYSTEM_TOTAL_SPOTS - SYSTEM_SPOTS_CLAIMED;

// The standard monthly price once a full-system spot stops being free —
// confirmed by Morgan (2026-09-20). Shown so the "currently completely
// free" framing doesn't read as if there's no real price behind it.
export const SYSTEM_MONTHLY_PRICE = "£2,500";
