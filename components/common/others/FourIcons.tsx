//お気に入り・閲覧履歴・申請中ブランド・契約中ブランドのアイコンが横並びになっている

export function FourIcons() {
  const icons = [
    {
      link: "/mypage/favorite",
      src: "/icon/common/four-icons/before-favorite.png",
      alt: "お気に入りアイコン",
      label: "お気に入り",
    },
    {
      link: "/mypage/browsing-history",
      src: "/icon/common/four-icons/history.png",
      alt: "閲覧履歴アイコン",
      label: "閲覧履歴",
    },
    {
      link: "/mypage/applying",
      src: "/icon/common/four-icons/application.png",
      alt: "申請中アイコン",
      label: "申請中ブランド",
    },
    {
      link: "/mypage/under-contract",
      src: "/icon/common/four-icons/contract.png",
      alt: "契約中アイコン",
      label: "契約中ブランド",
    },
  ];
  return (
    <div class="my-6 flex place-content-around">
      {icons.map((icon) => (
        <div class="w-1/4">
          <a href={`${icon.link}`} class="flex flex-col items-center ">
            <img
              src={`${icon.src}`}
              alt={`${icon.alt}`}
              class="h-6 w-6 mb-1"
            />
            <p class="text-2.5">{icon.label}</p>
          </a>
        </div>
      ))}
    </div>
  );
}
