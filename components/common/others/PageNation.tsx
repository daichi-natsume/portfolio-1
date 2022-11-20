interface Props {
  displayNumStart?: number;
  displayNumEnd?: number;
  klass?: string;
}

//ページネーションを使用するときに使うコンポーネント
export function PageNation(props: Props) {
  return (
    <div
      class={`h-10 flex items-center text-center px-4 mt-10 border-y ${
        props.klass ? props.klass : null
      }`}
    >
      <a href="">
        <img
          src="/icon/common/arrow/grayLeft.png"
          alt="左矢印"
          class="h-2 w-2"
        />
      </a>

      <p class="flex-1 text-2.5">
        {props.displayNumStart} / {props.displayNumEnd} ページ
      </p>
      <a href="">
        <img
          src="/icon/common/arrow/grayRight.png"
          alt="右矢印"
          class="h-2 w-2"
        />
      </a>
    </div>
  );
}
