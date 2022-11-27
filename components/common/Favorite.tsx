//お気に入りアイコンの表示に関してまとめたコンポーネント

import { useState } from "preact/hooks";

//丸枠で囲まれたお気に入りアイコン
export function Favorite() {
  const [fav, setFav] = useState(true);
  const FavFunction = () => {
    if (fav) {
      setFav(false);
    } else {
      setFav(true);
    }
  };
  return (
    <div class="w-10 h-10 rounded-full border p-2.5 border-brown">
      <img
        src={`${
          fav
            ? "/icon/common/four-icons/favorite-brown.png"
            : "/icon/common/four-icons/after-favorite.png"
        }`}
        alt="お気に入りアイコン"
        onClick={FavFunction}
      />
    </div>
  );
}

//丸枠で囲まれたお気に入りアイコンとお気に入りされた数を表示
interface Props {
  num: number;
}
export function FavoriteNum(props: Props) {
  const [fav, setFav] = useState(true);
  const FavFunction = () => {
    if (fav) {
      setFav(false);
    } else {
      setFav(true);
    }
  };
  return (
    <div class="w-14 h-14 border rounded-full flex items-center absolute bottom-2 right-2 z-50 bg-white border-brown">
      <div class="flex flex-col text-center mx-auto">
        <img
          src={`${
            fav
              ? "/icon/common/four-icons/favorite-brown.png"
              : "/icon/common/four-icons/after-favorite.png"
          }`}
          alt="お気に入り"
          class="w-6 h-6 my-1"
          onClick={FavFunction}
        />
        <p class="text-2.5">{fav ? props.num - 1 : props.num}</p>
      </div>
    </div>
  );
}
