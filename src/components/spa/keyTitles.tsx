export const basicKeyTitles = {
  spaName: "温泉名",
  address: "所在地",
  phoneNumber: "電話番号",
  businessHours: "営業時間",
  regularHoliday: "定休日",
} as const;

export const priceKeyTitles = {
  adultPrice: "大人料金（平日）",
  childPrice: "子ども料金（平日）",
  adultWeekendPrice: "大人料金（休日）",
  childWeekendPrice: "子ども料金（休日）",
} as const;

export const amenityKeyTitles = {
  hasFreeShampoo: "無料シャンプー",
  hasPaidShampoo: "有料シャンプー",
  hasTowel: "タオル",
  hasFreeHairdryer: "無料ドライヤー",
  hasPaidHairdryer: "有料ドライヤー",
  hasCreditCard: "クレジットカード",
} as const;

export const facilityKeysTitles = {
  hasOpenAirBath: "露天風呂",
  hasWaterBath: "水風呂",
  hasSauna: "サウナ",
  hasBubbleBath: "泡風呂",
  hasJetBathSpa: "ジェットバス",
  hasShoulderHittingShower: "打たせ湯",
  hasSleepingBath: "寝湯",
  hasCypressBath: "檜風呂",
  hasBedrockBath: "岩盤浴",
  hasElectricBath: "電気風呂",
  hasFamilyBath: "家族風呂",
  customSpa: "オリジナル温泉",
} as const;

export const anotherFacilityKeyTitles = {
  hasRestaurant: "レストラン",
  hasBreakPlace: "休憩所",
  hasMassageMachine: "マッサージ機",
  hasVendingMachine: "自動販売機",
  hasStore: "売店",
  customFacility: "独自施設",
} as const;

export const spaKeyTitles = {
  basic: "基本情報",
  price: "料金設定",
  amenity: "アメニティー",
  spaFacility: "温泉設備",
  anotherFacility: "そのほかの施設",
} as const;
