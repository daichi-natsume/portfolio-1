interface Props {
  WlinkList?: { name?: string; link?: string }[][];
  linkList?: {
    name?: string;
    link?: string;
    border?: boolean;
    src?: string;
    alt?: string;
  }[];
}

//1列×n列（任意の数）の右矢印付きリンク集を作りたい時に使用する（例：ブランド詳細ページ）
export function RightArrowLinkList(props: Props) {
  return (
    <div class="border-b mb-4">
      {props.linkList?.map((list) => (
        <a
          href={list.link}
          class={`${list.border ? "border-b" : ""}
              first:mt-8 mt-4 mx-4 px-2 pb-2 flex items-center `}
        >
          <p class="text-xs flex-1">{list.name}</p>
          <img
            src="/icon/common/arrow/grayRight.png"
            alt="右矢印"
            class="h-2 w-2"
          />
        </a>
      ))}
    </div>
  );
}

//２列×n列（任意の数）のリンク集を作りたい時に使用する（例：ブランド詳細ページ）
export function WLinkList(props: Props) {
  return (
    <div class="mb-12">
      {props.WlinkList?.map((pairList) => (
        <div class="mx-4 border-b flex pl-2 pb-2 mb-2 text-2.5">
          {pairList.map((list) => (
            <div class="w-1/2">
              <a href={list.link}>
                {list.name}
              </a>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

//1列×n列（任意の数）の外枠・右矢印付きリンク集を作りたい時に使用する（例：マイページ）
export function BorderLinkList(props: Props) {
  return (
    <div class="mx-4 border rounded">
      {props.linkList?.map((list) => (
        <>
          <a
            href={`${list.link}`}
            class="w-full flex items-center justify-between bg-white h-12 text-xs border-b last:border-b-0"
          >
            <div class="flex mx-4">
              <img
                src={`${list.src}`}
                alt={`${list.alt}`}
                class="h-4 w-4"
              />
              <p class="my-auto ml-4">{list.name}</p>
            </div>
            <img
              src="/icon/common/arrow/grayRight.png"
              alt="グレーの右矢印"
              class="h-2 w-2 my-auto mr-4"
            />
          </a>
        </>
      ))}
    </div>
  );
}
