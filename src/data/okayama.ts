import type { Card, Prefecture } from "../types/cards";

const okayamaCards: Card[] = [
  {
    id: "hareca",
    name: "Hareca",
    url: "https://shimoden.net/rosen/hareca/",
    image: "/images/cards/hareca.jpg",
    sales: [
      "岡山電気軌道 各窓口（Harecaマークのある窓口）",
      "岡山電気軌道 バス・路面電車車内",
      "両備バス岡山駅総合案内所",
      "両備バス 倉敷駅前案内所",
      "両備バス 天満屋チケットセンター",
      "両備バス 両備観光センター",
      "両備バス 車内",
      "下津井電鉄 岡山駅バス案内所",
      "下津井電鉄 本社 バス事業部",
      "下津井電鉄 興除営業所",
      "下津井電鉄 児島営業所",
      "倉敷駅前案内所",
      "宇野バス 岡山駅案内所",
      "宇野バス 本社",
      "宇野バス 車内",
    ],
    minPrice: 2000,
    availableAreas: [
      "岡山電気軌道 バス・路面電車全線",
      "下電バス 全線",
      "両備バス 全線",
      "中鉄バス 一部路線",
      "宇野バス 全線",
    ],
  },
];

const okayama: Prefecture = {
  id: "okayama",
  code: 33,
  name: "岡山県",
  cards: okayamaCards,
};

export { okayama, okayamaCards };
