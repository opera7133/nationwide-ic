import type { Card, Prefecture } from "../types/cards";

const kouchiCards: Card[] = [
  {
    id: "desuca",
    name: "ですか",
    shortName: "DE",
    url: "https://www.desuca.co.jp",
    image: "/images/cards/desuca.jpg",
    sales: [
      "高知駅バスターミナル窓口",
      "路面電車・バス車内",
      "はりまや橋サービスセンター",
      "ごめん町サービスセンター",
      "高知西南交通各窓口",
      "高知西南交通清水バスセンター",
      "高知東部交通各窓口",
      "四万十交通各窓口",
      "高知高陵交通各窓口",
      "高知駅前観光本社窓口",
      "ジェイアール四国バス高知支店",
      "とさでん交通各窓口",
    ],
    minPrice: 2000,
    availableAreas: [
      "とさでん交通",
      "県交北部交通",
      "高知東部交通",
      "高知西南交通",
      "高知高陵交通",
      "高知駅前観光",
      "四万十交通",
      "ジェイアール四国バス 大栃線",
      "土佐市ドラゴンバス",
      "いの町営バス(伊野循環線)",
      "南国市コミュニティバス",
      "中村まちバス",
    ],
  },
];

const kouchi: Prefecture = {
  id: "kouchi",
  name: "高知県",
  code: 39,
  cards: kouchiCards,
};

export { kouchi, kouchiCards };
