import { BrownHeader } from "../components/common/Header.tsx";
import { Title } from "../components/common/screen-title/Title.tsx";
import { ConfirmMsg } from "../components/common/others/ConfirmMsg.tsx";
import { BgLeading, Leading } from "../components/common/others/Leading.tsx";
import { Button } from "../components/common/Button.tsx";

const cancelInfo = [
  { title: "ブランド名", info: "オリジン弁当" },
  { title: "ジャンル", info: "和食、洋食、中華" },
  { title: "価格帯", info: "500円 〜 1,000円" },
  { title: "対応エリア", info: "全国" },
  { title: "取扱商品", info: "のり弁当、唐揚げ弁当など" },
];

const applicantInfo = [
  { title: "会社名", info: "株式会社リクルート" },
  { title: "担当者氏名", info: "佐々木　小次郎" },
  { title: "メールアドレス", info: "taylor.taylor@icloud.com" },
  { title: "電話番号", info: "000-0000-0000" },
];

export default function islands() {
  return (
    <>
      <BrownHeader />
      <main>
        <Title title="解約申請内容の確認" />
        <ConfirmMsg msg="解約申請" />
        <div class="border-b">
          {cancelInfo.map((info) => (
            <>
              <BgLeading title={info.title} />
              <p class="ml-6 my-4 text-2.5">{info.info}</p>
            </>
          ))}
        </div>

        <Button
          link="/brand/cancel-contract/completion"
          brown={true}
          h10_w72={true}
          klass="my-12"
          name="解約申請する"
        />
        <Leading title="申請者情報" />
        <div class="border-b">
          {applicantInfo.map((info) => (
            <>
              <BgLeading title={info.title} />
              <p class="ml-6 my-4 text-2.5">{info.info}</p>
            </>
          ))}
        </div>
        <Button
          link="/brand/cancel-contract/completion"
          brown={true}
          h10_w72={true}
          klass="mt-12 mb-2"
          name="解約申請する"
        />
        <Button
          link="/brand/brand-detail"
          white={true}
          h10_w72={true}
          klass="mb-12"
          name="戻る"
          arrow="left"
        />
      </main>
    </>
  );
}
