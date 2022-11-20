//確認画面のタイトル下部に出る確認メッセージ

interface Props {
  msg: string;
}

export function ConfirmMsg(props: Props) {
  return (
    <div class="my-8 ml-4 text-2.5">
      <p>以下の内容で{props.msg}します。</p>
      <p>よろしければ「{props.msg}する」ボタンを押してください。</p>
    </div>
  );
}
