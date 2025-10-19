// Helpers for managing owned cards in localStorage
import { prefectures } from "../data/prefectures";
import lzstring from "lz-string";
const {
  compressToEncodedURIComponent,
  decompressFromEncodedURIComponent,
  compressToUTF16,
  decompressFromUTF16,
} = lzstring;

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
// Versioned encoders/decoders
// v3: LZString-compressed JSON array of {id, shortName} (compact and resilient to card ID changes)
// v2: LZString-compressed JSON array (compact and resilient to card list changes)
// v1 (legacy): JSON array -> base64url

export const encodeOwnedIds = (ids: Set<string>): string => {
  // prefer compressed v3 (LZString) with shortName
  try {
    const arr = Array.from(ids).map((id) => {
      const card = prefectures.flatMap((p) => p.cards).find((c) => c.id === id);
      return card ? card.shortName : id;
    });
    const json = JSON.stringify(arr);
    // compress to base64, then make URL-safe
    const compressedB64 = compressToEncodedURIComponent(json);
    const token = compressedB64
      .replace(/\+/g, "-")
      .replace(/\//g, "_")
      .replace(/=+$/, "");
    return `v3:${token}`;
  } catch (e) {
    // fallback to v2
  }

  // fallback: compressed v2 (LZString)
  try {
    const arr = Array.from(ids);
    const json = JSON.stringify(arr);
    // compress to base64, then make URL-safe
    const compressedB64 = compressToEncodedURIComponent(json);
    const token = compressedB64
      .replace(/\+/g, "-")
      .replace(/\//g, "_")
      .replace(/=+$/, "");
    return `v2:${token}`;
  } catch (e) {
    // fallback to legacy
  }

  // fallback: v1 JSON base64
  try {
    const json = JSON.stringify(Array.from(ids));
    const b64 = btoa(json);
    const token = b64
      .replace(/\+/g, "-")
      .replace(/\//g, "_")
      .replace(/=+$/, "");
    return `v1:${token}`;
  } catch (e) {
    return "";
  }
};

export const decodeOwnedIds = (s: string): Set<string> => {
  try {
    if (!s) return new Set<string>();

    // Accept optional version prefix 'v2:' or 'v1:'; if no prefix assume legacy (v1)
    let version = "v1";
    let token = s;
    if (s.startsWith("v3:")) {
      version = "v3";
      token = s.slice(3);
    } else if (s.startsWith("v2:")) {
      version = "v2";
      token = s.slice(3);
    } else if (s.startsWith("v1:")) {
      version = "v1";
      token = s.slice(3);
    }

    if (version === "v3") {
      // base64url -> base64 -> decompress -> JSON array
      const cleaned = token.replace(/-/g, "+").replace(/_/g, "/");
      const pad =
        cleaned.length % 4 === 0 ? "" : "=".repeat(4 - (cleaned.length % 4));
      const b64 = cleaned + pad;
      const json = decompressFromEncodedURIComponent(b64);
      if (!json) return new Set<string>();
      const arr = JSON.parse(json);
      // map shortName back to id
      const ids = arr.map((shortName: string) => {
        const card = prefectures
          .flatMap((p) => p.cards)
          .find((c) => c.shortName === shortName);
        return card ? card.id : shortName;
      });
      return new Set<string>(ids);
    }

    if (version === "v2") {
      // base64url -> base64 -> decompress -> JSON array
      const cleaned = token.replace(/-/g, "+").replace(/_/g, "/");
      const pad =
        cleaned.length % 4 === 0 ? "" : "=".repeat(4 - (cleaned.length % 4));
      const b64 = cleaned + pad;
      const json = decompressFromEncodedURIComponent(b64);
      if (!json) return new Set<string>();
      const arr = JSON.parse(json);
      return new Set<string>(arr);
    }

    // v1 / legacy: base64url decode -> JSON array
    const cleaned = token.replace(/-/g, "+").replace(/_/g, "/");
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
