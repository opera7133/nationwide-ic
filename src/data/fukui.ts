import type { Card, Prefecture } from "../types/cards";

const fukuiCards: Card[] = [
  {
    id: "hapiline-icoca",
    name: "ICOCA(ハピラインふくい)",
    url: "https://www.hapi-line.co.jp/ticket/ic/",
    image: "/images/cards/hapiline-icoca.jpg",
    sales: [
      "ハピラインふくい 芦原温泉駅 券売機・窓口",
      "ハピラインふくい 福井駅 券売機・窓口",
      "ハピラインふくい 鯖江駅 券売機・窓口",
      "ハピラインふくい 武生駅 券売機・窓口",
      "敦賀駅（ハピラインふくいお客さまカウンター）窓口",
    ],
    minPrice: 2000,
    availableAreas: ["ICOCAと共通"],
    sharing: true,
  },
];

const fukui: Prefecture = {
  id: "fukui",
  name: "福井県",
  code: 18,
  cards: fukuiCards,
};

export { fukui, fukuiCards };
