import { tw } from "twind";
import { brandDetail } from "../../shared/server/brand.ts";
import { Tab } from "./Tab.tsx";

interface Props {
  data: brandDetail;
}

export function BrandInfo(props: Props) {
  const data = props.data;
  return (
    <div class="mt-2">
      <div class="mx-4 flex items-center">
        <img
          src="/icon/common/others/at.png"
          alt="会社情報アイコン"
          class="h-4 w-4 mr-1"
        />
        <p class="text-2.5">{data.companyName}</p>
      </div>
      <p class="text-sm ml-4 mt-2">{data.brandName}</p>
      <Tab />
      <BrandInfo_ title="ジャンル" data={data.genre} />
      <BrandInfo_ title="価格帯" data={data.price} />
      <BrandInfo_ title="対応エリア" data={data.area} />
      <BrandInfo_ title="取扱商品" data={data.items} />
      <BrandInfo_ title="プロフィール" data={data.profile} />
    </div>
  );
}

function BrandInfo_({ title, data }: { title: string; data: string }) {
  return (
    <div class="flex border-b mt-4 first:mt-0 mx-8 pb-2 px-2 text-2.5">
      <p class={`w-20 ${tw`(shrink)`}`}>{title}</p>
      <p>{data}</p>
    </div>
  );
}
