import { Button } from "./Button.tsx";
import { Favorite } from "./Favorite.tsx";
import { ScrollBrandPhotos } from "./scroll/Scroll.tsx";

interface Props {
  src?: string;
  rank?: number; //ランキング表示する際のランキングに使う
  brandName?: string;
  genre?: string;
  contractNum?: number; //契約数を表示したい時に使う
  status?: number; //ブランドの申請ステータスを取得したい時に使う
  brandList?: {
    status?: number;
    src?: string;
    name?: string;
    genre?: string;
    price?: string;
    content?: string;
    num?: number;
    imgs?: string[];
  }[];
  imgs?: string[];
  dastBox?: boolean; //FavTripleBrand関数で削除ボタンに切り替える時に使う
  visited?: boolean; //TripleBrand関数で閲覧履歴画面の表示に使う
}

//マイページのお気に入りブランドランキングで使うブランド単体のカセット
export function FavBrand(props: Props) {
  return (
    <a href="/brand/brand-detail">
      <div class="w-64 h-20 ml-3 border rounded flex">
        <img
          src={`${props.src}`}
          alt="ブランドロゴ"
          class="h-14 w-14 m-2"
        />
        <div class="w-48 mt-2">
          <p class="text-sm">{props.brandName}</p>
          <p class="my-0.5 text-2.5">ジャンル：{props.genre}</p>
          <Button
            link="brand/application/confirmation"
            brown={true}
            klass="h-6 w-11/12 text-2.5"
            name="申請する"
          />
        </div>
      </div>
    </a>
  );
}

//人気ブランドランキングで使うブランド単体のカセット（例：トップページ）
export function BrandRanking(props: Props) {
  return (
    <div class="flex w-full overflow-x-auto hidden-scrollbar">
      {props.brandList?.map((brand, i) => (
        <div class="first:ml-4 pr-4">
          <a
            href="/brand/brand-detail"
            class="w-64 h-20 border rounded flex"
          >
            <img
              src={`${brand.src}`}
              alt="ブランドロゴ"
              class="h-14 w-14 m-3"
            />
            <div class="mt-2">
              <div class="flex">
                <p>
                  {i + 1}
                  <span class="ml-0.5 text-2.5">位</span>
                </p>
                <p class="ml-2">{brand.name}</p>
              </div>
              <p class="mt-1 ml-4 text-2.5">ジャンル：{brand.genre}</p>
              <p class="mt-1 ml-4 text-2.5">
                契約数：{brand.num?.toLocaleString()}
              </p>
            </div>
          </a>
        </div>
      ))}
    </div>
  );
}

//ブランドを一覧で表示する際に使う
export function BrandList(props: Props) {
  return (
    <>
      {props.brandList?.map((brand) => (
        <div class="mx-4 mt-2">
          <a
            href="/brand/brand-detail"
            class="h-24 border rounded flex"
          >
            <img
              src={`${brand.src}`}
              alt="ブランドロゴ"
              class="h-16 w-16 my-4 ml-4"
            />
            <div class="mx-4 my-4">
              <p class="text-sm mb-0.5">{brand.name}</p>
              <p class="text-2.5">
                {brand.content}
              </p>
            </div>
          </a>
        </div>
      ))}
    </>
  );
}

//ジャンル検索・FW検索結果一覧画面のブランド表示時に使用する
export function ResultBrand(props: Props) {
  return (
    <div>
      {props.brandList?.map((list) => (
        <div class="first:border-t border-b">
          <div class="mx-4 pt-2 flex items-center">
            <div class="flex-1 text-2.5">
              <p class="text-xs">{list.name}</p>
              <p class="my-1">ジャンル : {list.genre}</p>
              <p>価格帯 : {list.price}</p>
            </div>
            <Favorite />
          </div>
          <ScrollBrandPhotos imgs={list.imgs} />
          <Button
            link="/brand/brand-detail"
            brown={true}
            h10_w72={true}
            klass="mb-4"
            name="ブランド詳細ページへ"
            arrow="right"
          />
        </div>
      ))}
    </div>
  );
}

