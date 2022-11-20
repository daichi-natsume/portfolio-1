//ブランド詳細のブランド画像に関するコンポーネント
//todo:swiperの部分をコンポーネント化する
import { brandDetail } from "../../shared/server/brand.ts";
import { FavoriteNum } from "../../components/common/Favorite.tsx";
import { Component } from "preact";

// deno-lint-ignore no-var no-explicit-any
declare var Swiper: any;

interface Props {
  data: brandDetail;
}

export default class BrandPhoto extends Component<Props> {
  constructor(props: Props) {
    super(props);
  }

  componentDidMount() {
    const swiper = new Swiper(".swiper-container", {
      loop: true,
      speed: 500,
      centeredSlides: true,
      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
        waitForTransition: false,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
  }

  render() {
    return (
      <>
        <div class="relative h-72 mt-8 border flex items-center">
          <div class="h-64 overflow-hidden swiper-container">
            <div class="h-full swiper-wrapper">
              {this.props.data.imgs.map((img) => (
                <img
                  src={img}
                  alt="ブランドの写真"
                  class="object-contain swiper-slide"
                />
              ))}
            </div>
            <div class="swiper-button-prev" />
            <div class="swiper-button-next" />
          </div>
          <FavoriteNum num={358} />
        </div>
      </>
    );
  }
}
