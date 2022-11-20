import { Head } from "$fresh/runtime.ts";
import CancelContractConfirmation from "../../../islands/CancelContractConfirmation.tsx";

export default function routes() {
  return (
    <>
      <Head>
        <link href="/style.css" rel="stylesheet" />
      </Head>
      <CancelContractConfirmation />
    </>
  );
}
