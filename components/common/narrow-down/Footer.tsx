import { FreeBrownButton, FreeWhiteButton } from "../Button.tsx";

//絞り込み条件を選択するときの画面におけるフッター（リセットボタンあり）
export function Footer() {
  return (
    <div class="w-full h-10 flex items-center px-4 fixed bottom-0 bg-lightgray">
      <FreeWhiteButton
        name="リセット"
        klass="h-8 w-1/3 rounded-full text-xs mr-2"
      />
      <FreeBrownButton
        name="検索"
        klass="h-8 w-2/3 rounded-full text-white text-xs"
      />
    </div>
  );
}
