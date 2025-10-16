import type { Card, Prefecture } from "../types/cards";

const tokyoCards: Card[] = [
  {
    id: "pasmo",
    name: "PASMO",
    url: "https://www.pasmo.co.jp/",
    image: "/images/cards/pasmo.png",
    sales: ["首都圏の鉄道・バスの主な駅の券売機・窓口"],
    minPrice: 1000,
    availableAreas: [],
    sharing: true,
  },
  {
    id: "suica",
    name: "Suica",
    url: "https://www.jreast.co.jp/suica/",
    image: "/images/cards/suica.jpg",
    sales: ["JR東日本の主な駅の券売機・みどりの窓口"],
    minPrice: 1000,
    availableAreas: [],
    sharing: true,
  },
  {
    id: "rinkai-suica",
    name: "りんかいSuica",
    url: "https://www.twr.co.jp/route/tabid/129/Default.aspx",
    image: "/images/cards/rinkai-suica.png",
    sales: ["りんかい線各駅（大崎駅を除く） 自動定期券発売機,窓口"],
    minPrice: 1000,
    availableAreas: ["Suicaと共通"],
    sharing: true,
  },
  {
    id: "monorail-suica",
    name: "モノレールSuica",
    url: "https://www.tokyo-monorail.co.jp/tickets/suica/outline.html",
    image: "/images/cards/monorail-suica.png",
    sales: ["東京モノレール各駅 自動券売機,多機能券売機,定期券売場"],
    minPrice: 1000,
    availableAreas: ["Suicaと共通"],
    sharing: true,
    ended: true,
    endedAt: new Date("2025-03-14"),
  },
];

const tokyo: Prefecture = {
  id: "tokyo",
  code: 13,
  name: "東京都",
  cards: tokyoCards,
};

export { tokyo, tokyoCards };
