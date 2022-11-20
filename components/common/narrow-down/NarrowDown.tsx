import { Header } from "./Header.tsx";
import { Footer } from "./Footer.tsx";
import { VerticalCheckbox } from "../input/Input.tsx";
import { Checkbox, Input } from "../input/Input.tsx";

interface Props {
  open: boolean;
  onClickButton: (e: Event) => void;
}

//FW検索・ジャンル検索結果一覧画面の「絞り込む」ボタンを押した時に出る画面
export function NarrowDown(props: Props) {
  const list = [
    { name: "キーワード" },
    { name: "ジャンル" },
    { name: "価格帯" },
    { name: "季節" },
    { name: "対応エリア" },
  ];
  return (
    <>
      <div
        class={`h-screen bg-white ${props.open ? "open" : "close"}`}
      >
        <Header onClickButton={props.onClickButton} />
        <div class="text-xs">
          {list.map((list) => (
            <div class="border-b">
              <div class="h-12 flex items-center mx-3">
                {list.name == "キーワード" || list.name == "季節" || list.name == "価格帯"
                  ? (
                    <>
                      <p class={`w-20 ${list.name == "価格帯" ? "shrink" : null}`}>
                        {list.name}
                      </p>
                      {list.name == "キーワード" ? <Input klass="w-2/3" /> : null}
                      {list.name == "季節"
                        ? (
                          <div class="flex items-center">
                            <Checkbox msg="春" checked={true} klass="mr-2" />
                            <Checkbox
                              msg="夏"
                              checked={true}
                              klass="ml-4 mr-2"
                            />
                            <Checkbox
                              msg="秋"
                              checked={true}
                              klass="ml-4 mr-2"
                            />
                            <Checkbox
                              msg="冬"
                              checked={true}
                              klass="ml-4 mr-2"
                            />
                          </div>
                        )
                        : null}
                      {list.name == "価格帯"
                        ? (
                          <div class="flex items-center">
                            <Input klass="w-1/2 mr-2" />
                            <p class="whitespace-nowrap">円 〜</p>
                            <Input klass="w-1/2 mx-2" />
                            <p>円</p>
                          </div>
                        )
                        : null}
                    </>
                  )
                  : null}
                {list.name == "ジャンル" || list.name == "対応エリア"
                  ? (
                    <>
                      <p class="flex-1">{list.name}</p>
                      <img
                        src="/icon/common/arrow/grayRight.png"
                        alt="右矢印"
                        class="h-3"
                      />
                    </>
                  )
                  : null}
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}

//マイページ配下の画面の「絞り込むボタン」を押下した際に出る画面
export function MypageNarrowDown(props: Props) {
  const list = [
    { name: "キーワード" },
    { name: "ジャンル" },
    { name: "ステータス" },
  ];

  const status = ["申請中", "契約可能", "契約不可", "申請キャンセル", "解約申請中", "解約済"];

  return (
    <div>
      <div
        class={`h-screen bg-white ${props.open ? "open" : "close"}`}
      >
        <Header onClickButton={props.onClickButton} />
        <div class="text-xs">
          {list.map((list) => (
            <div class="border-b">
              {list.name == "ステータス"
                ? (
                  <div class="flex mx-4 my-2">
                    <p class="w-20">ステータス</p>
                    <VerticalCheckbox inputList={status} />
                  </div>
                )
                : (
                  <div class="h-12 flex items-center mx-4">
                    {list.name == "キーワード"
                      ? (
                        <>
                          <p class="w-20">
                            {list.name}
                          </p>
                          <Input klass="w-2/3" />
                        </>
                      )
                      : null}
                    {list.name == "ジャンル"
                      ? (
                        <>
                          <p class="flex-1">{list.name}</p>
                          <img
                            src="/icon/common/arrow/grayRight.png"
                            alt="右矢印"
                            class="h-2 w-2"
                          />
                        </>
                      )
                      : null}
                  </div>
                )}
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}
