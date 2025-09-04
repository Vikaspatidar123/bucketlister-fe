'use client';

import { TRAVEL_PACKAGES_DATA, DATE_TABS } from '@/components/TravelPackagesSection/constants';

export const mapDestinationsByCategory = (category) =>
  (Array.isArray(TRAVEL_PACKAGES_DATA) ? TRAVEL_PACKAGES_DATA : [])
    .filter((d) => String(d?.category).toLowerCase() === String(category).toLowerCase())
    .map((d) => ({
      label: d.destination_name,
      href: `/explore?destinationId=${d.destination_id}`,
    }));

export const normalizeDateQueryToTabId = (rawDate) => {
  if (!rawDate) return 'all';
  const raw = String(rawDate).trim().toLowerCase();
  const exists = (id) => Array.isArray(DATE_TABS) && DATE_TABS.some(t => t.id === id);
  const month3 = raw.slice(0, 3);

  let normalized = raw;

  // monYYYY => monYY
  if (/^[a-z]{3}\d{4}$/.test(raw)) {
    normalized = `${month3}${raw.slice(-2)}`;
  }

  // mon => pick first matching tab (e.g., dec -> dec25)
  if (/^[a-z]{3}$/.test(normalized)) {
    const firstMatch = DATE_TABS.find(t => String(t.id).startsWith(month3));
    if (firstMatch) normalized = firstMatch.id;
  }

  // monYY but not in tabs => fallback to first same-month tab
  if (/^[a-z]{3}\d{2}$/.test(normalized) && !exists(normalized)) {
    const firstMatch = DATE_TABS.find(t => String(t.id).startsWith(month3));
    if (firstMatch) normalized = firstMatch.id;
  }

  return normalized;
};


