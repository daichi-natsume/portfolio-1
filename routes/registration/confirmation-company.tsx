import { Head } from "$fresh/runtime.ts";
import RegistrationConfirmationCompany from "../../islands/RegistrationConfirmationCompany.tsx";

export default function routes() {
  return (
    <>
      <Head>
        <link href="/style.css" rel="stylesheet" />
      </Head>
      <RegistrationConfirmationCompany />
    </>
  );
}
