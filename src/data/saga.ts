import type { Card, Prefecture } from "../types/cards";

const sagaCards: Card[] = [
  {
    id: "tsu-tsu-nimoca",
    name: "tsu-tsu-nimoca",
    url: "http://www.bus.saga.saga.jp/nimoca_guide.html",
    image: "/images/cards/tsu-tsu-nimoca.jpg",
    sales: ["佐賀市交通局窓口", "佐賀駅バスセンター窓口", "佐賀市営バス車内"],
    minPrice: 2000,
    availableAreas: ["nimocaと共通"],
    sharing: true,
  },
];

const saga: Prefecture = {
  id: "saga",
  name: "佐賀県",
  code: 41,
  cards: sagaCards,
};

export { saga, sagaCards };
