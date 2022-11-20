import { Banner } from "./Feature.tsx";
import { SearchBox } from "./input/SearchBox.tsx";
import { RightArrowLinkList, WLinkList } from "./others/LinkList.tsx";
import { SNSAccount } from "./others/SNSAccount.tsx";

interface Props {
  data: string[];
}

//通常のフッターを挿入する時に使用する
export function Footer() {
  const contents = [
    { name: "飲食フランチャイズ.comのトップへ", link: "/" },
    { name: "ご利用ガイド", link: "" },
    { name: "利用規約", link: "/" },
    { name: "プライバシポリシー", link: "/" },
  ];
  return (
    <footer class="text-white mt-64 bg-brown">
      <ul class="pt-6 text-xs">
        {contents.map((content) => (
          <li class="ml-4 mb-4">
            <a href={content.link}>{content.name}</a>
          </li>
        ))}
      </ul>
      <p class="text-center pt-4 pb-8 text-2.5">
        @Insyoku Franchise.com 2022 All Rights Reserved
      </p>
    </footer>
  );
}

//長いフッターを挿入する時に使用する
export function LongFooter(props: Props) {
  const data = props.data;
  const linkList = [
    { name: "ジャンルから探す", link: "", border: true },
    { name: "お気に入りブランドから探す", link: "/mypage/favorite", border: true },
    { name: "閲覧履歴から探す", link: "/mypage/browsing-history", border: true },
    { name: "ランキングから探す", link: "" },
  ];

  const wLinkList = [
    [{ name: "トップページへ", link: "/" }, { name: "マイページへ", link: "/mypage" }],
    [{ name: "特集ページ一覧", link: "" }, { name: "新着ブランド一覧", link: "" }],
    [{ name: "NEWS一覧", link: "" }, { name: "お問い合わせ", link: "" }],
  ];

  return (
    <>
      <div class="pt-2 pb-5 mb-12 bg-lightBrown">
        <SearchBox />
        <RightArrowLinkList linkList={linkList} />
        <Banner bannerList={data} />
      </div>
      <WLinkList WlinkList={wLinkList} />
      <SNSAccount />
      <Footer />
    </>
  );
}
