//申請中ブランド一覧画面の要素をまとめたコンポーネント

import { BrandData } from "../shared/server/brand.ts";
import { LoginHeader } from "../components/common/Header.tsx";
import { Title } from "../components/common/screen-title/Title.tsx";
import { SearchBox } from "../components/common/input/SearchBox.tsx";
import { BgLeading } from "../components/common/others/Leading.tsx";
import { Button, RadioButton } from "../components/common/Button.tsx";
import { ApplyBrand } from "../components/common/Brand.tsx";
import { Footer } from "../components/common/Footer.tsx";

interface Props {
  open: boolean;
  data: BrandData;
  onClick: (e: Event) => void;
}

export function Applying(props: Props) {
  const data = props.data;
  const buttonList = [
    { name: "status", label: "すべて", checked: true },
    { name: "status", label: "申請中" },
    { name: "status", label: "契約可能" },
  ];

  return (
    <div class={`${props.open ? "fixed w-full" : ""}`}>
      <LoginHeader onClick={props.onClick} />
      <main>
        <Title title="申請中ブランド一覧" />
        <SearchBox />
        <RadioButton buttonList={buttonList} klass="my-4" />
        <BgLeading title="2022年10月25日" />
        <ApplyBrand brandList={data.brandDataList} />
        <BgLeading title="2022年10月25日" />
        <ApplyBrand brandList={data.brandDataList} />
        <Button
          color="white"
          h10_w72={true}
          klass="mt-4"
          name="申請中のブランドをもっと見る"
          arrow="down"
        />
      </main>
      <Footer />
    </div>
  );
}
