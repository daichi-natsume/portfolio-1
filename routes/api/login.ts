import { Handlers } from "$fresh/server.ts";
import { createJwt } from "../../shared/api/jwt.ts";

export const handler: Handlers = {
  async POST(req) {
    const { mail, pass } = await req.json();
    if (pass == "111111") { //パスワードが111111以外は通らない
      const jwt = await createJwt(100001n, mail, "テスト"); //数字の最後にnをかくとbigintになる
      return Response.json({ jwt });
    } else {
      return new Response("error");
    }
  },
  OPTIONS() {
    return new Response();
  },
};
