//ジャンルを「2列×n行」で一覧表示したいときに使用するコンポーネント

interface Props {
  genres: { name: string; src: string; link: string }[][];
}

export function Genre(props: Props) {
  return (
    <div class="mx-4 border rounded">
      <div class="flex flex-col">
        {props.genres.map((pairGenre) => (
          <div class="flex border-b last:border-b-0">
            {pairGenre.map((genre) => (
              <a
                href={`${genre.link}`} //todo:ジャンルごとにリンク先を変更する
                class="py-2 flex items-center border-r last:border-r-0 w-1/2"
              >
                <img
                  src={`${genre.src}`}
                  alt="写真"
                  class="w-8 h-8 rounded mx-2.5"
                />
                <p class="text-xs">{genre.name}</p>
              </a>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
