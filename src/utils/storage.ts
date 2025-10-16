// Helpers for managing owned cards in localStorage
import type { Prefecture, Card } from "../types/cards";
import { prefectures } from "../data/prefectures";

const OWN_KEY = "ownedCards";

export const getOwnedIds = (): Set<string> => {
  try {
    const raw = localStorage.getItem(OWN_KEY);
    return raw ? new Set<string>(JSON.parse(raw)) : new Set<string>();
  } catch (e) {
    return new Set<string>();
  }
};

export const setOwnedIds = (set: Set<string>) => {
  try {
    localStorage.setItem(OWN_KEY, JSON.stringify(Array.from(set)));
  } catch (e) {
    // ignore
  }
};

export const toggleOwned = (id: string): boolean => {
  const set = getOwnedIds();
  if (set.has(id)) set.delete(id);
  else set.add(id);
  setOwnedIds(set);
  return set.has(id);
};

export const isOwned = (id: string): boolean => {
  return getOwnedIds().has(id);
};

export const getTotalOwnedCount = (): number => {
  return getOwnedIds().size;
};

export const getOwnedCountByPrefCode = (code: number): number => {
  const pref = prefectures.find((p) => p.code === code);
  if (!pref) return 0;
  const owned = getOwnedIds();
  return pref.cards.reduce((acc, c) => (owned.has(c.id) ? acc + 1 : acc), 0);
};

export default {
  getOwnedIds,
  setOwnedIds,
  toggleOwned,
  isOwned,
  getTotalOwnedCount,
  getOwnedCountByPrefCode,
};
