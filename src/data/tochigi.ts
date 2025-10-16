import type { Card, Prefecture } from "../types/cards";

const tochigiCards: Card[] = [
  {
    id: "totra",
    name: "totra",
    url: "https://www.ic-totra.jp",
    image: "/images/cards/totra.png",
    sales: [
      "関東自動車 各営業所",
      "関東自動車 各定期券センター",
      "JRバス関東 宇都宮支店",
      "JRバス関東 西那須野支店",
      "宇都宮ライトレール 宇都宮駅東口停留所",
      "宇都宮ライトレール 車両基地",
    ],
    minPrice: 1000,
    availableAreas: [
      "宇都宮ライトレール全線",
      "関東自動車 路線バス全線",
      "ジェイアールバス関東（宇都宮支店・西那須野支店） 一般路線バス全線",
    ],
    suicaCompatible: true,
  },
];

const tochigi: Prefecture = {
  id: "tochigi",
  code: 9,
  name: "栃木県",
  cards: tochigiCards,
};

export { tochigi, tochigiCards };
