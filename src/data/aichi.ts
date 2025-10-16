import type { Card, Prefecture } from "../types/cards";

const aichiCards: Card[] = [
  {
    id: "toica",
    name: "TOICA",
    url: "https://toica.jr-central.co.jp",
    image: "/images/cards/toica.png",
    sales: ["JR東海の主な駅の券売機・みどりの窓口", "JR東海きっぷうりば"],
    minPrice: 2000,
    availableAreas: ["愛知環状鉄道 全線"],
    sharing: true,
  },
  {
    id: "manaca",
    name: "manaca",
    url: "https://manaca.jp",
    image: "/images/cards/manaca.png",
    sales: [
      "名古屋市営地下鉄 券売機",
      "名古屋市営地下鉄 交通局サービスセンター",
      "名鉄線の主な駅の券売機・窓口",
      "名鉄バスの主な出札所・バス車内",
      "豊橋鉄道の主な駅の券売機・窓口",
      "あおなみ線の主な駅の券売機・窓口",
      "愛知高速鉄道の主な駅の券売機・窓口",
    ],
    minPrice: 2000,
    availableAreas: [
      "名古屋市営地下鉄 全線",
      "名古屋鉄道 全線",
      "豊橋鉄道 全線",
      "あおなみ線 全線",
      "愛知高速鉄道 全線",
      "名古屋ガイドウェイバス 全線",
      "名古屋市交通局 路線バス全線",
      "名鉄バス 路線バス全線",
      "名鉄バス 一部高速バス",
      "知多バス 路線バス全線",
      "北陸鉄道 一部路線バス",
      "名鉄東部交通 路線バス全線",
      "岐阜バス 一部路線バス",
      "豊鉄バス 路線バス全線",
      "豊鉄バス 一部高速バス",
    ],
    sharing: true,
  },
];

const aichi: Prefecture = {
  id: "aichi",
  code: 23,
  name: "愛知県",
  cards: aichiCards,
};

export { aichi, aichiCards };
