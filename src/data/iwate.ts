import type { Card, Prefecture } from "../types/cards";

const iwateCards: Card[] = [
  {
    id: "iwate-green-pass",
    name: "Iwate Green Pass",
    shortName: "E022",
    url: "https://www.iwatekenkotsu.co.jp/iccard.html",
    image: "/images/cards/iwate-green-pass.jpg",
    sales: [
      "岩手県交通各営業所",
      "岩手県交通本社",
      "盛岡駅前バス案内所",
      "盛岡バスセンター",
    ],
    minPrice: 2000,
    availableAreas: [
      "岩手県交通 路線バス・高速バス（遠野営業所管内を除く）",
      "矢巾町市街地循環バス",
      "医大循環線",
      "駅周辺循環線",
      "花巻市街地循環バス",
      "水沢コミュニティバス",
      "奥州市営バス",
    ],
    suicaCompatible: true,
  },
  {
    id: "iguca",
    name: "iGUCA",
    shortName: "E023",
    url: "http://www.iwate-kenpokubus.co.jp/archives/21698/",
    image: "/images/cards/iguca.png",
    sales: [
      "盛岡駅前案内所",
      "盛岡バスセンター",
      "宮古駅前案内所",
      "岩手県北バス各営業所",
      "ジェイアールバス東北 二戸支店",
    ],
    minPrice: 1000,
    availableAreas: [
      "岩手県北バス 路線バス・高速バス",
      "ジェイアールバス東北 白樺号・スワロー号・早坂高原号・アーバン号",
    ],
    suicaCompatible: true,
  },
];

const iwate: Prefecture = {
  id: "iwate",
  code: 3,
  name: "岩手県",
  cards: iwateCards,
};

export { iwate, iwateCards };
