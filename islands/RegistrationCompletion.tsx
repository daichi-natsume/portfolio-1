import { BrownHeader } from "../components/common/Header.tsx";
import { Title } from "../components/common/screen-title/Title.tsx";
import { StepBar } from "../components/registration/StepBar.tsx";
import { CompMsg } from "../components/common/others/CompMsg.tsx";
import { Button } from "../components/common/Button.tsx";
import { Footer } from "../components/common/Footer.tsx";

export default function islands() {
  return (
    <>
      <BrownHeader />
      <main>
        <Title title="会員登録完了" />
        <StepBar step={3} />
        <CompMsg compMsg="会員登録が完了しました。" />
        <Button
          link="/"
          color="brown"
          h10_w72={true}
          name="トップページへ"
          klass="mb-2"
          arrow="right"
        />
        <Button
          link="/mypage"
          color="white"
          h10_w72={true}
          name="マイページへ"
          arrow="right"
        />
      </main>
      <Footer />
    </>
  );
}
