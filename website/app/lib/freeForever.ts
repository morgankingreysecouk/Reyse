// The first-5, one-per-county, free-forever offer. TOTAL_SPOTS never
// changes — there are only ever 5. CLAIMED_COUNTIES is hand-maintained:
// add a county here the moment a real business actually takes that spot,
// not before.
export const TOTAL_SPOTS = 5;
export const CLAIMED_COUNTIES = ["Essex"];
export const SPOTS_REMAINING = TOTAL_SPOTS - CLAIMED_COUNTIES.length;

/** 1 second before the 1st of next month, in the visitor's local time. */
export function currentWindowCloses(): Date {
  const now = new Date();
  const startOfNextMonth = new Date(now.getFullYear(), now.getMonth() + 1, 1);
  return new Date(startOfNextMonth.getTime() - 1000);
}