//閲覧履歴で3列ブランドを表示する場合に使う
//todo:下のやつとまとめたい
export function TripleBrand(props: Props) {
  return (
    <>
      <div class="flex text-2.5">
        {props.brandList?.map((brand) => (
          <a
            href="/brand/brand-detail"
            class="w-1/3 border-b border-r last:border-r-0 flex flex-col content-center"
          >
            <img
              src={`${brand.src}`}
              alt="ブランドロゴ"
              class="w-5/6 mx-auto my-2"
            />
            <p class="text-sm ml-2 mb-1">{brand.name}</p>
            <p class="ml-2">{brand.genre}</p>
            <div class="flex items-center justify-center my-2">
              <Button
                link="/brand/application/confirmation"
                brown={true}
                klass="h-6 w-20 text-2.5"
                name="申請する"
              />
              <img
                src="/icon/common/four-icons/favorite-brown.png"
                alt="お気に入りボタン"
                class="w-4 h-4 mr-2"
              />
            </div>
          </a>
        ))}
      </div>
    </>
  );
}

//お気に入り画面で3列ブランドを表示する場合に使う
//todo:上のやつとまとめたい
export function FavTripleBrand(props: Props) {
  return (
    <>
      <div class="flex text-2.5">
        {props.brandList?.map((brand) => (
          <a
            href="/brand/brand-detail"
            class="w-1/3 border-b border-r last:border-r-0 flex flex-col content-center"
          >
            <img
              src={`${brand.src}`}
              alt="ブランドロゴ"
              class="w-5/6 mx-auto my-2"
            />
            <p class="text-sm ml-2 mb-1">{brand.name}</p>
            <p class="ml-2">{brand.genre}</p>
            {props.dastBox
              ? (
                <img
                  src="/icon/common/delete/delete.png"
                  alt="削除アイコン"
                  class="h-6 w-6 mx-auto my-2"
                />
              )
              : (
                <Button
                  link="/brand/application/confirmation"
                  brown={true}
                  klass="h-6 w-5/6 my-2"
                  name="申請する"
                />
              )}
            {props.visited
              ? (
                <div class="flex items-center justify-center my-2">
                  <Button
                    link="/brand/application/confirmation"
                    brown={true}
                    klass="h-6 w-20 text-2.5"
                    name="申請する"
                  />
                  <img
                    src="/icon/common/four-icons/favorite-brown.png"
                    alt="お気に入りボタン"
                    class="w-4 h-4 ml-2"
                  />
                </div>
              )
              : null}
          </a>
        ))}
      </div>
    </>
  );
}

//申請中ブランド・申請履歴ブランド一覧画面のブランド表示時に使う
export function ApplyBrand(props: Props) {
  const statusList = [
    { status: "申請中", button: "申請を取り消す" },
    { status: "契約可能", button: "申請を取り消す" },
    { status: "契約不可", button: "再度申請する" },
    { status: "契約中", button: "解約する" },
    { status: "解約済み", button: "再度申請する" },
  ];

  return (
    <>
      {props.brandList?.map((brand) => (
        <div class="border m-4 rounded">
          <a href="/brand/brand-detail" class="flex my-4 mx-4">
            <img
              src={brand.src}
              alt="ブランドロゴ"
              class="w-14 h-14 mr-4"
            />
            <div class="text-2.5">
              <p class="text-sm">{brand.name}</p>
              <p class="my-1 ml-4">ジャンル：{brand.genre}</p>
              <p class="ml-4">
                ステータス：{statusList[brand.status!].status}
                {/*todo:何で！マークが必要なのか聞く*/}
              </p>
            </div>
          </a>
          {brand.status == 1
            ? (
              <Button
                link="/brand/contract/confirmation"
                brown={true}
                h10_w72={true}
                klass="mb-2"
                name="フランチャイズ契約する"
              />
            )
            : null}
          {brand.status == 0 || brand.status == 1 || brand.status == 3
            ? (
              <Button
                link={brand.status == 0 || brand.status == 1
                  ? "/brand/cancel/confirmation"
                  : "/brand/cancel-contract/confirmation"}
                white={true}
                klass="w-72 h-6 mb-2"
                name={statusList[brand.status].button}
              />
            )
            : null}
          {brand.status == 2 || brand.status == 4
            ? (
              <Button
                link="/brand/application/confirmation"
                brown={true}
                h10_w72={true}
                klass="mb-2"
                name={statusList[brand.status].button}
              />
            )
            : null}
        </div>
      ))}
    </>
  );
}
