import type { Card, Prefecture } from "../types/cards";

const wakayamaCards: Card[] = [
  {
    id: "kinoca",
    name: "kinoca",
    shortName: "WK",
    url: "https://www.wakayamabus.co.jp/news/kinoca/",
    image: "/images/cards/kinoca.png",
    sales: ["和歌山バス・和歌山バス那賀の各営業所・定期券発売所・バス車内"],
    minPrice: 2000,
    availableAreas: ["和歌山バス 路線バス全線", "和歌山バス那賀 路線バス全線"],
  },
];

const wakayama: Prefecture = {
  id: "wakayama",
  code: 30,
  name: "和歌山県",
  cards: wakayamaCards,
};

export { wakayama, wakayamaCards };
