//ジャンル検索の要素をまとめたコンポーネント

import { AllData } from "../routes/search-genre.tsx";
import { SearchBoxHeader } from "../components/common/Header.tsx";
import { ResultNumber } from "../components/common/others/ResultNumber.tsx";
import { ResultBrand } from "../components/common/Brand.tsx";
import {
  AccodionButton,
  FreeWhiteButton,
} from "../components/common/Button.tsx";
import { PageNation } from "../components/common/others/PageNation.tsx";
import { LongFooter } from "../components/common/Footer.tsx";

interface Props {
  open: boolean;
  display: boolean;
  data: AllData;
  onClick: (e: Event) => void;
  onClickButton: (e: Event) => void;
  Accodion?: (e: Event) => void;
}

const sortOrderList = ["おすすめ", "人気順", "新着順", "価格帯（安い）", "価格帯（高い）"];

export function SearchGenre(props: Props) {
  const data = props.data;
  return (
    <div class={`${props.display || props.open ? "fixed w-full" : ""}`}>
      <SearchBoxHeader onClick={props.onClick} />
      <main>
        <ResultNumber
          displayNumStart={11}
          displayNumEnd={20}
          totalNum={275}
          genre={true}
        />
        <div class="flex mx-4 my-4">
          <FreeWhiteButton
            name="絞り込む"
            onClickButton={props.onClickButton}
            klass="h-10 w-1/2 mr-2 text-xs rounded"
          />
          <AccodionButton
            name="表示順"
            list={sortOrderList}
            Accodion={props.Accodion}
          />
        </div>
        <ResultBrand brandList={data.brandDataList3} />
        <PageNation displayNumStart={2} displayNumEnd={28} klass="mb-10" />
      </main>
      <LongFooter data={data.bannerList} />
    </div>
  );
}
