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

// Encode a set of ids into a compact URL-safe string for sharing
export const encodeOwnedIds = (ids: Set<string>): string => {
  try {
    const json = JSON.stringify(Array.from(ids));
    // base64 encode, then make URL-safe
    const b64 = btoa(json);
    return encodeURIComponent(
      b64.replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "")
    );
  } catch (e) {
    return "";
  }
};

// Decode a shared string back into a Set of ids
export const decodeOwnedIds = (s: string): Set<string> => {
  try {
    // reverse URL-safe transform
    const cleaned = decodeURIComponent(s).replace(/-/g, "+").replace(/_/g, "/");
    // pad base64 to correct length
    const pad =
      cleaned.length % 4 === 0 ? "" : "=".repeat(4 - (cleaned.length % 4));
    const json = atob(cleaned + pad);
    const arr = JSON.parse(json);
    return new Set<string>(arr);
  } catch (e) {
    return new Set<string>();
  }
};

export default {
  getOwnedIds,
  setOwnedIds,
  toggleOwned,
  isOwned,
  getTotalOwnedCount,
  getOwnedCountByPrefCode,
};
