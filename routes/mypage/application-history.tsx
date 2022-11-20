import { BrandData, getBrandData } from "../../shared/server/brand.ts";
import { Handlers, PageProps } from "$fresh/server.ts";
import { Head } from "$fresh/runtime.ts";
import ApplicationHistory from "../../islands/ApplicationHistory.tsx";

export default function routes({ data }: PageProps<BrandData>) {
  return (
    <>
      <Head>
        <link href="/style.css" rel="stylesheet" />
        <script src="https://cdn.tailwindcss.com" />
      </Head>
      <ApplicationHistory data={data} />
    </>
  );
}

export const handler: Handlers<BrandData> = {
  GET(_, ctx) {
    return ctx.render(getBrandData());
  },
};
