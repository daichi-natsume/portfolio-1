const bannerList = [
  "/image/feature/banner1.jpg",
  "/image/feature/banner2.jpg",
  "/image/feature/banner3.jpg",
  "/image/feature/banner4.jpg",
];

const topBannerList = [
  "/banner/top/main1.jpeg",
  "/banner/top/main2.jpeg",
  "/banner/top/main3.jpeg",
  "/banner/top/main4.jpeg",
  "/banner/top/main5.jpeg",
  "/banner/top/main6.jpeg",
  "/banner/top/main7.jpeg",
  "/banner/top/main8.jpeg",
];

export interface BannerData {
  bannerList: string[];
  topBannerList: string[];
}

export function getBannerData() {
  return {
    bannerList: bannerList,
    topBannerList: topBannerList,
  };
}
