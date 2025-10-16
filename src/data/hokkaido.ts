import type { Card, Prefecture } from "../types/cards";

const hokkaidoCards: Card[] = [
  {
    id: "kitaca",
    name: "Kitaca",
    url: "https://www.jrhokkaido.co.jp/kitaca/",
    image: "/images/cards/kitaca.png",
    sales: [
      "Kitaca対応券売機",
      "Kitaca利用可能エリア内「みどりの窓口」",
      "指定席券売機",
    ],
    minPrice: 2000,
    availableAreas: [
      "函館本線（小樽〜旭川間）",
      "函館本線（函館〜新函館北斗間）",
      "千歳線",
      "札沼線",
    ],
    sharing: true,
  },
  {
    id: "sapica",
    name: "SAPICA",
    url: "https://www.sapica.jp",
    image: "/images/cards/sapica.jpg",
    sales: [
      "地下鉄券売機",
      "地下鉄定期券発売所",
      "バスターミナル",
      "営業所窓口",
    ],
    minPrice: 2000,
    availableAreas: [
      "札幌市営地下鉄",
      "札幌市電",
      "JR北海道バス",
      "じょうてつ",
      "北海道中央バス",
    ],
  },
  {
    id: "icas-nimoca",
    name: "ICAS nimoca",
    url: "https://www.city.hakodate.hokkaido.jp/docs/2020111700024/",
    image: "/images/cards/icas-nimoca.jpg",
    sales: [
      "函館市企業局交通部駒場乗車券販売所",
      "函館バス各営業所",
      "函館バス函館駅前案内所",
      "丸井今井函館店",
      "函館市電車内",
      "函館バス車内",
    ],
    minPrice: 2000,
    availableAreas: ["nimocaと共通"],
    sharing: true,
  },
  {
    id: "asaca",
    name: "Asaca",
    url: "https://www.asahikawa-denkikidou.jp/ic-card/",
    image: "/images/cards/asaca.png",
    sales: [
      "共栄営業所",
      "旭川電気軌道総合案内所",
      "アモールショッピングセンター",
      "イオンモール旭川西ショッピングセンター",
      "東神楽町役場",
      "東神楽町ふれあい交流館",
      "道の駅ひがしかわ道草館",
      "春光バスセンター待合所",
      "無印良品旭川花咲店",
    ],
    minPrice: 1500,
    availableAreas: ["旭川電気軌道 路線バス全線", "Doカード利用エリア"],
  },
  {
    id: "do-card",
    name: "Doカード",
    url: "https://www.dohokubus.com/buscard.html",
    image: "/images/cards/do-card.jpg",
    sales: [
      "道北バス各営業所",
      "道北バス旭川駅前営業所",
      "イオン旭川永山店",
      "Asaca自動販売機設置場所",
    ],
    minPrice: 1500,
    availableAreas: ["道北バス 路線バス全線", "Asaca利用エリア"],
  },
];

const hokkaido: Prefecture = {
  id: "hokkaido",
  code: 1,
  name: "北海道",
  cards: hokkaidoCards,
};

export { hokkaido, hokkaidoCards };
