import type { Card, Prefecture } from "../types/cards";

const hyougoCards: Card[] = [
  {
    id: "hanica",
    name: "hanica",
    shortName: "HH",
    url: "https://www.hankyubus.co.jp/rosen/ticket/hanica.html",
    image: "/images/cards/hanica.png",
    sales: ["阪急バス・阪神バス 車内", "各バス営業所"],
    minPrice: 2000,
    availableAreas: ["阪急バス全線", "阪神バス全線"],
  },
  {
    id: "itappy",
    name: "itappy",
    shortName: "IT",
    url: "https://itamicity-bus.jp/charge/itappy",
    image: "/images/cards/itappy.jpg",
    sales: [
      "伊丹市交通局（広畑営業所）",
      "阪急伊丹駅前バス総合案内所",
      "JR伊丹駅2階コンコース",
      "塚口いかりスーパー地下1階",
    ],
    minPrice: 2500,
    availableAreas: ["伊丹市営バス 全線"],
  },
  {
    id: "nicopa",
    name: "NicoPa",
    shortName: "SH",
    url: "https://www.shinkibus.co.jp/bus/iccard/index.html",
    image: "/images/cards/nicopa.png",
    sales: [
      "姫路駅前案内所",
      "山崎待合所",
      "神姫バス各営業所・案内所",
      "神戸学院大学 有瀬店",
      "神戸三宮バスターミナル",
      "神戸学院大学 ポートアイランド店",
      "ウイング神姫 西脇案内所",
      "神姫ゾーンバス 西神営業所",
      "ウイング神姫 篠山営業所",
      "ウイング神姫 赤穂営業所",
    ],
    minPrice: 2000,
    availableAreas: [
      "神姫バス 路線バス全線",
      "神姫ゾーンバス 路線バス全線",
      "ウイング神姫 路線バス全線（宍粟市・神河町除く）",
      "ウイング神姫（赤穂地区） 路線バス全線",
      "三宮～ＵＳＪ線",
      "新大阪～関西記念墓園",
      "ウイング神姫 山崎〜三宮線",
      "かこバス（加古川市）",
      "じょうとんバス（高砂市）",
      "たつの市コミュニティバス（たつの市）",
      "のぎくバス（多可町・西脇市）",
      "しばざくら号・おりひめ（西脇市）",
      "ポートループ",
    ],
  },
];

const hyougo: Prefecture = {
  id: "hyougo",
  code: 28,
  name: "兵庫県",
  cards: hyougoCards,
};

export { hyougo, hyougoCards };
