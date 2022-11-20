import { Head } from "$fresh/runtime.ts";
import CancelContractCompletion from "../../../islands/CancelContractCompletion.tsx";

export default function routes() {
  return (
    <>
      <Head>
        <link href="/style.css" rel="stylesheet" />
      </Head>
      <CancelContractCompletion />
    </>
  );
}
