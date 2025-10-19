import type { Card, Prefecture } from "../types/cards";

const hiroshimaCards: Card[] = [
  {
    id: "mobiry-days",
    name: "MOBIRY DAYS",
    shortName: "MD",
    url: "https://www.mobirydays.jp",
    image: "/images/cards/mobiry-days.png",
    sales: [
      "広島電鉄 各営業所・営業センター",
      "芸陽バス 各営業所",
      "北海道北見バス 各営業所",
    ],
    minPrice: 500,
    availableAreas: [
      "広島電鉄 電車・バス全線（松江線、米子線を除く）",
      "備北交通 バス全線",
      "芸陽バス バス全線",
      "HD西広島 バス全線",
      "廿日市さくらバス全線",
      "ささき観光 おおのハートバス全線",
      "佐伯さくらバス全線",
      "瀬戸内産交 広川尻線、沖友線",
      "野呂山タクシー 広長浜線、川尻地区生活バス",
      "なべタクシー 音戸さざなみ線、田原藤の脇線",
      "呉交通 阿賀音戸の瀬戸線",
      "東和交通 呉苗代下条線、北原神山峠線、見晴町線",
      "朝日交通 昭和循環線（北コース・中央コース・南コース）、熊野阿戸線",
      "富士交通 仁方小須磨線、三条二河宝町線、横路交叉点循環線、白石白岳交叉点循環線、安浦地区生活バス",
      "倉橋交通 倉橋地区生活バス",
      "ひまわり交通 下蒲刈地区生活バス",
      "宮島松大汽船 宮島口～宮島航路",
      "広島バス エキまちループ、まちのわループ、21号線、22号線、26号線",
      "広島交通 まちのわループ、今吉田線",
      "JRバス中国 クレアライン",
      "君田交通 川の駅三次線",
      "ひろでんモビリティサービス 五日市湾岸地区　AIオンデマンドバス・路線バス",
      "北海道北見バス バス全線",
    ],
  },
];

const hiroshima: Prefecture = {
  id: "hiroshima",
  code: 34,
  name: "広島県",
  cards: hiroshimaCards,
};

export { hiroshima, hiroshimaCards };
