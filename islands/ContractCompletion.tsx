import { BrownHeader } from "../components/common/Header.tsx";
import { CompMsg } from "../components/common/others/CompMsg.tsx";
import { Title } from "../components/common/screen-title/Title.tsx";
import { Button } from "../components/common/Button.tsx";
import { Footer } from "../components/common/Footer.tsx";

const msg = ["契約が完了しました。", "引き続き飲食フランチャイズ.comのご利用を", "よろしくお願いいたします。"];

export default function islands() {
  return (
    <>
      <BrownHeader />
      <main>
        <Title title="契約完了" />
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
