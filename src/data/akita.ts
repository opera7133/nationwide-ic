import type { Card, Prefecture } from "../types/cards";

const akitaCards: Card[] = [
  {
    id: "akica",
    name: "AKiCA",
    shortName: "E03",
    url: "https://www.city.akita.lg.jp/kurashi/kotsu/1012207/1033265.html",
    image: "/images/cards/akica.png",
    sales: ["秋田中央交通 各営業所", "秋田中央交通 各案内所"],
    minPrice: 1000,
    availableAreas: [
      "秋田中央交通 路線バス全線（秋田市、潟上市、井川町、五城目町）",
      "秋田中央交通 空港リムジンバス",
      "秋田中央交通 国際教養大学線",
      "秋田中央交通 中心市街地循環バス（ぐるる）",
      "秋田市マイタウン・バス",
    ],
    suicaCompatible: true,
  },
  {
    id: "shuhoku-orange-pass",
    name: "Shuhoku Orange Pass",
    shortName: "E04",
    url: "https://shuhokubus-gr.co.jp/topics/ICcard.html",
    image: "/images/cards/shuhoku-orange-pass.png",
    sales: [
      "秋北航空サービス",
      "秋北バス 大館営業所",
      "大館駅チケットカウンター",
      "秋北バス 本社2階",
      "秋北バス 鷹巣案内所",
      "秋北バス 米内沢営業所",
      "花輪駅前ステーション",
      "秋北バス 花輪営業所",
      "秋北バス 能代営業所",
      "秋北バス車内",
    ],
    minPrice: 2000,
    availableAreas: [
      "秋北バス 路線バス（大館地区・鹿角地区・北秋田地区）",
      "高速バス「みちのく号」",
      "高速バス「能代秋田線」",
    ],
    suicaCompatible: true,
  },
];

const akita: Prefecture = {
  id: "akita",
  code: 5,
  name: "秋田県",
  cards: akitaCards,
};

export { akita, akitaCards };
