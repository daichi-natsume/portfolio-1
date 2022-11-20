import { BrandData, getBrandData } from "../../shared/server/brand.ts";
import { Handlers, PageProps } from "$fresh/server.ts";
import { Head } from "$fresh/runtime.ts";
import Favorite from "../../islands/Favorite.tsx";

export default function routes({ data }: PageProps<BrandData>) {
  return (
    <>
      <Head>
        <link href="/style.css" rel="stylesheet" />
      </Head>
      <Favorite data={data} />
    </>
  );
}

export const handler: Handlers<BrandData> = {
  GET(_, ctx) {
    return ctx.render(getBrandData());
  },
};
