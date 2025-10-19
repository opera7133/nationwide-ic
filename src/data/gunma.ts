import type { Card, Prefecture } from "../types/cards";

const gunmaCards: Card[] = [
  {
    id: "nolbe",
    name: "nolbé",
    shortName: "E09",
    url: "https://maebashimobility.jp/traffic/bus/ic_card",
    image: "/images/cards/nolbe.png",
    sales: [
      "前橋駅バス案内所",
      "高崎駅バス総合案内所",
      "上信観光バス 本社",
      "群馬中央バス 前橋営業所",
      "群馬バス 総合バスセンター",
      "群馬バス 榛名営業所",
      "永井運輸 本社",
      "永井運輸 前橋営業所",
      "日本中央バス 前橋バスセンター",
      "矢島タクシー 本社",
      "矢島タクシー 岩瀬川営業所",
    ],
    minPrice: 1000,
    availableAreas: [
      "上信観光バス 路線バス全線",
      "群馬中央バス 路線バス全線",
      "群馬バス 路線バス全線",
      "永井バス 路線バス全線",
      "日本中央交通・日本中央バス 路線バス全線(奥多野線を除く)",
      "日本中央交通・日本中央バス 一部高速バス路線",
      "前橋市マイバス",
      "高崎市ぐるりん・はるバス・高崎アリーナシャトル",
      "矢島タクシー 大泉千代田線",
    ],
    suicaCompatible: true,
  },
];

const gunma: Prefecture = {
  id: "gunma",
  code: 10,
  name: "群馬県",
  cards: gunmaCards,
};

export { gunma, gunmaCards };
