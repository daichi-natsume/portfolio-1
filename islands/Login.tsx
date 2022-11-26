//todo:ヒストリーバックした時にメールアドレスなどの情報が残る

import { useState } from "preact/hooks";
import { fetchCors } from "../shared/fetch.ts";
import { Login } from "../components/Login.tsx";

export default function islands() {
  const [error, setError] = useState("");
  const [mail, setMail] = useState({
    value: "",
    error: "",
    dirty: false,
    bg: false,
  });
  const [pass, setPass] = useState({
    value: "",
    error: "",
    dirty: false,
    bg: false,
  });

  const onLogin = async (evt: Event) => {
    evt.preventDefault();
    const body = {
      mail: mail.value,
      pass: pass.value,
    };
    try {
      //disabledにする
      await fetchCors("login", "post", body);
      location.href = "/";
    } catch (e) {
      setError("メールアドレスもしくはパスワードが間違っています");
    }
  };

  const onMail = (e: Event) => {
    const value = (e.target as HTMLInputElement).value;
    const regex =
      /^[a-zA-Z0-9_+-]+(\.[a-zA-Z0-9_+-]+)*@([a-zA-Z0-9][a-zA-Z0-9-]*[a-zA-Z0-9]*\.)+[a-zA-Z]{2,}$/;
    if (regex.test(value)) {
      setMail({
        value,
        error: "",
        dirty: true,
        bg: false,
      });
    } else {
      if (value) {
        setMail({
          value,
          error: "正しいメールアドレスを入力してください",
          dirty: true,
          bg: true,
        });
      } else {
        setMail({
          value,
          error: "メールアドレスが入力されていません。",
          dirty: true,
          bg: true,
        });
      }
    }
  };

  const onPass = (e: Event) => {
    const value = (e.target as HTMLInputElement).value;
    const regex = /^([a-zA-Z0-9]{6,20})$/;
    if (regex.test(value)) {
      setPass({
        value,
        error: "",
        dirty: true,
        bg: false,
      });
    } else {
      if (value) {
        setPass({
          value,
          error: "6~20文字の半角英数字で入力してください。",
          dirty: true,
          bg: true,
        });
      } else {
        setPass({
          value,
          error: "パスワードが入力されていません。",
          dirty: true,
          bg: true,
        });
      }
    }
  };

  const isValid = (state: { value: string; error: string; dirty: boolean }) => {
    return !state.error && state.dirty;
  };

  const disabled = () => {
    let valid = true;
    [mail, pass].forEach((state) => valid &&= isValid(state));
    return !valid;
  };

  return (
    <Login
      mail={mail}
      pass={pass}
      onMail={onMail}
      onPass={onPass}
      disabled={disabled()}
      onClick={onLogin}
      error={error}
    />
  );
}
