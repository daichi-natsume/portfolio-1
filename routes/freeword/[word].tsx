import { PageProps } from "$fresh/server.ts";
import { Head } from "$fresh/runtime.ts";
import Freeword from "../../islands/Freeword.tsx";

export default function routes(props: PageProps) {
  console.log(props.params.word);
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
      <Freeword />
    </>
  );
}
