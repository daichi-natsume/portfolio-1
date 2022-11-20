//SNSアイコンを出すときに使うコンポーネント

export function SNSAccount() {
  const icons = [
    { src: "/icon/common/sns/Facebook.png", alt: "Facebookのアイコン", link: "" },
    { src: "/icon/common/sns/Twitter.png", alt: "Twitterのアイコン", link: "" },
    { src: "/icon/common/sns/Instagram.png", alt: "Instagramのアイコン", link: "" },
    { src: "/icon/common/sns/LINE.png", alt: "LINEのアイコン", link: "" },
  ];
  return (
    <div class="text-center">
      <p class="mb-4 text-2.5">飲食フランチャイズ.com公式アカウント</p>
      <div class="flex w-64 mx-auto justify-between">
        {icons.map((icon) => (
          <a>
            <img
              src={icon.src}
              alt={icon.alt}
              class="w-8 h-8"
            />
          </a>
        ))}
      </div>
    </div>
  );
}
