import { BrandData, getBrandData } from "../../shared/server/brand.ts";
import { Handlers, PageProps } from "$fresh/server.ts";
import { Head } from "$fresh/runtime.ts";
import UnderContract from "../../islands/UnderContract.tsx";

export default function routes({ data }: PageProps<BrandData>) {
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
      <UnderContract data={data} />
    </>
  );
}

export const handler: Handlers<BrandData> = {
  GET(_, ctx) {
    return ctx.render(getBrandData());
  },
};
