import { Head } from "$fresh/runtime.ts";
import ContractConfirmation from "../../../islands/ContractConfirmation.tsx";

export default function routes() {
  return (
    <>
      <Head>
        <link href="/style.css" rel="stylesheet" />
      </Head>
      <ContractConfirmation />
    </>
  );
}
