import { Head } from "$fresh/runtime.ts";
import ApplicationCompletion from "../../../islands/ApplicationCompletion.tsx";

export default function routes() {
  return (
    <>
      <Head>
        <link href="/style.css" rel="stylesheet" />
      </Head>
      <ApplicationCompletion />
    </>
  );
}
