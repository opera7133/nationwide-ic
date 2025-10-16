import { prefectures } from "../data/prefectures";
import { getOwnedCountByPrefCode } from "./storage";

const getPrefByPrefCode = (code: number) => {
  const pref = prefectures.find((p) => p.code === code);
  return pref ?? null;
};

const getNumberOfCards = () => {
  return prefectures.reduce((acc, pref) => acc + pref.cards.length, 0);
};

const getNumberOfCardsWithoutEnd = () => {
  return prefectures.reduce((acc, pref) => {
    const count = pref.cards.filter((c) => !c.ended).length;
    return acc + count;
  }, 0);
};

const getNumberOfCardsInPref = (code: number) => {
  const pref = getPrefByPrefCode(code);
  return pref ? pref.cards.length : 0;
};

const getNumberOfCardsInPrefWithoutEnd = (code: number) => {
  const pref = getPrefByPrefCode(code);
  return pref ? pref.cards.filter((c) => !c.ended).length : 0;
};

const getPrefectureDefaultColor = (code: number) => {
  const ownedCount = getOwnedCountByPrefCode(code);
  const pref = getPrefByPrefCode(code);
  if (pref) {
    if (pref.cards.length === 0) return "#222222"; // dark gray
    if (ownedCount === 0) return "#EEEEEE";
    if (ownedCount < pref.cards.length) return "#d6f53d"; // light green
    if (ownedCount === pref.cards.length) return "#ff9419"; // orange
  }
  return "#EEEEEE";
};

export {
  getPrefByPrefCode,
  getNumberOfCards,
  getNumberOfCardsWithoutEnd,
  getPrefectureDefaultColor,
  getNumberOfCardsInPref,
  getNumberOfCardsInPrefWithoutEnd,
};
