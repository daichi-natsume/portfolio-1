import { Head } from "$fresh/runtime.ts";
import RegistrationCompletion from "../../islands/RegistrationCompletion.tsx";

export default function routes() {
  return (
    <>
      <Head>
        <link href="/style.css" rel="stylesheet" />
      </Head>
      <RegistrationCompletion />
    </>
  );
}
