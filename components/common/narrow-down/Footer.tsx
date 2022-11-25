import { Button } from "../Button.tsx";

//絞り込み条件を選択するときの画面におけるフッター（リセットボタンあり）
export function Footer() {
  return (
    <div class="w-full h-10 flex items-center px-4 fixed bottom-0 bg-lightgray">
      <Button
        white={true}
        klass="h-8 w-1/3 mr-2"
        rounded_full={true}
        name="リセット"
      />
      <Button
        brown={true}
        klass="h-8 w-2/3"
        rounded_full={true}
        name="検索"
      />
    </div>
  );
}
