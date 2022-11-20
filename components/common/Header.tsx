//ヘッダー挿入時に使用するコンポーネント

import { SearchBox } from "./input/SearchBox.tsx";

interface Props {
  onClick?: (e: Event) => void;
}

//通常のヘッダー（ログイン後）
export function LoginHeader(props: Props) {
  return (
    <header>
      <div class="h-16 flex px-4 items-center bg-brown">
        <img
          src="/icon/common/header/hamburgerButton.png"
          alt="ハンバーガーメニューアイコン"
          class="h-6 w-6 ml-2"
          onClick={props.onClick}
        />

        <div class="flex-1" />
        <a href="/mypage" class="flex flex-col items-center">
          <img
            src="/icon/common/header/mypage.png"
            alt="ログインアイコン"
            class="h-6 w-6"
          />
          <p class="text-white mt-1 text-2.5">マイページ</p>
        </a>
      </div>
    </header>
  );
}

//茶色の背景だけのヘッダー
export function BrownHeader() {
  return (
    <header class="h-16 bg-brown">
    </header>
  );
}

//DrawerMenuのヘッダー（未ログイン時）
export function DrawerMenuHeader(props: Props) {
  return (
    <div class="h-16 bg-brown">
      <div class="h-16 w-12 ml-3 bg-white">
        <div class="h-5" />
        <img
          src="/icon/common/header/cross.png"
          alt="バツアイコン"
          class="h-6 w-6 mx-auto"
          onClick={props.onClick}
        />
      </div>
    </div>
  );
}

//トップページ・ジャンル検索・FW検索画面に使用するヘッダー（未ログイン時）
export function SearchBoxHeader(props: Props) {
  return (
    <header>
      <div class="h-30 bg-brown">
        <div class="flex mx-5">
          <img
            src="/icon/common/header/hamburgerButton.png"
            alt="ハンバーガーメニューアイコン"
            class="h-6 w-6 mt-5 ml-2"
            onClick={props.onClick}
          />
          <div class="flex-1" />
          <div class="mt-3">
            <a href="/login" class="flex flex-col items-center">
              <img
                src="/icon/common/header/login.png"
                alt="ログインアイコン"
                class="h-6 w-6"
              />
              <p class="text-white mt-1.5 text-2.5">ログイン</p>
            </a>
          </div>
        </div>
        <SearchBox />
      </div>
    </header>
  );
}
