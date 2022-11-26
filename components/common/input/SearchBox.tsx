//検索ボックス
//todo:検索したらFWに飛ぶようにする
export function SearchBox() {
  return (
    <div class="mx-4 mt-2 relative">
      <img
        src="/icon/common/search/search.png"
        alt="サーチアイコン"
        class="h-6 w-6 left-2 top-2 absolute"
        onClick={() => location.href = "/freeword/"}
      />
      <input
        type="text"
        onChange={(e) => location.href = "/freeword/"}
        placeholder="ブランドを検索する"
        class="h-10 bg-white rounded-full w-full pl-10 text-xs border border-brown brown-placeholder"
      />
    </div>
  );
}
