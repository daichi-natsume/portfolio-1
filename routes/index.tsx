import { Head } from "$fresh/runtime.ts";
import Index from "../islands/index.tsx";
import { BrandData, getBrandData } from "../shared/server/brand.ts";
import { BannerData, getBannerData } from "../shared/server/banner.ts";
import { getInfoData, InfoData } from "../shared/server/info.ts";
import { GenreData, getGenreData } from "../shared/server/genre.ts";
import { Handlers, PageProps } from "$fresh/server.ts";

export type AllData = BrandData & BannerData & InfoData & GenreData;

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
      <Index data={data} />
    </>
  );
}

export const handler: Handlers<AllData> = {
  GET(_, ctx) {
    const brandData = getBrandData();
    const bannerData = getBannerData();
    const infoData = getInfoData();
    const genreData = getGenreData();
    return ctx.render({
      ...brandData,
      ...bannerData,
      ...infoData,
      ...genreData,
    });
  },
};
