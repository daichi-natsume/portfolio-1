//マイページトップの要素をまとめたコンポーネント

import { BrandData } from "../shared/server/brand.ts";
import { LoginHeader } from "./common/Header.tsx";
import { Title } from "./common/screen-title/Title.tsx";
import { Button } from "./common/Button.tsx";
import { Leading } from "./common/others/Leading.tsx";
import { ScrollFavBrand } from "./common/scroll/Scroll.tsx";
import { BorderLinkList } from "./common/others/LinkList.tsx";
import { BrandList } from "./common/Brand.tsx";
import { Inquiry } from "./common/others/Inquiry.tsx";
import { SNSAccount } from "./common/others/SNSAccount.tsx";
import { Footer } from "./common/Footer.tsx";

interface Props {
  open: boolean;
  data: BrandData;
  onClick: (e: Event) => void;
}

export function Mypage(props: Props) {
  const data = props.data;

  const settingList = [
    { name: "会員情報の確認・変更", src: "/icon/mypage/human.png", alt: "人型アイコン" },
    { name: "パスワードの変更", src: "/icon/mypage/lock.png", alt: "鍵アイコン" },
    { name: "決済情報の登録・確認・変更", src: "/icon/mypage/card.png", alt: "クレカアイコン" },
    { name: "メルマガ受信設定の変更", src: "/icon/mypage/mail.png", alt: "メールアイコン" },
  ];

  return (
    <div class={`${props.open ? "fixed w-full" : ""}`}>
      <LoginHeader onClick={props.onClick} />
      <main>
        <Title title="マイページ" />
        <p class="text-center my-4">グルメ商店さま</p>
        <Button
          link="/mypage/under-contract"
          gray={true}
          h10_w72={true}
          klass="mb-2"
          name="契約中ブランド一覧"
          arrow="right"
        />
        <Button
          link="/mypage/applying"
          gray={true}
          h10_w72={true}
          klass="mb-2"
          name="申請中ブランド一覧"
          arrow="right"
        />
        <div class="w-72 flex mx-auto mt-2 justify-end">
          <p class="text-2.5">
            申請履歴は
            <a href="/mypage/application-history" class="underline">
              コチラ
            </a>
          </p>
        </div>
        <Leading
          title="お気に入りブランド"
          more={true}
          linkName="すべて見る"
          link="/mypage/favorite"
        />
        <ScrollFavBrand brandList={data.brandDataList} />
        <Leading
          title="最近チェックしたブランド"
          more={true}
          linkName="すべて見る"
          link="/mypage/browsing-history"
        />
        <BrandList brandList={data.brandDataList} />
        <Leading title="登録内容の確認・修正" />
        <BorderLinkList linkList={settingList} />
        <div class="mx-4 flex mx-auto mt-2 justify-end">
          <p class="text-2.5">
            退会する場合は
            <a href="" class="underline">
              コチラ
            </a>
          </p>
        </div>
        <Inquiry />
        <SNSAccount />
      </main>
      <Footer />
    </div>
  );
}
