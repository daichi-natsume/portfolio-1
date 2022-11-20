import { Head } from "$fresh/runtime.ts";
import Login from "../islands/Login.tsx";

export default function routes() {
  return (
    <>
      <Head>
        <link href="/style.css" rel="stylesheet" />
      </Head>
      <Login />
    </>
  );
}
