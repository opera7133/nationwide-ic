import type { Card, Prefecture } from "../types/cards";

const kagoshimaCards: Card[] = [
  {
    id: "rapica",
    name: "RapiCa",
    shortName: "F1",
    url: "https://www.kotsu-city-kagoshima.jp/ticket-summary/rapica/",
    image: "/images/cards/rapica.jpg",
    sales: [
      "交通局内乗車券発売所",
      "市役所前乗車券発売所",
      "谷山電停乗車券発売所(臨時)",
      "桜島営業所",
      "市電・市バス 車内",
      "乗車券取扱店",
      "乗車券取扱郵便局",
    ],
    minPrice: 3000,
    availableAreas: [
      "鹿児島市交通局 市電全線",
      "鹿児島市交通局 市バス全線",
      "カゴシマシティビュー",
      "サクラジマアイランドビュー",
      "南国交通バス",
      "JR九州バス",
      "鹿児島交通バス",
      "空港リムジンバス",
      "南国交通エアポートシャトルバス",
      "桜島フェリー",
      "垂水フェリー",
      "いわさきICカード利用エリア",
    ],
  },
  {
    id: "iwasaki-ic",
    name: "いわさきICカード",
    shortName: "IW",
    url: "https://www.iwasaki-corp.com/corp/ic_card/",
    image: "/images/cards/iwasaki-ic.jpg",
    sales: [
      "鹿児島交通 山形屋窓口",
      "鹿児島交通 天文館チケットセンター",
      "鹿児島交通 指宿営業所",
      "鹿児島交通 加世田営業所",
      "鹿児島交通 川内営業所",
      "鹿児島交通 国分営業所",
      "鹿児島交通 鹿屋大手町営業所",
      "鹿児島交通 志布志販売所",
      "鹿児島交通 都城窓口",
      "鹿児島交通 垂水販売所",
      "種子島・屋久島交通 屋久島営業所",
    ],
    minPrice: 3000,
    availableAreas: [
      "鹿児島交通 路線バス",
      "種子島屋久島交通 路線バス",
      "高速船トッピー＆ロケット",
      "垂水フェリー",
      "フェリーはいびすかす",
      "RapiCa利用可能エリア",
    ],
  },
];

const kagoshima: Prefecture = {
  id: "kagoshima",
  code: 46,
  name: "鹿児島県",
  cards: kagoshimaCards,
};

export { kagoshima, kagoshimaCards };
