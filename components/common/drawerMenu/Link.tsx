//DrawerMenuの各リンク項目を設定するコンポーネント

interface Props {
  name?: string;
  link?: string;
  linkList?: { link: string; name: string; noBorder?: boolean }[];
}

export function Link(props: Props) {
  return (
    <a
      href={`${props.link}`}
      class="h-10 flex items-center border-t border-lightBrown"
    >
      <p class="text-xs ml-8 flex-1">{props.name}</p>
      <img
        src="/icon/common/arrow/grayRight.png"
        alt="右矢印アイコン"
        class="h-2 w-2 mr-4"
      />
    </a>
  );
}

export function LinkList(props: Props) {
  return (
    <>
      <div class="h-2 bg-lightBrown" />
      {props.linkList?.map((link) => (
        <a
          href={`${link.link}`}
          class={`h-10 flex items-center ${
            link.noBorder ? "" : "border-b border-lightBrown"
          } `}
        >
          <p class="text-xs ml-8 flex-1">{link.name}</p>
          <img
            src="/icon/common/arrow/grayRight.png"
            alt="右矢印アイコン"
            class="h-2 w-2 mr-4"
          />
        </a>
      ))}
    </>
  );
}
