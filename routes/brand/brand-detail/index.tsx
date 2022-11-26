import { BrandData, getBrandData } from "../../../shared/server/brand.ts";
import { FeatureData, getFeatureData } from "../../../shared/server/feature.ts";
import { BannerData, getBannerData } from "../../../shared/server/banner.ts";
import { Handlers, PageProps } from "$fresh/server.ts";
import { Head } from "$fresh/runtime.ts";
import BrandDetail from "../../../islands/BrandDetail.tsx";

export type AllData = FeatureData & BrandData & BannerData;

export default function routes({ data }: PageProps<AllData>) {
  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          href="https://unpkg.com/swiper@7/swiper-bundle.min.css"
        />
        <link href="/style.css" rel="stylesheet" />
        <script src="https://unpkg.com/swiper@7/swiper-bundle.min.js" />
      </Head>
      <BrandDetail data={data} />
    </>
  );
}

export const handler: Handlers<AllData> = {
  GET(_, ctx) {
    const brandData = getBrandData();
    const featureData = getFeatureData();
    const bannerData = getBannerData();
    return ctx.render({ ...brandData, ...featureData, ...bannerData });
  },
};
