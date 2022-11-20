//進捗度合いを視覚的に示す際に使用する
//todo:リファクタリング未着手

interface Props {
  step: number;
}

export function StepBar(props: Props) {
  return (
    <div class="mt-5 text-2.5 text-brown">
      <div class="flex mx-auto w-[17rem]">
        <div class="h-2.5 w-2.5 bg-brown rounded-full" />
        {props.step > 1
          ? <div class="h-px w-[7.5rem] bg-brown my-auto" />
          : <div class="h-px w-[7.5rem] bg-[#EBEBEB] my-auto" />}
        {props.step > 1
          ? <div class="h-2.5 w-2.5 bg-brown rounded-full" />
          : <div class="h-2.5 w-2.5 border rounded-full" />}
        {props.step > 2
          ? <div class="h-px w-[7.5rem] bg-brown my-auto" />
          : <div class="h-px w-[7.5rem] bg-[#EBEBEB] my-auto" />}
        {props.step > 2
          ? <div class="h-2.5 w-2.5 bg-brown rounded-full" />
          : <div class="h-2.5 w-2.5 border rounded-full" />}
      </div>

      <div class="w-[17.625rem] flex justify-between mx-auto mt-1">
        <p>登録</p>
        {props.step > 1 ? <p>確認</p> : <p class="text-lightGray">確認</p>}
        {props.step > 2 ? <p>完了</p> : <p class="text-lightGray">完了</p>}
      </div>
    </div>
  );
}
