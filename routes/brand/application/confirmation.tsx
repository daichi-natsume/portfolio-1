import { Head } from "$fresh/runtime.ts";
import ApplicationConfirmation from "../../../islands/ApplicationConfirmation.tsx";

export default function routes() {
  return (
    <>
      <Head>
        <link href="/style.css" rel="stylesheet" />
      </Head>
      <ApplicationConfirmation />
    </>
  );
}
