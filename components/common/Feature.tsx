//特集ページを出すときに使うコンポーネント
//todo:ScrollFeature2のリファクタリング

import { tw } from "twind";

interface Props {
  featureList?: { src?: string; content?: string }[];
  bannerList?: string[];
  bgColor?: string; //ScrollFeature2のリファクタリングに消す
}

//swiper.jsに対応した特集ページ作成時に使用（例：トップページのメインバナー）
export function SwiperFeature(props: Props) {
  return (
    <>
      {props.bannerList?.map((banner) => (
        <div class="rounded-lg text-center flex text-center swiper-slide">
          <img
            src={banner}
            alt="メインバナー"
            class="h-40 text-white mx-auto text-2.5"
          />
        </div>
      ))}
    </>
  );
}

//特集の横スクロールを出したい時に使う
export function ScrollFeature(props: Props) {
  return (
    <div
      class={`flex w-full overflow-x-auto pr-4 ${tw`(hidden-scrollbar)`}`}
    >
      {props.featureList?.map((feature) => (
        <div class="last:pr-4">
          <div class="w-40 ml-4 text-2.5">
            <img
              src={feature.src}
              class="h-40 flex items-center border rounded mb-2 text-center"
            />
            <p class="my-1">
              {feature.content}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

//バナー広告を出す時に使う
export function Banner(props: Props) {
  return (
    <>
      {props.bannerList?.map((banner) => (
        <img src={banner} class="mt-1 w-full h-20 object-cover" />
      ))}
    </>
  );
}

//特集の横スクロールを出したい時に使う
export function ScrollFeature2(props: Props) {
  return (
    <div class="first:ml-4 pr-4">
      <div class="w-40 text-2.5">
        <div
          class={`flex items-center border rounded mb-2 text-center h-40 bg-[${props.bgColor}]`}
        >
          <p class="text-white mx-auto">特集ページ</p>
        </div>
        <p class="mt-1">
          一世を風靡したタピオカミルクティーがなぜ人気なのかを解説。タピオカミルクティーの秘密からバズる秘訣を見出します。
        </p>
      </div>
    </div>
  );
}
