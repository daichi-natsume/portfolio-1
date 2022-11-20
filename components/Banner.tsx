//swiper.jsを使用した特集ページを出すときに使うコンポーネント

import { Component } from "preact";
import { SwiperFeature } from "../components/common/Feature.tsx";

// deno-lint-ignore no-var no-explicit-any
declare var Swiper: any;

interface Props {
  bannerList: string[];
}

export default class SwipeBanners extends Component<Props> {
  constructor(props: Props) {
    super(props);
  }

  componentDidMount() {
    const swiper = new Swiper(".swiper-container", {
      loop: true,
      speed: 500,
      centeredSlides: true,
      spaceBetween: 1,
      slidesPerView: 1.3,
      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
        waitForTransition: false,
      },

      pagination: {
        el: ".swiper-pagination",
        clickable: true,
        type: "bullets",
      },
    });
  }

  render() {
    return (
      <>
        <div class="swiper-container overflow-hidden">
          <div class="swiper-wrapper">
            <SwiperFeature bannerList={this.props.bannerList} />
          </div>
          <div class="swiper-pagination" />
        </div>
      </>
    );
  }
}
