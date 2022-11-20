import { Head } from "$fresh/runtime.ts";
import RegistrationConfirmation from "../../islands/RegistrationConfirmation.tsx";

export default function routes() {
  return (
    <>
      <Head>
        <link href="/style.css" rel="stylesheet" />
      </Head>
      <RegistrationConfirmation />
    </>
  );
}
