import type { Card, Prefecture } from "../types/cards";

const ehimeCards: Card[] = [
  {
    id: "e-card",
    name: "ICい〜カード",
    url: "https://www.iyotetsu.co.jp/e-card/",
    image: "/images/cards/e-card.png",
    sales: [
      "いよてつチケットセンター",
      "森松営業所",
      "北条バスターミナル",
      "川内バスターミナル",
      "伊予鉄トラベル 大街道営業所",
      "市内電車・バス車内",
      "その他一部郊外電車駅",
    ],
    minPrice: 2000,
    availableAreas: [
      "伊予鉄道（市内電車・郊外電車・バス）",
      "伊予鉄バス 一般路線バス全線",
      "伊予鉄タクシー（松山市内）",
      "石崎汽船",
      "中島汽船",
    ],
    ended: true,
    endedAt: new Date("2025-09-30"),
  },
];

const ehime: Prefecture = {
  id: "ehime",
  name: "愛媛県",
  code: 38,
  cards: ehimeCards,
};

export { ehime, ehimeCards };
