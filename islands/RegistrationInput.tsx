import { useState } from "preact/hooks";
import { BrownHeader } from "../components/common/Header.tsx";
import { Title } from "../components/common/screen-title/Title.tsx";
import { StepBar } from "../components/registration/StepBar.tsx";
import { Permission } from "../components/registration/Permission.tsx";
import { BgLeading, SubLeading } from "../components/common/others/Leading.tsx";
import { Button, RadioButton } from "../components/common/Button.tsx";
import {
  Checkbox,
  HiddenInput,
  Input,
  WInput,
} from "../components/common/input/Input.tsx";

export default function islands() {
  const [classification, setClassification] = useState(true);

  const memberType = [{
    name: "classification",
    label: "個人",
    checked: classification,
    onClick: () => setClassification(true),
  }, {
    name: "classification",
    label: "法人",
    onClick: () => setClassification(false),
  }];

  const gender = [{
    name: "gender",
    label: "男性",
  }, {
    name: "gender",
    label: "女性",
  }, {
    name: "gender",
    label: "無回答",
  }];

  const name = ["性", "名"];
  const nameKana = ["セイ", "メイ"];

  return (
    <>
      <BrownHeader />
      <main>
        <Title title="新規会員登録" />
        <StepBar step={1} />
        <div class="mt-8 border-b text-2.5">
          <p class="ml-5 mb-2.5 text-red">
            入力目安時間（2分）
          </p>
          <BgLeading title="会員種別" mandatory={true} />
          <RadioButton buttonList={memberType} klass="mt-4 mb-6" />
          {classification
            ? (
              <>
                <BgLeading title="氏名" mandatory={true} />
                <WInput inputList={name} klass="mt-4 mb-6" />

                <BgLeading title="氏名（カナ）" mandatory={true} />
                <WInput inputList={nameKana} klass="mt-4 mb-6" />

                <BgLeading title="性別" mandatory={true} />
                <RadioButton buttonList={gender} klass="mt-4 mb-6" />

                <BgLeading title="ご住所" mandatory={true} />
              </>
            )
            : (
              <>
                <BgLeading title="会社名" mandatory={true} />
                <Input placeholder="会社名" klass="w-72 ml-8 mt-4 mb-6" />

                <BgLeading title="会社名（カナ）" mandatory={true} />
                <Input placeholder="カイシャメイ" klass="w-72 ml-8 mt-4 mb-6" />

                <BgLeading title="部署名" />
                <Input placeholder="部署名" klass="w-72 ml-8 mt-4 mb-6" />

                <BgLeading title="部署名（カナ）" />
                <Input placeholder="ブショメイ" klass="w-72 ml-8 mt-4 mb-6" />

                <BgLeading title="役職名" />
                <Input placeholder="役職名" klass="w-72 ml-8 mt-4 mb-6" />

                <BgLeading title="担当者名" mandatory={true} />
                <WInput inputList={name} klass="mt-4 mb-6" />

                <BgLeading title="担当者名（カナ）" mandatory={true} />
                <WInput inputList={nameKana} klass="mt-4 mb-6" />

                <BgLeading title="会社のご住所" mandatory={true} />
              </>
            )}

          <SubLeading
            title="郵便番号"
            mandatory={true}
            msg="都道府県・市区町村は、郵便番号から住所検索していただくと、自動で入力されます。"
          />
          <div class="flex">
            <Input placeholder="0000000" klass="ml-8 mr-2 w-24" />
            <Button
              color="brown"
              no_mx_auto={true}
              klass="h-10 w-24"
              name="住所検索"
            />
          </div>
          <SubLeading title="都道府県" mandatory={true} />
          <Input placeholder="都道府県" klass="w-72 ml-8" />
          {/* todo:後程プルダウンにする */}

          <SubLeading title="市区町村" mandatory={true} />
          <Input placeholder="例 : 品川区平塚" klass="w-72 ml-8" />

          <SubLeading title="丁目・番地" mandatory={true} msg="数字は半角で記入してください" />
          <Input placeholder="例 : 2-3-2" klass="w-72 ml-8" />

          <SubLeading title="建物名・部屋番号" msg="全て半角で記入してください。" />
          <Input placeholder="飲食フランチャイズ101" klass="w-72 ml-8 mb-6" />

          <BgLeading title="電話番号" mandatory={true} />
          <div class="flex">
            <Input placeholder="000" klass="w-16 ml-8 mt-4 mb-6" />
            <div class="h-10 mx-2 mt-4 flex items-center">
              <p>ー</p>
            </div>
            <Input placeholder="000" klass="w-16 mt-4 mb-6" />
            <div class="h-10 mx-2 mt-4 flex items-center">
              <p>ー</p>
            </div>
            <Input placeholder="000" klass="w-16 mt-4 mb-6" />
          </div>

          <BgLeading title="メールアドレス" mandatory={true} />
          <Input placeholder="メールアドレス" klass="w-72 ml-8 mt-4 mb-6" />

          <BgLeading title="パスワード" mandatory={true} />
          <HiddenInput placeholder="半角英数字6~20文字" klass="w-72 ml-8 mt-4" />
          <HiddenInput
            placeholder="確認のため再度ご入力ください"
            klass="w-72 ml-8 mt-2 mb-6"
          />

          <BgLeading title="メールマガジン" />
          <p class="mt-4 mx-8">メールマガジンにて、新着ブランド情報、コラムなどのお得な情報をお送りします。</p>
          <div class="w-72 h-10 ml-8 mt-2 mb-6 rounded flex border items-center text-2.5">
            <Checkbox msg="メールマガジンを受け取る" klass="mx-2" />
          </div>
        </div>
        <Permission />
        <Button
          name="確認画面へ"
          link="/registration/confirmation"
          klass="my-12"
          h10_w72={true}
          disabled={true}
          color="disabled"
        />
      </main>
    </>
  );
}
