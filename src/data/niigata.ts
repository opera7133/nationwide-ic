import type { Card, Prefecture } from "../types/cards";

const niigataCards: Card[] = [
  {
    id: "ryuto",
    name: "りゅーと",
    shortName: "NB",
    url: "https://www.niigata-kotsu.co.jp/~noriai/route-bus/ryuto/",
    image: "/images/cards/ryuto.jpg",
    sales: [
      "バスセンター案内所",
      "新潟駅案内所",
      "新潟交通各営業所",
      "新潟交通 路線バス車内",
    ],
    minPrice: 2000,
    availableAreas: ["新潟交通 路線バス・高速バス(公式サイト参照)"],
  },
  {
    id: "busdoko-pay",
    name: "バスどこPay",
    shortName: "BDP",
    url: "https://www.city.shibata.lg.jp/kurashi/kotsu/bus/1018024.html",
    image: "/images/cards/busdoko-pay.jpg",
    sales: ["新発田市観光情報センター"],
    minPrice: 0,
    availableAreas: [
      "市街地循環バス（あやめバス）",
      "川東コミュニティバス",
      "菅谷・加治地区コミュニティバス",
      "まつうら号",
      "本田・天王号",
      "中浦・荒橋号",
      "あかたに号",
      "かじかわ号",
      "しうんじ号",
      "ささき号",
    ],
  },
];

const niigata: Prefecture = {
  id: "niigata",
  code: 15,
  name: "新潟県",
  cards: niigataCards,
};

export { niigata, niigataCards };
