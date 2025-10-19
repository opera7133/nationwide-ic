import type { Card, Prefecture } from "../types/cards";

const fukushimaCards: Card[] = [
  {
    id: "noruca",
    name: "NORUCA",
    shortName: "FK",
    url: "https://www.fukushima-koutu.co.jp/route/noruca/",
    image: "/images/cards/noruca.png",
    sales: [
      "福島交通各営業所",
      "福島交通各出張所",
      "福島支社",
      "福島駅東口案内所",
      "掛田車庫",
      "保原バスセンター",
      "土湯温泉観光協会",
      "郡山支社",
      "郡山駅前案内所",
      "Mot.Comもとみや",
      "一久屋商店",
      "岳温泉観光協会",
      "アイ・ランドネモト",
    ],
    minPrice: 2000,
    availableAreas: [
      "福島交通 路線バス全線",
      "福島交通 飯坂線",
      "会津バス 路線バス全線",
      "石川町 ミニバス",
      "鮫川村 デマンド交通",
      "カネハチタクシー 川俣-松川間 路線バス",
    ],
  },
  {
    id: "aizu-noruca",
    name: "AIZU NORUCA",
    shortName: "AZ",
    url: "https://www.aizubus.com/rosen/aizu_noruca",
    image: "/images/cards/aizu-noruca.png",
    sales: ["若松駅前バスターミナル", "会津若松駅前案内所", "会津バス各営業所"],
    minPrice: 2000,
    availableAreas: ["NORUCAと共通"],
  },
  {
    id: "lococa",
    name: "LOCOCA",
    shortName: "E0C",
    url: "https://www.joko.co.jp/lococa-menu/",
    image: "/images/cards/lococa.png",
    sales: ["新常磐交通各案内所"],
    minPrice: 1000,
    availableAreas: [
      "新常磐交通バス 路線バス全線",
      "ジェイアールバス関東白河支店バス運行エリア",
    ],
    suicaCompatible: true,
  },
];

const fukushima: Prefecture = {
  id: "fukushima",
  code: 7,
  name: "福島県",
  cards: fukushimaCards,
};

export { fukushima, fukushimaCards };
