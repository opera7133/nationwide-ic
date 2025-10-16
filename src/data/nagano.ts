import type { Card, Prefecture } from "../types/cards";

const naganoCards: Card[] = [
  {
    id: "kururu",
    name: "KURURU",
    url: "https://ic-kururu.jp",
    image: "/images/cards/kururu.png",
    sales: [
      "くるるカードセンター",
      "アルピコ交通 長野駅前総合案内所",
      "アルピコ交通 長野営業所",
      "アルピコ交通 松代支所",
      "長電バス高速バス予約センター",
      "長電バス飯綱営業所",
      "長野電鉄 長野駅売店",
      "権堂駅",
      "長電高速バス長野駅前案内所",
      "須坂駅バス案内所",
      "高山村保健福祉総合センター",
      "長野市市民窓口課",
      "セブンイレブン 長野県内の一部店舗",
    ],
    minPrice: 1000,
    availableAreas: [
      "アルピコ交通 路線バス(長野市,小川村)全線",
      "長電バス 路線バス(長野市,須坂市,千曲市,飯綱町,高山村)全線",
      "乗合タクシー/市町村営バス(長野市,飯綱町,高山村)",
    ],
    suicaCompatible: true,
  },
];

const nagano: Prefecture = {
  id: "nagano",
  code: 20,
  name: "長野県",
  cards: naganoCards,
};

export { nagano, naganoCards };
