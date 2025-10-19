import type { Prefecture, Card } from "../types/cards";

const miyagiCards: Card[] = [
  {
    id: "icsca",
    name: "icsca",
    shortName: "SK",
    url: "https://www.kotsu.city.sendai.jp/icsca/index.html",
    image: "/images/cards/icsca.jpg",
    sales: [
      "仙台市地下鉄券売機",
      "仙台市地下鉄定期券発売所",
      "仙台駅西口バスターミナル案内所",
      "仙台市バス案内所",
      "仙台市バス車内",
      "チャージ機設置店舗",
      "宮城交通・ミヤコーバス各営業所",
      "宮城交通・ミヤコーバス車内",
      "宮城交通 委託発売所",
      "石巻駅前案内所",
    ],
    minPrice: 1000,
    availableAreas: [
      "仙台市地下鉄全線",
      "仙台市バス全線",
      "宮城交通 路線バス全線",
      "宮城交通 高速バス全線(宮城交通運行分)",
      "ミヤコーバス 塩釜営業所管内路線バス全線",
      "ミヤコーバス 石巻営業所管内路線バス全線",
      "ミヤコーバス 吉岡線",
      "ミヤコーバス 川崎線",
      "ミヤコーバス 高速バス全線",
      "JR東日本 仙台Suicaエリア",
      "仙台空港アクセス線",
    ],
  },
  {
    id: "odeca",
    name: "odeca",
    shortName: "E0B",
    url: "https://www.jreast.co.jp/railway/train/brt/odeca.html",
    image: "/images/cards/odeca.jpg",
    sales: ["志津川駅", "気仙沼駅", "陸前高田駅", "盛駅"],
    minPrice: 2000,
    availableAreas: ["気仙沼線BRT", "大船渡線BRT"],
    suicaCompatible: true,
  },
];

const miyagi: Prefecture = {
  id: "miyagi",
  code: 4,
  name: "宮城県",
  cards: miyagiCards,
};

export { miyagi, miyagiCards };
