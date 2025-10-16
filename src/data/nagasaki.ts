import type { Card, Prefecture } from "../types/cards";

const nagasakiCards: Card[] = [
  {
    id: "ntasu",
    name: "エヌタスカード",
    url: "https://www.ntasu.co.jp",
    image: "/images/cards/ntasu.jpg",
    sales: [
      "ココウォークバスセンター",
      "新地総合サービスセンター",
      "長崎バス各営業所",
      "さいかい交通",
      "長崎バス観光",
    ],
    minPrice: 2000,
    availableAreas: ["長崎バス 全線", "さいかい交通 全線"],
  },
  {
    id: "nagasaki-nimoca",
    name: "nagasaki nimoca",
    url: "https://www.naga-den.com/pages/727/",
    image: "/images/cards/nagasaki-nimoca.jpg",
    sales: [
      "長崎電気軌道 車内",
      "浦上車庫営業所",
      "蛍茶屋営業所",
      "赤迫臨時発売所",
      "西浜町臨時発売所",
    ],
    minPrice: 2000,
    availableAreas: ["nimocaと共通"],
    sharing: true,
  },
];

const nagasaki: Prefecture = {
  id: "nagasaki",
  code: 42,
  name: "長崎県",
  cards: nagasakiCards,
};

export { nagasaki, nagasakiCards };
