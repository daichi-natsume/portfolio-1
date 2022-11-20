interface feature {
  src?: string;
  content?: string;
}

const featureList = [{
  src: "/image/feature/feature1.jpg",
  content: "一世を風靡したタピオカミルクティーがなぜ人気なのかを解説。タピオカミルクティーの秘密からバズる秘訣を見出します。",
}, {
  src: "/image/feature/feature2.jpg",
  content: "コーヒーを美味しく淹れるにはコツがあった！コーヒーソムリエによるコーヒーの淹れ方を解説！",
}, {
  src: "/image/feature/feature3.jpg",
  content: "お茶にはこんなに種類があった！？世界で飲まれるお茶をご紹介します。是非新しいお茶を試してくださいね！",
}, {
  src: "/image/feature/feature4.jpg",
  content: "ビール好きにはたまらない！世界のビール事情を徹底解説！お酒に関するイロハもお伝えします。",
}];

export interface FeatureData {
  featureList: feature[];
}

export function getFeatureData() {
  return {
    featureList: featureList,
  };
}
