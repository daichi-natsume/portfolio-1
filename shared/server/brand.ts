interface brand {
  status?: number;
  name?: string;
  src?: string;
  content?: string;
  genre?: string;
  num?: number;
}

export interface brandDetail {
  companyName: string;
  brandName: string;
  genre: string;
  price: string;
  area: string;
  items: string;
  profile: string;
  imgs: string[];
}

const brandDataList = [{
  status: 0,
  genre: "洋食",
  name: "花村屋拉麺",
  src: "/image/brandLogo/logo1.jpg",
  content: "花村屋拉麺の説明はここ花村屋拉麺の説明はここ花村屋拉麺の説明はここ花村屋拉麺の説明はここ花村屋拉麺の説明はここ花村屋拉麺の説明はここ",
}, {
  status: 1,
  genre: "洋食",
  name: "花村屋拉麺",
  src: "/image/brandLogo/logo1.jpg",
  content: "花村屋拉麺の説明はここ花村屋拉麺の説明はここ花村屋拉麺の説明はここ花村屋拉麺の説明はここ",
}, {
  status: 2,
  genre: "洋食",
  name: "花村屋拉麺",
  src: "/image/brandLogo/logo1.jpg",
  content: "花村屋拉麺の説明はここ花村屋拉麺の説明はここ",
}];

const brandDataList2 = [{
  status: 0,
  genre: "洋食",
  src: "/image/brandLogo/logo1.jpg",
  name: "花村屋拉麺",
  content: "花村屋拉麺の説明はここ花村屋拉麺の説明はここ花村屋拉麺の説明はここ花村屋拉麺の説明はここ花村屋拉麺の説明はここ花村屋拉麺の説明はここ",
}, {
  status: 1,
  genre: "洋食",
  src: "/image/brandLogo/logo1.jpg",
  name: "花村屋拉麺",
  content: "花村屋拉麺の説明はここ花村屋拉麺の説明はここ花村屋拉麺の説明はここ",
}, {
  status: 2,
  genre: "洋食",
  src: "/image/brandLogo/logo1.jpg",
  name: "花村屋拉麺",
  content: "花村屋拉麺の説明はここ花村屋拉麺の説明はここ",
}, {
  status: 3,
  genre: "洋食",
  src: "/image/brandLogo/logo1.jpg",
  name: "花村屋拉麺",
  content: "花村屋拉麺の説明はここ花村屋拉麺の説明はここ花村屋拉麺の説明はここ花村屋拉麺の説明はここ花村屋拉麺の説明はここ花村屋拉麺の説明はここ",
}, {
  status: 4,
  genre: "洋食",
  src: "/image/brandLogo/logo1.jpg",
  name: "花村屋拉麺",
  content: "花村屋拉麺の説明はここ花村屋拉麺の説明はここ花村屋拉麺の説明はここ花村屋拉麺の説明はここ花村屋拉麺の説明はここ花村屋拉麺の説明はここ",
}];

