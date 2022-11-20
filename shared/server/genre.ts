export interface genre {
  name: string;
  src: string;
  link: string;
}

const allGenres = [
  { name: "洋食", src: "/image/genre/western.jpeg", link: "/search-genre" },
  {
    name: "中華",
    src: "/image/genre/chinese.jpg",
    link: "/search-genre",
  },
  { name: "和食", src: "/image/genre/japanese.jpg", link: "/search-genre" },
  {
    name: "エスニック",
    src: "/image/genre/ethnic.jpg",
    link: "/search-genre",
  },
  { name: "ラーメン", src: "/image/genre/ramen.jpg", link: "/search-genre" },
  {
    name: "焼肉",
    src: "/image/genre/grilled-meat.jpg",
    link: "/search-genre",
  },
  {
    name: "ファーストフード",
    src: "/image/genre/fast-food.jpeg",
    link: "/search-genre",
  },
  {
    name: "スイーツ",
    src: "/image/genre/sweets.jpeg",
    link: "/search-genre",
  },
  { name: "飲み物", src: "/image/genre/drink.jpg", link: "/search-genre" },
  {
    name: "その他",
    src: "/image/genre/others.jpg",
    link: "/search-genre",
  },
];

const recentGenres = [
  { name: "洋食", src: "/image/genre/western.jpeg", link: "/search-genre" },
  { name: "焼肉", src: "/image/genre/grilled-meat.jpg", link: "/search-genre" },
  {
    name: "ファーストフード",
    src: "/image/genre/fast-food.jpeg",
    link: "/search-genre",
  },
  { name: "飲み物", src: "/image/genre/drink.jpg", link: "/search-genre" },
];

export interface GenreData {
  allGenres: genre[];
  recentGenres: genre[];
}

export function getGenreData() {
  return {
    allGenres: allGenres,
    recentGenres: recentGenres,
  };
}
