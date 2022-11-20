import { Head } from "$fresh/runtime.ts";
import RegistrationInput from "../../islands/RegistrationInput.tsx";

export default function routes() {
  return (
    <>
      <Head>
        <link href="/style.css" rel="stylesheet" />
      </Head>
      <RegistrationInput />
    </>
  );
}
