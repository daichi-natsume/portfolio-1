//申請中履歴一覧画面の要素をまとめたコンポーネント

import { BrandData } from "../shared/server/brand.ts";
import { LoginHeader } from "../components/common/Header.tsx";
import { Title } from "../components/common/screen-title/Title.tsx";
import { SearchBox } from "../components/common/input/SearchBox.tsx";
import {
  AccodionButton,
  FreeWhiteButton,
  WhiteButton,
} from "../components/common/Button.tsx";
import { BgLeading } from "../components/common/others/Leading.tsx";
import { ApplyBrand } from "../components/common/Brand.tsx";
import { Footer } from "../components/common/Footer.tsx";

interface Props {
  open: boolean;
  display: boolean;
  data: BrandData;
  onClick: (e: Event) => void;
  onClickButton: (e: Event) => void;
  Accodion?: (e: Event) => void;
}

export function ApplicationHistory(props: Props) {
  const sortOrderList = ["申請日順（新しい順）", "申請日順（古い順）"];
  const data = props.data;
  return (
    <div
      class={`${props.display || props.open ? "fixed w-full" : ""}`}
    >
      <LoginHeader onClick={props.onClick} />
      <main>
        <Title title="申請履歴一覧" />
        <SearchBox />
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
        <BgLeading title="2022年10月25日" />
        <ApplyBrand brandList={data.brandDataList2} />
        <BgLeading title="2022年10月2日" />
        <ApplyBrand brandList={data.brandDataList2} />
        <WhiteButton name="申請中のブランドをもっと見る" arrow="down" />
      </main>
      <Footer />
    </div>
  );
}
