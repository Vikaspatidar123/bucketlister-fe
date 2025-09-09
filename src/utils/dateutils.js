/**
 * Get rolling months from the given month (default: current) with label/value pairs.
 * Example (if current is Sep 2025): [{ label: 'Sep25', value: 'sep25' }, ... up to 'Aug26'].
 * - label: 'Sep25'
 * - value: 'sep25'
 * @param {Date} [start=new Date()] - Starting month (inclusive)
 * @param {number} [count=12] - Number of months to return
 * @returns {{label: string, value: string}[]}
 */
export const getDynamicMonthOptions = (start = new Date(), count = 12) => {
  const months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
  const startYear = start.getFullYear();
  const startMonth = start.getMonth();
  const out = [];
  for (let i = 0; i < count; i++) {
    const d = new Date(startYear, startMonth + i, 1);
    const abbr = months[d.getMonth()];
    const yy = String(d.getFullYear()).slice(-2);
    out.push({
      label: `${abbr}${yy}`,
      id: `${abbr.toLowerCase()}${yy}`
    });
  }
  return out;
};
