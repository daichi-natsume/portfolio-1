import { useState } from "preact/hooks";

interface Props {
  klass?: string;
  name?: string;
  link?: string;
  arrow?: "left" | "right" | "down"; //矢印を出したいときに使う
  list?: string[];
  disabled?: boolean;
  buttonList?: {
    name: string;
    label: string;
    checked?: boolean; //デフォルトで選択させたいときに使用する
    onClick?: () => void; //関数を与えたいときに使用する
  }[];
  onClickButton?: (e: Event) => void;
  Accodion?: (e: Event) => void;
}

//一番よく使う茶色枠・白色背景のボタン
export function WhiteButton(props: Props) {
  return (
    <a
      href={props.link}
      class={`h-10 w-72 mx-auto flex items-center bg-white border rounded
            text-center text-xs text-brown border-brown ${
        props.klass ? props.klass : null
      }`}
    >
      {props.arrow == "left"
        ? (
          <img
            src="/icon/common/arrow/brownLeft.png"
            alt="茶色の左矢印"
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
            src="/icon/common/arrow/brownRight.png"
            alt="茶色の右矢印"
            class="h-2 w-2 mr-4"
          />
        )
        : null}
      {props.arrow == "down"
        ? (
          <img
            src="/icon/common/arrow/brownDown.png"
            alt="茶色の右矢印"
            class="h-2 w-2 mr-4"
          />
        )
        : null}
      {props.arrow == "left" ? <div class="w-6" /> : null}
    </a>
  );
}

//一番よく使う茶色背景のボタン
export function BrownButton(props: Props) {
  return (
    <a
      href={props.link}
      class={`h-10 w-72 mx-auto flex items-center rounded
            text-center text-white text-xs bg-brown ${
        props.klass ? props.klass : null
      }`}
    >
      {props.arrow == "left"
        ? (
          <img
            src="/icon/common/arrow/whiteLeft.png"
            alt="茶色の左矢印"
            class="h-2 w-2 ml-4"
          />
        )
        : null}
      {props.arrow == "right" ? <div class="w-6" /> : null}
      <p class="flex-1">{props.name}</p>
      {props.arrow == "right"
        ? (
          <img
            src="/icon/common/arrow/whiteRight.png"
            alt="白色の右矢印"
            class="h-2 w-2 mr-4"
          />
        )
        : null}
      {props.arrow == "left" ? <div class="w-6" /> : null}
    </a>
  );
}

//黒枠白色背景のボタン
export function BlackButton(props: Props) {
  return (
    <a
      href={props.link}
      class={`h-10 w-72 mx-auto flex items-center rounded
            text-center text-xs border text-gray border-gray ${
        props.klass ? props.klass : null
      }`}
    >
      {props.arrow == "left"
        ? (
          <img
            src="/icon/common/arrow/grayLeft.png"
            alt="茶色の左矢印"
            class="h-2 w-2 ml-4"
          />
        )
        : null}
      {props.arrow == "right" ? <div class="w-6" /> : null}
      <p class="flex-1">{props.name}</p>
      {props.arrow == "right"
        ? (
          <img
            src="/icon/common/arrow/grayRight.png"
            alt="白色の右矢印"
            class="h-2 w-2 mr-4"
          />
        )
        : null}
      {props.arrow == "left" ? <div class="w-6" /> : null}
    </a>
  );
}

//height,width,font-size,roundedをklassで任意の値に指定する茶色枠・白色背景のボタン
export function FreeWhiteButton(props: Props) {
  return (
    <a
      href={props.link}
      class={`mx-auto flex items-center bg-white border
            text-center text-brown border-brown ${
        props.klass ? props.klass : null
      }`}
      onClick={props.onClickButton}
    >
      <p class="mx-auto">{props.name}</p>
    </a>
  );
}

//height,width,font-size,roundedをklassで任意の値に指定する茶色背景のボタン
export function FreeBrownButton(props: Props) {
  return (
    <a
      href={props.link}
      class={`flex items-center text-center text-white bg-brown ${
        props.klass ? props.klass : null
      }`}
    >
      <p class="mx-auto">{props.name}</p>
    </a>
  );
}

//bgをklassで任意の値に指定するボタン
export function FreeButton(props: Props) {
  const onClick = (e: Event) => {
    if (!props.disabled) {
      location.href = props.link!; //!をつけると強制的にそれをやる（!important的なやつ）
    }
  };
  return (
    <button
      class={`h-10 w-72 mx-auto flex items-center rounded text-center text-white text-xs ${
        props.klass ? props.klass : null
      } ${props.disabled ? "bg-lightgray" : "bg-brown"}`}
      disabled={props.disabled}
      onClick={onClick}
    >
      {props.arrow == "right" ? <div class="w-6" /> : null}
      <p class="flex-1">{props.name}</p>
      {props.arrow == "right"
        ? (
          <img
            src="/icon/common/arrow/whiteRight.png"
            alt="白色の右矢印"
            class="h-2 w-2 mr-4"
          />
        )
        : null}
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
