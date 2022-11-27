import { BrownHeader } from "../components/common/Header.tsx";
import { CompMsg } from "../components/common/others/CompMsg.tsx";
import { Title } from "../components/common/screen-title/Title.tsx";
import { Button } from "../components/common/Button.tsx";
import { Footer } from "../components/common/Footer.tsx";

const msg = ["申請を受け付けました。", "契約許可が出るまでしばらくお待ちください。"];

export default function islands() {
  return (
    <>
      <BrownHeader />
      <main>
        <Title title="申請完了" />
        <CompMsg compMsg={msg} />
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
