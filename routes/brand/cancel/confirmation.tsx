import { Head } from "$fresh/runtime.ts";
import CancelConfirmation from "../../../islands/CancelConfirmation.tsx";

export default function routes() {
  return (
    <>
      <Head>
        <link href="/style.css" rel="stylesheet" />
      </Head>
      <CancelConfirmation />
    </>
  );
}
