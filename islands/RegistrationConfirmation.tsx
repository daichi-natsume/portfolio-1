import { BrownHeader } from "../components/common/Header.tsx";
import { Title } from "../components/common/screen-title/Title.tsx";
import { StepBar } from "../components/registration/StepBar.tsx";
import { ConfirmMsg } from "../components/common/others/ConfirmMsg.tsx";
import { BgLeading } from "../components/common/others/Leading.tsx";
import { Button } from "../components/common/Button.tsx";

export default function islands() {
  const inputInfo = [
    { title: "会員種別", input: "個人" },
    { title: "氏名", input: "佐々木　小次郎" },
    { title: "氏名（カナ）", input: "ササキ　コジロウ" },
    { title: "性別", input: "男性" },
    { title: "会社のご住所", input: ["〒123-4567 横浜市旭区二俣川1-11-11 やまとハウス101"] },
    { title: "代表電話番号", input: "000-0000-0000" },
    { title: "メールアドレス", input: "taylor.taylor@icloud.com" },
    { title: "パスワード", input: "**********" },
    { title: "メールマガジン", input: "受け取る" },
  ];
  return (
    <main>
      <BrownHeader />
      <Title title="登録内容の確認" />
      <StepBar step={2} />
      <ConfirmMsg msg="登録" />
      <div class="border-b text-2.5">
        {inputInfo.map((info) => (
          <>
            <BgLeading title={info.title} />
            {info.input instanceof Array
              ? info.input.map((input) => <p class="ml-8 my-2">{input}</p>)
              : <p class="ml-8 mt-2 mb-4">{info.input}</p>}
          </>
        ))}
      </div>
      <Button
        link="/registration/completion"
        brown={true}
        h10_w72={true}
        klass="mt-12 mb-2"
        name="登録する"
      />
      <Button
        link="/registration/input"
        white={true}
        h10_w72={true}
        klass="mb-12"
        name="戻る"
        arrow="left"
      />
    </main>
  );
}
