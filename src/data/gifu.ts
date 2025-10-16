import type { Card, Prefecture } from "../types/cards";

const gifuCards: Card[] = [
  {
    id: "ayuca",
    name: "ayuca",
    url: "https://www.gifubus.co.jp/rosen/ayuca.html",
    image: "/images/cards/ayuca.jpg",
    sales: [
      "岐阜バスターミナル",
      "岐阜バスJR岐阜案内所",
      "岐阜バス 各営業所",
      "関旅行センター",
      "岐阜大学生協",
    ],
    minPrice: 3000,
    availableAreas: [
      "岐阜バス 全線(イオンモール各務原線,高速バス岐阜新宿線,高速バス他社運行便を除く)",
      "岐阜市 コミュニティバス",
      "各務原市 コミュニティバス",
      "関市 コミュニティバス",
      "山県市 コミュニティバス",
      "瑞穂市 コミュニティバス",
      "岐南町 コミュニティバス",
    ],
    notes: "2026年度廃止予定",
  },
];

const gifu: Prefecture = {
  id: "gifu",
  code: 21,
  name: "岐阜県",
  cards: gifuCards,
};

export { gifu, gifuCards };
