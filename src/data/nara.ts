import type { Card, Prefecture } from "../types/cards";

const naraCards: Card[] = [
  {
    id: "cica",
    name: "CI-CA",
    url: "https://www.narakotsu.co.jp/route/ticket/cica/",
    image: "/images/cards/cica.png",
    sales: [
      "近鉄奈良案内所",
      "JR奈良案内所",
      "高の原案内所",
      "祝園案内所",
      "学園前案内所",
      "登美ヶ丘案内所",
      "富雄案内所",
      "東生駒案内所",
      "生駒案内所",
      "王寺案内所",
      "香芝案内所",
      "八木案内所",
      "十津川営業所",
    ],
    minPrice: 1500,
    availableAreas: ["奈良交通 路線バス全線", "エヌシーバス 路線バス全線"],
  },
];

const nara: Prefecture = {
  id: "nara",
  code: 29,
  name: "奈良県",
  cards: naraCards,
};

export { nara, naraCards };
