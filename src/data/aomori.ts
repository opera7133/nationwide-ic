import type { Card, Prefecture } from "../types/cards";

const aomoriCards: Card[] = [
  {
    id: "aopass",
    name: "AOPASS",
    url: "https://www.city.aomori.aomori.jp/koutsu/joushaken_buscard/1002297/index.html",
    image: "/images/cards/aopass.jpg",
    sales: [
      "青森市営バス車内",
      "青森市営バス案内所",
      "青森駅前発売所",
      "NTT青森支店前発売所",
      "サンロード青森1階総合サービスカウンター",
      "あおもり観光情報センター（新青森駅2階）",
      "青森市内のコンビニエンスストア",
    ],
    minPrice: 1000,
    availableAreas: [
      "青森市営バス",
      "青森市市バス",
      "青森市シャトル・ルートバス",
    ],
    suicaCompatible: true,
  },
  {
    id: "hachica",
    name: "ハチカ",
    url: "https://www.city.hachinohe.aomori.jp/section/hachica/",
    image: "/images/cards/hachica.png",
    sales: [
      "八戸市営バス 旭ヶ丘営業所",
      "南部バス 八戸・五戸・三戸営業所",
      "南部バス ラピア案内所",
      "はっち",
      "はちのへ観光案内所",
    ],
    minPrice: 1000,
    availableAreas: ["八戸市営バス", "南部バス運行エリア"],
    suicaCompatible: true,
  },
  {
    id: "megoica",
    name: "MegoICa",
    url: "https://www.konanbus.com/megoica.html",
    image: "/images/cards/megoica.jpg",
    sales: ["弘前バスターミナル", "五所川原駅前案内所", "青森総合案内所"],
    minPrice: 1000,
    availableAreas: ["弘南バス全線"],
    suicaCompatible: true,
  },
  {
    id: "towada-skyblue-pass",
    name: "Towada Skyblue Pass",
    url: "https://www.toutetsu.co.jp/pdf/towada_skyblue_pass.pdf",
    image: "/images/cards/towada-skyblue-pass.jpg",
    sales: [
      "十和田市中央バス案内所",
      "青森総合営業所",
      "野辺地営業所",
      "八戸営業所",
      "三沢駅バス案内所",
    ],
    minPrice: 2000,
    availableAreas: ["十和田観光電鉄 路線バス全線"],
    suicaCompatible: true,
  },
];

const aomori: Prefecture = {
  id: "aomori",
  code: 2,
  name: "青森県",
  cards: aomoriCards,
};

export { aomori, aomoriCards };
