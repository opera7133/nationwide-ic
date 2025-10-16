import type { Card, Prefecture } from "../types/cards";

const kagawaCards: Card[] = [
  {
    id: "shikoku-icoca",
    name: "SHIKOKU ICOCA",
    url: "https://www.jr-shikoku.co.jp/icoca/icoca01-type.html",
    image: "/images/cards/shikoku-icoca.png",
    sales: [
      "高松駅 窓口",
      "坂出駅 窓口",
      "宇多津駅 窓口",
      "丸亀駅 窓口",
      "多度津駅 窓口",
      "詫間駅 窓口",
      "観音寺駅 窓口",
      "善通寺駅 窓口",
      "琴平駅 窓口",
      "栗林駅 窓口",
    ],
    minPrice: 2000,
    availableAreas: ["ICOCAと共通"],
    sharing: true,
  },
  {
    id: "iruca",
    name: "IruCa",
    url: "https://www.kotoden.co.jp/publichtm/iruca/index.html",
    image: "/images/cards/iruca.jpg",
    sales: [
      "高松築港駅",
      "片原町駅",
      "瓦町駅",
      "栗林公園駅",
      "伏石駅",
      "太田駅",
      "仏生山駅",
      "一宮駅",
      "綾川駅",
      "琴電琴平駅",
      "八栗駅",
      "琴電志度駅",
      "高田駅",
      "長尾駅",
    ],
    minPrice: 2000,
    availableAreas: [
      "ことでん全線",
      "ことでんバス全路線",
      "小豆島オリーブバス（一部路線）",
      "大川自動車株式会社（一部路線）",
      "高松市コミュニティバス（一部路線）",
      "高松市乗り合いタクシー（一部）",
    ],
  },
];

const kagawa: Prefecture = {
  id: "kagawa",
  name: "香川県",
  code: 37,
  cards: kagawaCards,
};

export { kagawa, kagawaCards };