const brandDataList3 = [{
  name: "オリジン弁当",
  genre: "和食、洋食、中華",
  price: "500円 〜 2,000円",
  imgs: [
    "/icon/brand-detail/brandPhoto0.png",
    "/icon/brand-detail/brandPhoto1.jpeg",
    "/icon/brand-detail/brandPhoto2.jpeg",
    "/icon/brand-detail/brandPhoto3.jpeg",
    "/icon/brand-detail/brandPhoto4.jpeg",
    "/icon/brand-detail/brandPhoto5.jpeg",
  ],
}, {
  name: "オリジン弁当",
  genre: "和食、洋食、中華",
  price: "500円 〜 2,000円",
  imgs: [
    "/icon/brand-detail/brandPhoto0.png",
    "/icon/brand-detail/brandPhoto1.jpeg",
    "/icon/brand-detail/brandPhoto2.jpeg",
    "/icon/brand-detail/brandPhoto3.jpeg",
    "/icon/brand-detail/brandPhoto4.jpeg",
    "/icon/brand-detail/brandPhoto5.jpeg",
  ],
}, {
  name: "オリジン弁当",
  genre: "和食、洋食、中華",
  price: "500円 〜 2,000円",
  imgs: [
    "/icon/brand-detail/brandPhoto0.png",
    "/icon/brand-detail/brandPhoto1.jpeg",
    "/icon/brand-detail/brandPhoto2.jpeg",
    "/icon/brand-detail/brandPhoto3.jpeg",
    "/icon/brand-detail/brandPhoto4.jpeg",
    "/icon/brand-detail/brandPhoto5.jpeg",
  ],
}, {
  name: "オリジン弁当",
  genre: "和食、洋食、中華",
  price: "500円 〜 2,000円",
  imgs: [
    "/icon/brand-detail/brandPhoto0.png",
    "/icon/brand-detail/brandPhoto1.jpeg",
    "/icon/brand-detail/brandPhoto2.jpeg",
    "/icon/brand-detail/brandPhoto3.jpeg",
    "/icon/brand-detail/brandPhoto4.jpeg",
    "/icon/brand-detail/brandPhoto5.jpeg",
  ],
}, {
  name: "オリジン弁当",
  genre: "和食、洋食、中華",
  price: "500円 〜 2,000円",
  imgs: [
    "/icon/brand-detail/brandPhoto0.png",
    "/icon/brand-detail/brandPhoto1.jpeg",
    "/icon/brand-detail/brandPhoto2.jpeg",
    "/icon/brand-detail/brandPhoto3.jpeg",
    "/icon/brand-detail/brandPhoto4.jpeg",
    "/icon/brand-detail/brandPhoto5.jpeg",
  ],
}, {
  name: "オリジン弁当",
  genre: "和食、洋食、中華",
  price: "500円 〜 2,000円",
  imgs: [
    "/icon/brand-detail/brandPhoto0.png",
    "/icon/brand-detail/brandPhoto1.jpeg",
    "/icon/brand-detail/brandPhoto2.jpeg",
    "/icon/brand-detail/brandPhoto3.jpeg",
    "/icon/brand-detail/brandPhoto4.jpeg",
    "/icon/brand-detail/brandPhoto5.jpeg",
  ],
}, {
  name: "オリジン弁当",
  genre: "和食、洋食、中華",
  price: "500円 〜 2,000円",
  imgs: [
    "/icon/brand-detail/brandPhoto0.png",
    "/icon/brand-detail/brandPhoto1.jpeg",
    "/icon/brand-detail/brandPhoto2.jpeg",
    "/icon/brand-detail/brandPhoto3.jpeg",
    "/icon/brand-detail/brandPhoto4.jpeg",
    "/icon/brand-detail/brandPhoto5.jpeg",
  ],
}, {
  name: "オリジン弁当",
  genre: "和食、洋食、中華",
  price: "500円 〜 2,000円",
  imgs: [
    "/icon/brand-detail/brandPhoto0.png",
    "/icon/brand-detail/brandPhoto1.jpeg",
    "/icon/brand-detail/brandPhoto2.jpeg",
    "/icon/brand-detail/brandPhoto3.jpeg",
    "/icon/brand-detail/brandPhoto4.jpeg",
    "/icon/brand-detail/brandPhoto5.jpeg",
  ],
}, {
  name: "オリジン弁当",
  genre: "和食、洋食、中華",
  price: "500円 〜 2,000円",
  imgs: [
    "/icon/brand-detail/brandPhoto0.png",
    "/icon/brand-detail/brandPhoto1.jpeg",
    "/icon/brand-detail/brandPhoto2.jpeg",
    "/icon/brand-detail/brandPhoto3.jpeg",
    "/icon/brand-detail/brandPhoto4.jpeg",
    "/icon/brand-detail/brandPhoto5.jpeg",
  ],
}, {
  name: "オリジン弁当",
  genre: "和食、洋食、中華",
  price: "500円 〜 2,000円",
  imgs: [
    "/icon/brand-detail/brandPhoto0.png",
    "/icon/brand-detail/brandPhoto1.jpeg",
    "/icon/brand-detail/brandPhoto2.jpeg",
    "/icon/brand-detail/brandPhoto3.jpeg",
    "/icon/brand-detail/brandPhoto4.jpeg",
    "/icon/brand-detail/brandPhoto5.jpeg",
  ],
}];

const brandDataList4 = {
  companyName: "オリジン東秀株式会社",
  brandName: "オリジン弁当",
  genre: "和食、洋食、中華",
  price: "500円 〜 1,500円",
  area: "全国",
  items: "のり弁当、唐揚げ弁当など",
  profile: "和食から洋食まで幅広いお弁当を取り扱っています。お弁当キットがあるので、そちらをレンジで温めるとすぐに配達が可能です。",
  imgs: [
    "/icon/brand-detail/brandPhoto0.png",
    "/icon/brand-detail/brandPhoto1.jpeg",
    "/icon/brand-detail/brandPhoto2.jpeg",
    "/icon/brand-detail/brandPhoto3.jpeg",
    "/icon/brand-detail/brandPhoto4.jpeg",
    "/icon/brand-detail/brandPhoto5.jpeg",
  ],
};

const brandRanking = [
  {
    src: "/image/brandLogo/logo1.jpg",
    name: "花村屋拉麺",
    genre: "ラーメン",
    num: 1000,
  },
  {
    src: "/image/brandLogo/logo1.jpg",
    name: "花村屋拉麺",
    genre: "ラーメン",
    num: 900,
  },
  {
    src: "/image/brandLogo/logo1.jpg",
    name: "花村屋拉麺",
    genre: "ラーメン",
    num: 800,
  },
  {
    src: "/image/brandLogo/logo1.jpg",
    name: "花村屋拉麺",
    genre: "ラーメン",
    num: 700,
  },
  {
    src: "/image/brandLogo/logo1.jpg",
    name: "花村屋拉麺",
    genre: "ラーメン",
    num: 600,
  },
];

export interface BrandData {
  brandDataList: brand[];
  brandDataList2: brand[];
  brandDataList3: brand[];
  brandDataList4: brandDetail;
  brandRanking: brand[];
}

export function getBrandData() {
  return {
    brandDataList: brandDataList,
    brandDataList2: brandDataList2,
    brandDataList3: brandDataList3,
    brandDataList4: brandDataList4,
    brandRanking: brandRanking,
  };
}
