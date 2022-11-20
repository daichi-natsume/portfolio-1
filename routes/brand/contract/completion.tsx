import { Head } from "$fresh/runtime.ts";
import ContractCompletion from "../../../islands/ContractCompletion.tsx";

export default function routes() {
  return (
    <>
      <Head>
        <link href="/style.css" rel="stylesheet" />
      </Head>
      <ContractCompletion />
    </>
  );
}
