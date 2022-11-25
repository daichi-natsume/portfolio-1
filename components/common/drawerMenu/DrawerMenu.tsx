import { DrawerMenuHeader } from "../Header.tsx";
import { Button } from "../Button.tsx";
import { Link, LinkList } from "./Link.tsx";

interface Props {
  open: boolean;
  onClick: (e: Event) => void;
}

const linkList1 = [
  { name: "お気に入りブランド", link: "/mypage/favorite" },
  { name: "最近見たブランド", link: "/mypage/browsing-history" },
  { name: "申請中のブランド", link: "/mypage/applying" },
  { name: "契約中のブランド", link: "/mypage/under-contract", noBorder: true },
];

const linkList2 = [
  { name: "ジャンルから探す", link: "" },
  { name: "最近見たジャンル", link: "", noBorder: true },
];

const linkList3 = [
  { name: "人気ブランドランキング", link: "" },
  { name: "新着ブランド", link: "", noBorder: true },
];

const linkList4 = [
  { name: "お知らせ", link: "" },
  { name: "ご利用ガイド", link: "" },
  { name: "よくあるご質問", link: "" },
  { name: "お問い合わせ", link: "" },
];

//未ログイン時のドロワーメニュー
export function DrawerMenu(props: Props) {
  return (
    <>
      <div class={`${props.open ? "relative w-full" : ""}`}>
        <div class={`bg-white relative top-0 ${props.open ? "open" : "close"}`}>
          <DrawerMenuHeader onClick={props.onClick} />
          <p class="text-sm my-4 text-center">
            ゲスト<span class="text-2.5">さん</span>
          </p>
          <Button
            link="/registration/input"
            brown={true}
            h10_w72={true}
            name="飲食フランチャイズ.comを試す"
          />
          <div class="h-8" />
          <Link name="ログイン" link="/login" />
          <LinkList linkList={linkList1} />
          <LinkList linkList={linkList2} />
          <LinkList linkList={linkList3} />
          <LinkList linkList={linkList4} />
          <p class="text-center pb-8 pt-24 text-brown text-2.5">
            @Insyoku Franchise.com 2022 All Rights Reserved
          </p>
        </div>
      </div>
    </>
  );
}

//ログイン時のドロワーメニュー
export function LoginDrawerMenu(props: Props) {
  return (
    <>
      <div class={`${props.open ? "relative w-full" : ""}`}>
        <div class={`bg-white relative top-0 ${props.open ? "open" : "close"}`}>
          <DrawerMenuHeader onClick={props.onClick} />
          <p class="text-sm my-4 text-center">
            グルメ商店<span class="text-2.5">さま</span>
            {/* //check:グルメ商店の部分はログインしたユーザーによって変わる */}
          </p>
          <LinkList linkList={linkList1} />
          <LinkList linkList={linkList2} />
          <LinkList linkList={linkList3} />
          <LinkList linkList={linkList4} />
          <Button
            link="/"
            white={true}
            h10_w72={true}
            klass="mt-10 mb-24"
            name="ログアウト"
          />
          <p class="text-center pb-8 text-brown text-2.5">
            @Insyoku Franchise.com 2022 All Rights Reserved
          </p>
        </div>
      </div>
    </>
  );
}
