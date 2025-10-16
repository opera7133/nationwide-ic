import type { Card, Prefecture } from "../types/cards";

const ibarakiCards: Card[] = [
  {
    id: "ibappi",
    name: "いばっピ",
    url: "https://www.ibako.co.jp/regular/ibappi/",
    image: "/images/cards/ibappi.png",
    sales: ["茨城交通 各営業所", "茨城交通 各案内所"],
    minPrice: 2000,
    availableAreas: ["茨城交通 路線バス全線"],
  },
];

const ibaraki: Prefecture = {
  id: "ibaraki",
  code: 8,
  name: "茨城県",
  cards: ibarakiCards,
};

export { ibaraki, ibarakiCards };
