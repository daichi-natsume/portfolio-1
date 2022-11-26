import { login, state } from "./store.ts";

const apiUrl = "/api/";

//todo:ログイン用のfetch作成

export async function fetchCors(
  url: string,
  method: string,
  // deno-lint-ignore no-explicit-any
  body: any = undefined,
) {
  const jwt = state.value.jwt;
  const headers = jwt ? [["Authorization", "Bearer " + jwt]] : undefined;

  const o = body ? JSON.stringify(body) : undefined;
  const req = {
    method: method,
    headers: headers,
    // mode: "cors" as RequestMode,
    cache: "no-cache" as RequestCache,
    body: o,
  } as RequestInit;

  const res = (await fetch(apiUrl + url, req));
  if (!res.headers.get("content-type")?.startsWith("application/json")) {
    throw await res.text();
  }

  const json = await res.json() as { jwt: string };
  if ("login" === url) {
    login(json);
  }

  // deno-lint-ignore no-explicit-any
  return json as any;
}
