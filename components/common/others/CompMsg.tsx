//各種完了画面で使用するコンポーネント

interface Props {
  compMsg?: string[] | string;
}

export function CompMsg(props: Props) {
  return (
    <div class="my-12 mx-4 py-6 flex flex-col content-center rounded bg-lightBrown">
      <img
        src="/icon/common/others/complete.png"
        alt="完了アイコン"
        class="h-16 w-16 mb-4 mx-auto"
      />
      {props.compMsg instanceof Array
        ? props.compMsg?.map((msg) => (
          <>
            <p class="mx-auto text-sm">{msg}</p>
          </>
        ))
        : <p class="mx-auto text-sm">{props.compMsg}</p>}
    </div>
  );
}
