import type { Card, Prefecture } from "../types/cards";

const okinawaCards: Card[] = [
  {
    id: "okica",
    name: "OKICA",
    shortName: "OK",
    url: "https://info.okica.jp",
    image: "/images/cards/okica.png",
    sales: [
      "ゆいレール各駅",
      "那覇バス 各営業所",
      "那覇バス 本社",
      "琉球バス交通 各営業所",
      "琉球バス交通 本社",
      "沖縄バス 各販売所",
      "沖縄バス 各出張所",
      "東陽バス 各営業所",
      "ファミリーマート(一部店舗,無記名販売のみ)",
    ],
    minPrice: 1000,
    availableAreas: [
      "ゆいレール全線",
      "那覇バス 路線バス全線",
      "琉球バス交通 路線バス全線",
      "沖縄バス 路線バス全線",
      "東陽バス 路線バス全線",
      "Nバス（南城市コミュニティバス）",
      "タクシー",
    ],
  },
];

const okinawa: Prefecture = {
  id: "okinawa",
  code: 47,
  name: "沖縄県",
  cards: okinawaCards,
};

export { okinawa, okinawaCards };
