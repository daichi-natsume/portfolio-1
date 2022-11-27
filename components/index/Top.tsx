//トップページの要素をまとめたコンポーネント

import { Component } from "preact";
import { SearchBoxHeader } from "../common/Header.tsx";
import { FourIcons } from "../common/others/FourIcons.tsx";
import MainBanners from "../../components/Banner.tsx";
import { Leading } from "../common/others/Leading.tsx";
import { Genre } from "./Genre.tsx";
import { BrandList, BrandRanking } from "../common/Brand.tsx";
import { Button } from "../common/Button.tsx";
import { Info } from "./Info.tsx";
import { Inquiry } from "../common/others/Inquiry.tsx";
import { SNSAccount } from "../common/others/SNSAccount.tsx";
import { Footer } from "../common/Footer.tsx";
import { FeatureContents } from "./FeatureContentsBar.tsx"; //todo:このコンポーネントは未着手
import { genre } from "../../shared/server/genre.ts";
import { AllData } from "../../routes/index.tsx";

interface Props {
  open: boolean;
  data: AllData;
  onClick: (e: Event) => void;
}

function creatPair(genres: genre[], n: number) {
  const pair: genre[][] = [];
  for (let i = 0; i < genres.length; i += n) {
    pair.push(genres.slice(i, i + n));
  }
  return pair;
}

export class Top extends Component<Props, AllData> {
  async componentDidMount() {
    const res = await fetch("/api/brand-ranking");
    const json = await res.json();
    this.setState({ ...this.state, brandRanking: json });
  }

  render() {
    const props = this.props;
    const data = props.data;
    const allGenres = creatPair(data.allGenres, 2);
    const recentGenres = creatPair(data.recentGenres, 2);
    return (
      <div class={`${props.open ? "fixed w-full" : ""}`}>
        <SearchBoxHeader onClick={props.onClick} />
        <main>
          <FourIcons />
          <MainBanners bannerList={data.topBannerList} />

          <Leading title="ジャンルから探す" linkName="ジャンル一覧" more={true} />
          <Genre genres={allGenres} />

          <Leading title="最近チェックしたジャンル" />
          <Genre genres={recentGenres} />

          <Leading title="人気ブランド総合ランキング" linkName="すべて見る" more={true} />
          <BrandRanking brandList={data.brandRanking} />

          <Leading title="新着ブランド" linkName="すべて見る" more={true} />
          <BrandList brandList={data.brandDataList} />

          <Leading title="特集コンテンツ" />
          <FeatureContents />
          <Button
            link="/"
            color="white"
            h10_w72={true}
            klass="mt-4"
            name="特集コンテンツをもっと見る"
            arrow="right"
          />

          <Leading title="お知らせ" linkName="新着情報一覧" more={true} />
          <Info infoList={data.infoList} />
          <Inquiry />
          <SNSAccount />
        </main>
        <Footer />
      </div>
    );
  }
}
