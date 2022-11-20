import { Handlers } from "$fresh/server.ts";

export const handler: Handlers = {
  GET() {
    return Response.json(brandRanking);
  },
};
const brandRanking = [
  {
    src: "/image/brandLogo/logo1.jpg",
    name: "花村屋拉麺",
    genre: "ラーメン",
    num: 1000,
  },
  {
    src: "/image/brandLogo/logo1.jpg",
    name: "花村屋拉麺",
    genre: "ラーメン",
    num: 900,
  },
  {
    src: "/image/brandLogo/logo1.jpg",
    name: "花村屋拉麺",
    genre: "ラーメン",
    num: 800,
  },
  {
    src: "/image/brandLogo/logo1.jpg",
    name: "花村屋拉麺",
    genre: "ラーメン",
    num: 700,
  },
  {
    src: "/image/brandLogo/logo1.jpg",
    name: "花村屋拉麺",
    genre: "ラーメン",
    num: 600,
  },
];
