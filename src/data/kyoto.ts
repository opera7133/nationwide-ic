import type { Card, Prefecture } from "../types/cards";

const kyotoCards: Card[] = [
  {
    id: "randen-card",
    name: "らんでんカード",
    url: "https://www.keifuku.co.jp/cms/randen_ticket/",
    image: "/images/cards/randen-card.png",
    sales: [
      "四条大宮駅",
      "帷子ノ辻󠄀駅",
      "嵐山駅",
      "北野白梅町駅",
      "西院運輸課事務所",
    ],
    minPrice: 2500,
    availableAreas: ["京福電気鉄道（嵐山本線・北野線）全線"],
  },
];

const kyoto: Prefecture = {
  id: "kyoto",
  code: 26,
  name: "京都府",
  cards: kyotoCards,
};

export { kyoto, kyotoCards };
