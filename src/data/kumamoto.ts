import type { Card, Prefecture } from "../types/cards";

const kumamotoCards: Card[] = [
  {
    id: "kumamon-ic",
    name: "くまモンのIC CARD",
    url: "https://www.kumamotoiccard.jp",
    image: "/images/cards/kumamon-ic.jpg",
    sales: [
      "九州産交バス各営業所",
      "山鹿バスセンター",
      "産交バスサービスセンター",
      "産交バス各営業所",
      "牛深バスセンター",
      "本渡バスセンター",
      "熊本電気鉄道 本社",
      "熊本電気鉄道 辻久保営業所",
      "熊本電気鉄道 北熊本駅,藤崎宮前駅,堀川駅,御代志駅",
      "熊本バス各営業所",
      "熊本都市バス各営業所",
      "阿蘇くまもと空港",
      "ＪＲ熊本駅白川口",
      "くまモンのIC CARD キャッシュレスプラザ",
      "肥後銀行本支店窓口(県内)",
    ],
    minPrice: 2000,
    availableAreas: [
      "九州産交バス 全線",
      "産交バス 全線",
      "熊本電気鉄道 全線",
      "熊本バス 全線",
      "熊本都市バス 全線",
      "熊本市交通局 市電全線",
      "熊本市交通局 市バス全線",
    ],
  },
  {
    id: "denden-nimoca",
    name: "でんでんnimoca",
    url: "https://www.kotsu-kumamoto.jp/kiji/pub/detail.aspx?c_id=67&id=136&pg=1",
    image: "/images/cards/denden-nimoca.jpg",
    sales: [
      "熊本市電 車内",
      "交通局1F乗車券類販売窓口",
      "桜町バスターミナル2Fバス案内所",
    ],
    minPrice: 2000,
    availableAreas: ["nimocaと共通"],
    sharing: true,
  },
];

const kumamoto: Prefecture = {
  id: "kumamoto",
  code: 43,
  name: "熊本県",
  cards: kumamotoCards,
};

export { kumamoto, kumamotoCards };
