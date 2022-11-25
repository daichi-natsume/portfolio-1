import { useState } from "preact/hooks";

interface Props {
  link?: string; //ボタン内にリンクを付ける際に使用
  white?: boolean; //茶色の枠・白背景のボタンを作る時に使用
  brown?: boolean; //茶色背景のボタンを作る時に使用
  gray?: boolean; //グレーの枠・白背景のボタンを作る時に使用
  disabled?: boolean; //disiabledを使いたい時に使用
  h10_w72?: boolean; //h-10,w-72のサイズを指定する時に使用（基本は使う）
  no_mx_auto?: boolean; //mx-autoが不要な時に使用
  rounded_full?: boolean; //rounded-fullを使いたい時に使用
  klass?: string; //追加でCSSを入れたい時に使用
  name?: string; //ボタン内に文字を表示する際に使用
  arrow?: "left" | "right" | "down"; //矢印を出したいときに使う。white,brown,gray,disabledのいずれかと併用する
  onClick?: (e: Event) => void;

  list?: string[]; //アコーディオンボタンの項目を詰める際に使用

  buttonList?: { //ラジオボタンを出す時に使用
    name: string;
    label: string;
    checked?: boolean; //デフォルトで選択させたいときに使用する
    onClick?: () => void;
  }[];
}

export function Button(props: Props) {
  const onClick = (e: Event) => {
    if (!props.disabled) {
      location.href = props.link!;
    }
  };

  const disable = () => {
    if (!props.disabled) {
      return "text-white bg-lightgray";
    } else {
      "text-white bg-brown";
    }
  };
  return (
    <button
      class={`flex items-center text-center text-xs
      ${props.white ? "text-brown bg-white border border-brown" : ""}
      ${props.brown || !props.disabled ? "text-white bg-brown" : ""}
      ${props.gray ? "text-gray bg-white border border-gray" : ""}
      ${props.disabled ? "text-white bg-lightgray" : ""}
      ${props.h10_w72 ? "h-10 w-72" : ""}
      ${props.no_mx_auto ? "" : "mx-auto"}
      ${props.rounded_full ? "rounded-full" : "rounded"}
      ${props.klass ? props.klass : ""}`}
      //props.disabled=falseの場合はprops.brownと同じデザイン
      //klassではwidth,height,margin,paddingなどを設定
      onClick={props.onClick != null || undefined ? props.onClick : onClick}
      disabled={props.disabled}
    >
      {props.arrow == "left"
        ? (
          <img
            src={`
            ${props.white ? "/icon/common/arrow/brownLeft.png" : ""}
            ${props.brown ? "/icon/common/arrow/whiteLeft.png" : ""}
            ${props.gray ? "/icon/common/arrow/grayLeft.png" : ""}`}
            alt="左矢印"
            class="h-2 w-2 ml-4"
          />
        )
        : null}
      {props.arrow == "right" || props.arrow == "down"
        ? <div class="w-6" />
        : null}
      <p class="flex-1">{props.name}</p>
      {props.arrow == "right"
        ? (
          <img
            src={`
            ${props.white ? "/icon/common/arrow/brownRight.png" : ""}
            ${props.brown ? "/icon/common/arrow/whiteRight.png" : ""}
            ${props.gray ? "/icon/common/arrow/grayRight.png" : ""}
            `}
            alt="右矢印"
            class="h-2 w-2 mr-4"
          />
        )
        : null}
      {props.arrow == "down"
        ? (
          <img
            src={`${props.white ? "/icon/common/arrow/brownDown.png" : ""}`}
            alt="下矢印"
            class="h-2 w-2 mr-4"
          />
        )
        : null}
      {props.arrow == "left" ? <div class="w-6" /> : null}
    </button>
  );
}

//アコーディオンタイプのボタンを表示したい時に使う
//todo:アコーディオンを開くと高さが微妙に変わる
export function AccodionButton(props: Props) {
  const [open, setOpen] = useState(false);
  const [accodion, setAccodion] = useState(false);

  const accodionFunction = () => {
    if (open) {
      setOpen(false);
      setAccodion(false);
    } else {
      setOpen(true);
      setAccodion(true);
    }
  };
  return (
    <div
      class={`flex flex-col w-1/2 text-xs text-brown  ${
        accodion ? "border rounded border-brown" : null
      }`}
    >
      <div
        class={`h-10 flex items-center text-center ${
          accodion ? null : "border rounded border-brown"
        }`}
      >
        <div class="w-2 h-2 ml-4" />
        <p class="flex-1">
          {props.name}
        </p>
        <img
          src="/icon/common/arrow/brownDown.png"
          alt="矢印"
          class={`w-2 h-2 mr-4 ${accodion ? "rotate-180" : null}`}
          onClick={accodionFunction}
        />
      </div>
      {accodion
        ? (
          <div>
            {props.list?.map((list) => (
              <a
                href=""
                class="h-10 flex items-center border-t border-brown"
              >
                <p class="ml-4">{list}</p>
              </a>
            ))}
          </div>
        )
        : null}
    </div>
  );
}

//単一選択をさせたいときに使用する
export function RadioButton(props: Props) {
  return (
    <div class={`flex ${props.klass ? props.klass : null}`}>
      {props.buttonList?.map((button) => (
        <label class="flex items-center ml-8 text-2.5">
          <input
            type="radio"
            name={button.name}
            class="w-3 h-3 rounded-full
                  border mr-1 accent-brown"
            required
            checked={button.checked}
            onClick={button.onClick}
          />
          {button.label}
        </label>
      ))}
    </div>
  );
}
