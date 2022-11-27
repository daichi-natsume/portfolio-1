//閲覧履歴の要素をまとめたコンポーネント

import { BrandData } from "../shared/server/brand.ts";
import { LoginHeader } from "../components/common//Header.tsx";
import { Title } from "../components/common//screen-title/Title.tsx";
import { SearchBox } from "../components/common//input/SearchBox.tsx";
import { ResultNumber } from "../components/common/others/ResultNumber.tsx";
import { TripleBrand } from "../components/common/Brand.tsx";
import { PageNation } from "../components/common/others/PageNation.tsx";
import { Button } from "../components/common/Button.tsx";
import { Footer } from "../components/common//Footer.tsx";

interface Props {
  open: boolean;
  data: BrandData;
  onClick: (e: Event) => void;
}

export function BrowsingHistory(props: Props) {
  const data = props.data;
  const brands = ["", "", "", "", ""]; //5行分出すために空の配列を作成している

  return (
    <div
      class={`${props.open ? "fixed w-full" : ""}`}
    >
      <LoginHeader onClick={props.onClick} />
      <main>
        <Title title="閲覧履歴" />
        <SearchBox />
        <ResultNumber displayNumStart={16} displayNumEnd={30} totalNum={45} />
        <div class="border-t">
          {brands.map(() => <TripleBrand brandList={data.brandDataList} />)}
        </div>
        <PageNation displayNumStart={2} displayNumEnd={3} />
        <Button
          link="/"
          color="white"
          h10_w72={true}
          klass="mt-4"
          name="もっとブランドを探す"
        />
      </main>
      <Footer />
    </div>
  );
}
