//todo:ヒストリーバックした時にメールアドレスなどの情報が残る

import { useState } from "preact/hooks";
import { fetchCors } from "../shared/fetch.ts";
import { Login } from "../components/Login.tsx";

export default function islands() {
  const [disabled, setDisabled] = useState(true);

  const [mail, setMail] = useState("");
  const [mailError, setMailError] = useState("");
  const onMail = (e: Event) => {
    const value = (e.target as HTMLInputElement).value;
    const regex =
      /^[a-zA-Z0-9_+-]+(\.[a-zA-Z0-9_+-]+)*@([a-zA-Z0-9][a-zA-Z0-9-]*[a-zA-Z0-9]*\.)+[a-zA-Z]{2,}$/;
    if (regex.test(value)) {
      setMail(value);
      setMailError("");
      setDisabled(isValid(value, pass, true));
    } else {
      setMailError(value ? "正しい形式のメールアドレスを入力してください" : "メールアドレスが入力されていません。");
      setDisabled(true);
    }
  };

  const [pass, setPass] = useState("");
  const [passError, setPassError] = useState("");
  const onPass = (e: Event) => {
    const value = (e.target as HTMLInputElement).value;
    const regex = /^([a-zA-Z0-9]{6,20})$/;
    if (regex.test(value)) {
      setPass(value);
      setPassError("");
      setDisabled(isValid(mail, value, true));
    } else {
      setPassError(value ? "6~20文字の半角英数字で入力してください。" : "パスワードが入力されていません。");
      setDisabled(true);
    }
  };

  const isValid = (
    value1: string,
    value2: string,
    dirty: boolean,
  ) => {
    if (dirty && value1 != "" && value2 != "") {
      return false;
    } else {
      return true;
    }
  };

  const [authError, setAuthError] = useState("");
  const onLogin = async (evt: Event) => {
    evt.preventDefault();
    const body = {
      mail: mail,
      pass: pass,
    };
    try {
      //disabledにする
      await fetchCors("login", "post", body);
      location.href = "/";
    } catch (e) {
      setAuthError("メールアドレスもしくはパスワードが間違っています");
    }
  };

  return (
    <Login
      mailError={mailError}
      passError={passError}
      onMail={onMail}
      onPass={onPass}
      disabled={disabled}
      onClick={onLogin}
      authError={authError}
    />
  );
}
