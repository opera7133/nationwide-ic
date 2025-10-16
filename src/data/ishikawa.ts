import type { Card, Prefecture } from "../types/cards";

const ishikawaCards: Card[] = [
  {
    id: "ica",
    name: "ICa",
    url: "https://www.hokutetsu.co.jp/ica/",
    image: "/images/cards/ica.jpg",
    sales: [
      "北陸鉄道チケットセンター",
      "駅東口北鉄グループ案内所",
      "北鉄バスサービスセンター武蔵エムザ店",
      "北鉄金沢バス北部営業所",
      "北陸鉄道金沢営業所",
      "北鉄白山バス本社窓口",
      "北鉄加賀バス本社窓口",
      "北鉄加賀バス加賀営業所",
      "北鉄能登バス輪島旅行センター",
      "北鉄能登バス飯田支所",
      "香林坊大和",
      "金沢大学生協",
      "中部日本トラベル",
      "石川県職互助会",
      "金沢電気ビル２階売店",
      "鶴来駅",
      "内灘駅",
      "野町駅",
    ],
    minPrice: 2000,
    availableAreas: [
      "北鉄金沢バス 全線",
      "北鉄白山バス 全線",
      "北鉄加賀バス 全線",
      "能登方面特急バス",
      "城下まち金沢周遊バス",
      "金沢ふらっとバス（此花・菊川ルート）",
    ],
  },
  {
    id: "ir-ishikawa-icoca",
    name: "ICOCA(IRいしかわ鉄道)",
    url: "https://www.ishikawa-railway.jp/ticket/icoca/index.html",
    image: "/images/cards/ir-ishikawa-icoca.png",
    sales: [
      "IRいしかわ鉄道 有人窓口（加賀温泉駅、小松駅、松任駅、金沢駅、津幡駅）",
      "IRいしかわ鉄道 各駅多機能券売機",
    ],
    minPrice: 2000,
    availableAreas: ["ICOCAと共通"],
    sharing: true,
  },
];

const ishikawa: Prefecture = {
  id: "ishikawa",
  code: 17,
  name: "石川県",
  cards: ishikawaCards,
};

export { ishikawa, ishikawaCards };
