import { create, verify } from "https://deno.land/x/djwt@v2.7/mod.ts";

const key = await crypto.subtle.generateKey(
  { name: "HMAC", hash: "SHA-512" },
  true,
  ["sign", "verify"],
);

export interface User {
  id: bigint;
  email: string;
  name: string;
  //todo:DBができたら正しいものを書く
}

//User情報からjwtを作成
export async function createJwt(id: bigint, email: string, name: string) {
  return await create({ alg: "HS512", typ: "JWT" }, {
    id: id.toString(),
    email,
    name,
  }, key);
}

//jwtを検証してOKだったらUserを応答
export async function getUser(request: Request) {
  const header = request.headers.get("authorization");
  return await verify(header!.split(" ")[1], key) as unknown as User;
}
