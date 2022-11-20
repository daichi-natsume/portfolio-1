import { Options } from "$fresh/plugins/twind.ts";

export default {
  selfURL: import.meta.url,
  theme: {
    textColor: {
      red: "#FF7171",
      blue: "#0085FF",
      brown: "#947771",
      white: "#ffffff",
      gray: "#5F5F5F",
      lightGray: "#EBEBEB",
    },
    backgroundColor: {
      red: "#FEDBDB", //ログイン画面のエラー時にinputタグにて使用
      brown: "#947771",
      white: "#ffffff",
      gray: "#5F5F5F",
      lightgray: "#EBEBEB",
      lightBrown: "rgb(149,119,113,0.1)",
      lightRed: "rgb(255,212,203,0.2)",
    },

    extend: { //これがあると任意で値を変更できる
      colors: {
        brown: "#947771",
        lightBrown: "rgb(149,119,113,0.1)",
        lightGray: "#D6D6D6",
        orange: "#FF6B00",
      },
      fontSize: {
        2.5: "0.625rem",
      },
      height: {
        30: "7.5rem", //30は偶数ではあるが設定が必要
      },
    },
  },
} as Options;
