//契約中ブランド一覧画面の要素をまとめたコンポーネント

import { BrandData } from "../shared/server/brand.ts";
import { LoginHeader } from "../components/common/Header.tsx";
import { Title } from "../components/common/screen-title/Title.tsx";
import { SearchBox } from "../components/common/input/SearchBox.tsx";
import { ResultNumber } from "../components/common/others/ResultNumber.tsx";
import { BrandList } from "../components/common/Brand.tsx";
import { PageNation } from "../components/common/others/PageNation.tsx";
import { Button } from "../components/common/Button.tsx";
import { Footer } from "../components/common/Footer.tsx";

interface Props {
  open: boolean;
  data: BrandData;
  onClick: (e: Event) => void;
}

export function UnderContract(props: Props) {
  const data = props.data;

  return (
    <div
      class={`${props.open ? "fixed w-full" : ""}`}
    >
      <LoginHeader onClick={props.onClick} />
      <main>
        <Title title="契約中ブランド一覧" />
        <SearchBox />
        <ResultNumber displayNumStart={6} displayNumEnd={10} totalNum={15} />
        <BrandList brandList={data.brandDataList2} />
        <PageNation displayNumStart={2} displayNumEnd={3} />
        <Button
          link="/"
          color="white"
          h10_w72={true}
          klass="mt-10"
          name="もっとブランドを探す"
        />
      </main>
      <Footer />
    </div>
  );
}
