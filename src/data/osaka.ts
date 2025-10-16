import type { Card, Prefecture } from "../types/cards";

const osakaCards: Card[] = [
  {
    id: "icoca",
    name: "ICOCA",
    url: "https://www.jr-odekake.net/icoca/",
    image: "/images/cards/icoca.png",
    sales: [],
    minPrice: 2000,
    availableAreas: [],
    sharing: true,
  },
  {
    id: "pitapa",
    name: "PiTaPa",
    url: "https://www.pitapa.com/",
    image: "/images/cards/pitapa.png",
    sales: [],
    minPrice: 0,
    availableAreas: [],
    sharing: true,
  },
  {
    id: "hanica",
    name: "hanica",
    url: "https://www.hankyubus.co.jp/rosen/ticket/hanica.html",
    image: "/images/cards/hanica.png",
    sales: ["阪急バス・阪神バス 車内", "各バス営業所"],
    minPrice: 2000,
    availableAreas: ["阪急バス全線", "阪神バス全線"],
  },
  {
    id: "tsukica",
    name: "Tsukica",
    url: "https://www.citybus.city.takatsuki.osaka.jp/unchin/2018121000043/",
    image: "/images/cards/tsukica.jpg",
    sales: [
      "JR高槻駅南案内所",
      "阪急高槻市駅案内所",
      "JR摂津富田駅案内所",
      "芝生営業所",
      "緑が丘営業所",
    ],
    minPrice: 2000,
    availableAreas: ["高槻市営バス全線"],
  },
  {
    id: "nacci",
    name: "なっち",
    url: "https://www.nankaibus.jp/rosen/ticket/",
    image: "/images/cards/nacci.png",
    sales: ["南海バス・南海りんかんバス 車内", "各バス営業所・定期券発売所"],
    minPrice: 3000,
    availableAreas: [
      "南海バス全線",
      "関西空港リムジンバス（泉北〜河内長野線,関西空港〜泉佐野）",
      "南海りんかんバス全線",
    ],
    ended: true,
    endedAt: new Date("2025-08-31"),
  },
];

const osaka: Prefecture = {
  id: "osaka",
  code: 27,
  name: "大阪府",
  cards: osakaCards,
};

export { osaka, osakaCards };
