import type { Card, Prefecture } from "../types/cards";

const shizuokaCards: Card[] = [
  {
    id: "luluca",
    name: "LuLuCa",
    url: "https://www.shizutetsu-luluca.com",
    image: "/images/cards/luluca.jpg",
    sales: [
      "静鉄電車 新静岡駅",
      "静鉄電車 草薙駅",
      "静鉄電車 新清水駅",
      "静鉄バス 各案内所",
      "静鉄バス 相良営業所",
      "静鉄バス 浜岡営業所",
      "新静岡セノバ5Fルルカカードカウンター",
      "しずてつストア各店",
    ],
    minPrice: 500,
    availableAreas: ["静鉄電車 全線", "静鉄バス 全線"],
  },
  {
    id: "nicepass",
    name: "ナイスパス",
    url: "https://bus.entetsu.co.jp/ticket/nicepass/",
    image: "/images/cards/nicepass.png",
    sales: [
      "浜松駅バスターミナル 乗車券センター",
      "遠州鉄道 磐田駅前店",
      "遠州鉄道 天竜店",
      "遠州鉄道 浜松西営業所",
      "遠鉄自動車整備センター",
      "遠州鉄道 鉄道営業所",
      "遠州鉄道 新浜松駅",
      "遠州鉄道 第一通り駅",
      "遠州鉄道 上島駅",
      "遠州鉄道 浜北駅",
      "遠州鉄道 西鹿島駅",
    ],
    minPrice: 500,
    availableAreas: ["遠鉄バス 全線", "遠鉄電車 全線"],
  },
];

const shizuoka: Prefecture = {
  id: "shizuoka",
  code: 22,
  name: "静岡県",
  cards: shizuokaCards,
};

export { shizuoka, shizuokaCards };
