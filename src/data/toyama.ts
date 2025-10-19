import type { Card, Prefecture } from "../types/cards";

const toyamaCards: Card[] = [
  {
    id: "ecomyca",
    name: "ecomyca",
    shortName: "TC",
    url: "https://www.chitetsu.co.jp/?page_id=618",
    image: "/images/cards/ecomyca.jpg",
    sales: [
      "富山地鉄乗車券センター",
      "富山地鉄西町乗車券センター",
      "路面電車等公共交通案内所",
      "北電産業アーバンショップ",
      "加越能バス 高岡駅前 乗車券センター",
      "富山呉西トラベル",
      "富山自動車営業所",
      "八尾自動車営業所",
      "黒部自動車営業所",
      "富山地鉄案内所",
      "電鉄富山駅",
      "稲荷町駅",
      "東新庄駅",
      "越中荏原駅",
      "越中舟橋駅",
      "寺田駅",
      "上市駅",
      "中滑川駅",
      "電鉄魚津駅",
      "新魚津駅",
      "電鉄黒部駅",
      "宇奈月温泉駅",
      "五百石駅",
      "岩峅寺駅",
      "立山駅",
      "南富山駅",
      "鉄道・市内電車・路線バス・フィーダーバス 車内",
    ],
    minPrice: 2000,
    availableAreas: [
      "富山地方鉄道 全線",
      "富山地方鉄道 路線バス全線",
      "富山地方鉄道 市内電車全線",
      "フィーダーバス",
      "まいどはやバス",
    ],
  },
  {
    id: "ainokaze-icoca",
    name: "ICOCA(あいの風とやま鉄道)",
    shortName: "JW-A",
    url: "https://ainokaze.co.jp/ticket/ic",
    image: "/images/cards/ainokaze-icoca.jpg",
    sales: ["あいの風とやま鉄道 各駅券売機", "あいの風とやま鉄道 各駅窓口"],
    minPrice: 2000,
    availableAreas: ["ICOCAと共通"],
    sharing: true,
  },
];

const toyama: Prefecture = {
  id: "toyama",
  code: 16,
  name: "富山県",
  cards: toyamaCards,
};

export { toyama, toyamaCards };
