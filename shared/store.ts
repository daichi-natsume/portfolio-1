import { signal } from "@preact/signals";
import { IS_BROWSER } from "$fresh/runtime.ts";

const storage = IS_BROWSER ? sessionStorage : null;

export const state = signal({ //変更があるとレンダーが動く(preact専用)
  jwt: null as string | null,
  isLogin: false,
});

export function login(json: { jwt: string }) {
  if (json.jwt) {
    state.value = {
      jwt: json.jwt,
      isLogin: !!json.jwt, //!は型をbooleanにするので!!で文字が入っていたらtrueを返す
    };
    saveStorage();
  }
}

export function logout() {
  state.value = {
    jwt: null,
    isLogin: false,
  };
  saveStorage();
}

function loadStorage() {
  const str = storage!.getItem("state");
  if (str) {
    state.value = JSON.parse(str);
  }
}

function saveStorage() {
  const value = state.value;
  const o = {
    jwt: value.jwt,
    isLogin: value.isLogin,
  };
  storage!.setItem("state", JSON.stringify(o));
  console.log("saveStorage", o);
}

if (IS_BROWSER) {
  loadStorage();
}
