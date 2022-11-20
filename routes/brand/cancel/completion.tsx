import { Head } from "$fresh/runtime.ts";
import CancelCompletion from "../../../islands/CancelCompletion.tsx";

export default function routes() {
  return (
    <>
      <Head>
        <link href="/style.css" rel="stylesheet" />
      </Head>
      <CancelCompletion />
    </>
  );
}
