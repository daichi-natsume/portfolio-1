//お気に入りの要素をまとめたコンポーネント

import { BrandData } from "../shared/server/brand.ts";
import { useState } from "preact/hooks";
import { LoginHeader } from "../components/common/Header.tsx";
import { Title } from "../components/common/screen-title/Title.tsx";
import { SearchBox } from "../components/common/input/SearchBox.tsx";
import { ResultNumber } from "../components/common/others/ResultNumber.tsx";
import { FavTripleBrand } from "../components/common/Brand.tsx";
import { PageNation } from "../components/common/others/PageNation.tsx";
import { Button } from "../components/common/Button.tsx";
import { Footer } from "../components/common/Footer.tsx";

interface Props {
  open: boolean;
  data: BrandData;
  onClick: (e: Event) => void;
}

export function Favorite(props: Props) {
  const [dastBox, setDastBox] = useState(false);
  const [name, setName] = useState("編集");

  const toggleFunction = () => {
    if (dastBox) {
      setDastBox(false);
      setName("編集");
    } else {
      setDastBox(true);
      setName("キャンセル");
    }
  };
  const data = props.data;
  const brands = ["", "", "", "", ""]; //5行分出すために空の配列を作成している

  return (
    <div
      class={`${props.open ? "fixed w-full" : ""}`}
    >
      <LoginHeader onClick={props.onClick} />
      <main>
        <Title title="お気に入り" />
        <SearchBox />
        <ResultNumber
          displayNumStart={16}
          displayNumEnd={30}
          totalNum={45}
          name={name}
          onClick={toggleFunction}
        />
        <div class="border-t">
          {brands.map(() => (
            <FavTripleBrand brandList={data.brandDataList} dastBox={dastBox} />
          ))}
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
