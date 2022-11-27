import { useState } from "preact/hooks";

interface Props {
  link?: string; //ボタン内にリンクを付ける際に使用
  h10_w72?: boolean; //h-10,w-72のサイズを指定する時に使用（基本は使う）
  no_mx_auto?: boolean; //mx-autoが不要な時に使用
  rounded_full?: boolean; //rounded-fullを使いたい時に使用
  klass?: string; //追加でCSSを入れたい時に使用
  name?: string; //ボタン内に文字を表示する際に使用
  onClick?: (e: Event) => void;
}

interface PropsColor extends Props {
  color: "white" | "brown" | "gray" | "disabled"; //buttonの色を管理する
  arrow?: "left" | "right" | "down"; //矢印を出したいときに使う。colorと併用する
  disabled?: boolean; //disiabledを使いたい時に使用
}
export function Button(props: PropsColor) {
  const onClick = (e: Event) => {
    if (!props.disabled) {
      location.href = props.link!;
    }
  };

  const colors = {
    white: {
      color: "text-brown bg-white border border-brown",
      left: "/icon/common/arrow/brownLeft.png",
      right: "/icon/common/arrow/brownRight.png",
      down: "/icon/common/arrow/brownDown.png",
    },
    brown: {
      color: "text-white bg-brown",
      left: "/icon/common/arrow/whiteLeft.png",
      right: "/icon/common/arrow/whiteRight.png",
      down: "",
    },
    gray: {
      color: "text-gray bg-white border border-gray",
      left: "/icon/common/arrow/grayLeft.png",
      right: "/icon/common/arrow/grayRight.png",
      down: "",
    },
    disabled: {
      color: "text-white bg-lightgray",
      left: "/icon/common/arrow/whiteLeft.png",
      right: "/icon/common/arrow/whiteRight.png",
      down: "",
    },
  };

  const color = colors[props.color!];
  const arrow = props.arrow;

  return (
    <button
      class={`flex items-center text-center text-xs
      ${color.color}
      ${props.h10_w72 ? "h-10 w-72" : ""}
      ${props.no_mx_auto ? "" : "mx-auto"}
      ${props.rounded_full ? "rounded-full" : "rounded"}
      ${props.klass ? props.klass : ""}`} //klassではwidth,height,margin,paddingなどを設定
      onClick={props.onClick != null || undefined ? props.onClick : onClick}
      disabled={props.disabled}
    >
      {arrow == "left"
        ? (
          <img
            src={color.left}
            alt="左矢印"
            class="h-2 w-2 ml-4"
          />
        )
        : null}
      {arrow == "right" || arrow == "down" ? <div class="w-6" /> : null}
      <p class="flex-1">{props.name}</p>
      {arrow == "right" || arrow == "down"
        ? (
          <img
            src={arrow == "right" ? color.right : color.down}
            alt={arrow == "right" ? "右矢印" : "下矢印"}
            class="h-2 w-2 mr-4"
          />
        )
        : null}
      {arrow == "left" ? <div class="w-6" /> : null}
    </button>
  );
}

//アコーディオンタイプのボタンを表示したい時に使う
//todo:アコーディオンを開くと高さが微妙に変わる
interface PropsAccodion extends Props {
  list?: string[]; //アコーディオンボタンの項目を詰める際に使用
}
export function AccodionButton(props: PropsAccodion) {
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
interface PropsRadio extends Props {
  buttonList?: { //ラジオボタンを出す時に使用
    name: string;
    label: string;
    checked?: boolean; //デフォルトで選択させたいときに使用する
    onClick?: () => void;
  }[];
}
export function RadioButton(props: PropsRadio) {
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
