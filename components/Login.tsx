//ログイン画面の要素をまとめたコンポーネント

import { BrownHeader } from "../components/common/Header.tsx";
import { Title } from "../components/common/screen-title/Title.tsx";
import { HiddenInput, Input } from "../components/common/input/Input.tsx";
import { Button } from "../components/common/Button.tsx";
import { Footer } from "../components/common/Footer.tsx";

interface Props {
  mail: { value: string; error: string; dirty: boolean; bg: boolean };
  pass: { value: string; error: string; dirty: boolean; bg: boolean };
  onMail: (e: Event) => void;
  onPass: (e: Event) => void;
  onClick: (e: Event) => void;
  disabled: boolean;
  error: string;
}

export function Login(props: Props) {
  const mail = props.mail;
  const pass = props.pass;
  return (
    <>
      <BrownHeader />
      <main>
        <Title title="ログイン" />
        <span>{props.error}</span>
        <div class="mx-8 text-2.5">
          <p class="mt-8 text-2.5">
            メールアドレス
          </p>
          <span class="my-1 text-2.5 text-red">{mail.error}</span>
          <Input
            onInput={props.onMail}
            klass={`w-full my-1 mb-4 ${mail.bg ? "bg-red" : null}`}
            placeholder="insyoku.franchise@insyoku.co.jp"
          />
          <p class="text-2.5">
            パスワード
          </p>
          <span class="my-1 text-2.5 text-red">{pass.error}</span>
          <HiddenInput
            onInput={props.onPass}
            klass="w-full my-1"
            krass={pass.bg ? "bg-red" : ""}
            placeholder="半角英数字の6~20文字"
          />
          <Button
            name="ログイン"
            klass="mt-10 mb-4"
            h10_w72={true}
            disabled={props.disabled}
            onClick={props.onClick}
            color={props.disabled ? "disabled" : "brown"}
          />
          <a href="/registration/input" class="text-center text-2.5">
            <p>初めてのご利用の方（新規会員登録）</p>
          </a>
        </div>
        <Forget msg="メールアドレスをお忘れですか？" klass="mt-10 mb-2" />
        <Forget msg="パスワードをお忘れですか？" />
      </main>
      <Footer />
    </>
  );
}

function Forget({ msg, klass }: { msg: string; klass?: string }) {
  return (
    <div class={`flex items-center text-2.5 ${klass}`}>
      <img
        src="/icon/common/arrow/brownRight.png"
        alt="茶色の右矢印"
        class="h-2 w-2 my-auto ml-4 mr-1"
      />
      <p>{msg}</p>
    </div>
  );
}
