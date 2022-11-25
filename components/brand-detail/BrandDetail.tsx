//ブランド詳細画面の要素をまとめたコンポーネント

import { AllData } from "../../routes/brand/brand-detail.tsx";
import { LoginHeader } from "../common/Header.tsx";
import BrandPhoto from "../../components/brand-detail/BrandPhoto.tsx";
import { Button } from "../common/Button.tsx";
import { BrandInfo } from "./BrandInfo.tsx";
import { Leading } from "../common/others/Leading.tsx";
import { ScrollFeature } from "../common/Feature.tsx";
import { BrandList } from "../common/Brand.tsx";
import { LongFooter } from "../common/Footer.tsx";

interface Props {
  open: boolean;
  data: AllData;
  onClick: (e: Event) => void;
}

export function BrandDetail(props: Props) {
  const data = props.data;
  return (
    <div
      class={`${props.open ? "fixed w-full" : ""}`}
    >
      <LoginHeader onClick={props.onClick} />
      <main>
        <BrandPhoto data={data.brandDataList4} />
        <BrandInfo data={data.brandDataList4} />
        <Button
          link="/brand/application/confirmation"
          brown={true}
          h10_w72={true}
          klass="my-12"
          name="申請手続きへ"
        />
        <Leading title="関連ブログ" />
        <ScrollFeature featureList={data.featureList} />
        <Leading title="最近見たブランド" />
        <BrandList brandList={data.brandDataList} />
        <Button
          link="/mypage/browsing-history"
          white={true}
          h10_w72={true}
          klass="mt-4 mb-12"
          name="最近見たブランドをもっと見る"
          arrow="right"
        />
      </main>
      <LongFooter data={data.bannerList} />
    </div>
  );
}
