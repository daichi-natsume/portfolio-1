interface Props {
  onClickButton: (e: Event) => void;
}

//絞り込み条件を選択するときの画面におけるヘッダー（ばつボタンあり）
export function Header(props: Props) {
  return (
    <div class="relative">
      <div class="h-12 flex items-center justify-center bg-lightgray">
        <p>ブランドを絞り込む</p>
      </div>
      <div class="w-12 h-12 absolute top-0 right-0 flex items-center bg-brown">
        <img
          src="/icon/common/others/cross-white.png"
          alt="バツボタン"
          class="w-6 h-6 mx-auto"
          onClick={props.onClickButton}
        />
      </div>
    </div>
  );
}
