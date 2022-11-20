interface Props {
  displayNumStart: number;
  displayNumEnd: number;
  totalNum: number;
  genre?: boolean;
  name?: string; //検索結果の数の横に青文字を挿入する時に使う（お気に入り画面など）
  onClick?: () => void;
}

//検索結果の数を表示するコンポーネント
export function ResultNumber(props: Props) {
  return (
    <div class="mt-4 mb-2 mx-4 flex items-end text-2.5">
      {props.name
        ? (
          <>
            <p class="flex-1">
              {props.displayNumStart} - {props.displayNumEnd}件 /{" "}
              {props.totalNum}件
            </p>
            <p class="text-blue" onClick={props.onClick}>{props.name}</p>
          </>
        )
        : (
          <>
            {props.genre ? <p class="text-sm mr-2">和食</p> : null}
            <p>
              {props.displayNumStart} - {props.displayNumEnd}件 /{" "}
              {props.totalNum}件
            </p>
          </>
        )}
    </div>
  );
}
