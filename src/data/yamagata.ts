import type { Card, Prefecture } from "../types/cards";

const yamagataCards: Card[] = [
  {
    id: "yamako-cherica",
    name: "yamako cherica",
    shortName: "E082",
    url: "https://www.yamakobus.jp/guide/charter-ic.html",
    image: "/images/cards/yamako-cherica.jpg",
    sales: [
      "山交ビルバス案内センター",
      "山形駅前案内所",
      "山交各営業所",
      "天童運行管理所",
    ],
    minPrice: 1000,
    availableAreas: [
      "山交バス全線（予約制高速バスを除く）",
      "山形市コミュニティバス東部及び西部循環線",
      "米沢市民バス",
      "山形空港シャトル",
      "上山市市営バス",
    ],
    suicaCompatible: true,
  },
  {
    id: "shoko-cherica",
    name: "shoko cherica",
    shortName: "E083",
    url: "https://www.shonaikotsu.jp/local_bus/shoko_cherica.html",
    image: "/images/cards/shoko-cherica.png",
    sales: ["エスモールバスターミナル", "庄交バスターミナル"],
    minPrice: 1000,
    availableAreas: [
      "庄内交通 路線バス全線",
      "庄内交通 高速バス 酒田・鶴岡～山形線",
    ],
    suicaCompatible: true,
  },
];

const yamagata: Prefecture = {
  id: "yamagata",
  code: 6,
  name: "山形県",
  cards: yamagataCards,
};

export { yamagata, yamagataCards };
