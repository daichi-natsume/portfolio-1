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
} from "../components/common/input/Input.tsx";

export default function islands() {
  const [classification, setClassification] = useState(true);

  const memberType = [{
    label: "個人",
    checked: classification,
    onClick: () => setClassification(true),
  }, {
    label: "法人",
    onClick: () => setClassification(false),
  }];

  //Kojin関数のバリデーション
  const [name1, setName1] = useState("");
  const [name2, setName2] = useState("");
  const [nameError, setNameError] = useState("");
  const onName1 = (e: Event) => {
    const value = (e.target as HTMLInputElement).value;
    setName1(value);
    isName(value, name2);
  };
  const onName2 = (e: Event) => {
    const value = (e.target as HTMLInputElement).value;
    setName2(value);
    isName(name1, value);
  };

  const [name_v, setName_v] = useState(false);
  const isName = (value1: string, value2: string) => {
    if (value1 != "" && value2 != "") {
      setNameError("");
      setName_v(true);
      isValidKojin(true, nameKana_v, gender);
    } else {
      setNameError("氏名は入力必須項目です。");
      setName_v(false);
      isValidKojin(false, nameKana_v, gender);
    }
  };

  const [nameKana1, setNameKana1] = useState("");
  const [nameKana2, setNameKana2] = useState("");
  const [nameKanaError, setNameKanaError] = useState("");
  const onNameKana1 = (e: Event) => {
    const value = (e.target as HTMLInputElement).value;
    setNameKana1(value);
    isNameKana(value, nameKana2);
  };
  const onNameKana2 = (e: Event) => {
    const value = (e.target as HTMLInputElement).value;
    setNameKana2(value);
    isNameKana(nameKana1, value);
  };

  const [nameKana_v, setNameKana_v] = useState(false);
  const isNameKana = (value1: string, value2: string) => {
    if (value1 != "" && value2 != "") {
      setNameKanaError("");
      setNameKana_v(true);
      isValidKojin(name_v, true, gender);
    } else {
      setNameKanaError("氏名（カナ）は入力必須項目です。");
      setNameKana_v(false);
      isValidKojin(name_v, false, gender);
    }
  };

  const [gender, setGender] = useState(false);
  const onGender = (e: Event) => {
    setGender(true);
    isValidKojin(name_v, nameKana_v, true);
  };

  const [validKojin, setValidKojin] = useState(false);
  const isValidKojin = (
    name_v: boolean,
    nameKana_v: boolean,
    gender: boolean,
  ) => {
    if (name_v && nameKana_v && gender) {
      console.log("おーーい");
      setValidKojin(true);
      isValidAll(true, validHojin, validCommon, checked);
    } else {
      console.log("おーーいいいいいいい");
      setValidKojin(false);
      isValidAll(false, validHojin, validCommon, checked);
    }
  };

  //Hojin関数のバリデーション
  const [compNameError, setCompNameError] = useState("");
  const [compName_v, setCompName_v] = useState(false);
  const onCompName = (e: Event) => {
    const value = (e.target as HTMLInputElement).value;
    if (value) {
      setCompNameError("");
      setCompName_v(true);
      isValidHojin(
        true,
        compNameKana_v,
        nameKana_h_v,
        name_h_v,
      );
    } else {
      setCompNameError("会社名は入力必須項目です。");
      setCompName_v(false);
      isValidHojin(
        false,
        compNameKana_v,
        nameKana_h_v,
        name_h_v,
      );
    }
  };

  const [compNameKanaError, setCompNameKanaError] = useState("");
  const [compNameKana_v, setCompNameKana_v] = useState(false);
  const onCompNameKana = (e: Event) => {
    const value = (e.target as HTMLInputElement).value;
    if (value) {
      setCompNameKanaError("");
      setCompNameKana_v(true);
      isValidHojin(
        compName_v,
        true,
        nameKana_h_v,
        name_h_v,
      );
    } else {
      setCompNameKanaError("会社名（カナ）は入力必須項目です。");
      setCompNameKana_v(false);
      isValidHojin(
        compName_v,
        false,
        nameKana_h_v,
        name_h_v,
      );
    }
  };

  const [name1_h, setName1_h] = useState("");
  const [name2_h, setName2_h] = useState("");
  const [nameError_h, setNameError_h] = useState("");
  const onName1_h = (e: Event) => {
    const value = (e.target as HTMLInputElement).value;
    setName1_h(value);
    isName_h(value, name2_h);
  };
  const onName2_h = (e: Event) => {
    const value = (e.target as HTMLInputElement).value;
    setName2_h(value);
    isName_h(name1_h, value);
  };

  const [name_h_v, setName_h_v] = useState(false);
  const isName_h = (value1: string, value2: string) => {
    if (value1 != "" && value2 != "") {
      setNameError_h("");
      setName_h_v(true);
      isValidHojin(
        compName_v,
        compNameKana_v,
        true,
        nameKana_h_v,
      );
    } else {
      setNameError_h("担当者氏名は入力必須項目です。");
      setName_h_v(false);
      isValidHojin(
        compName_v,
        compNameKana_v,
        false,
        nameKana_h_v,
      );
    }
  };

  const [nameKana1_h, setNameKana1_h] = useState("");
  const [nameKana2_h, setNameKana2_h] = useState("");
  const [nameKanaError_h, setNameKanaError_h] = useState("");
  const onNameKana1_h = (e: Event) => {
    const value = (e.target as HTMLInputElement).value;
    setNameKana1_h(value);
    isNameKana_h(value, nameKana2_h);
  };
  const onNameKana2_h = (e: Event) => {
    const value = (e.target as HTMLInputElement).value;
    setNameKana2_h(value);
    isNameKana_h(nameKana1_h, value);
  };

  const [nameKana_h_v, setNameKana_h_v] = useState(false);
  const isNameKana_h = (value1: string, value2: string) => {
    if (value1 != "" && value2 != "") {
      setNameKanaError_h("");
      setNameKana_h_v(true);
      isValidHojin(
        compName_v,
        compNameKana_v,
        name_h_v,
        true,
      );
    } else {
      setNameKanaError_h("担当者氏名（カナ）は入力必須項目です。");
      setNameKana_h_v(false);
      isValidHojin(
        compName_v,
        compNameKana_v,
        name_h_v,
        false,
      );
    }
  };

  const [validHojin, setValidHojin] = useState(false);
  const isValidHojin = (
    compName_v: boolean,
    compNameKana_v: boolean,
    name_h_v: boolean,
    nameKana_h_v: boolean,
  ) => {
    if (compName_v && compNameKana_v && name_h_v && nameKana_h_v) {
      console.log("こっちだよ");
      setValidHojin(true);
      isValidAll(validKojin, true, validCommon, checked);
    } else {
      console.log("残念");
      setValidHojin(false);
      isValidAll(validKojin, false, validCommon, checked);
    }
  };

  //Common関数のバリデーション
  const [postCode, setPostCode] = useState("");
  const [postCodeError, setPostCodeError] = useState("");
  const onPostCode = (e: Event) => {
    const value = (e.target as HTMLInputElement).value;
    const regex = /^([0-9]{7})$/;
    if (regex.test(value)) {
      setPostCode(value);
      setPostCodeError("");
      isValidCommon(value, prefecture, city, address, tel, mail, pass);
    } else {
      setPostCode("");
      setPostCodeError(
        value ? "正しい形式の郵便番号を入力してください。" : "郵便番号が入力されていません。",
      );
      isValidCommon("", prefecture, city, address, tel, mail, pass);
    }
  };

  const [prefecture, setPrefecture] = useState("");
  const [prefectureError, setPrefectureError] = useState("");
  const onPrefecture = (e: Event) => {
    const value = (e.target as HTMLInputElement).value;
    if (value) {
      setPrefecture(value);
      setPrefectureError("");
      isValidCommon(postCode, value, city, address, tel, mail, pass);
    } else {
      setPrefecture("");
      setPrefectureError("都道府県は入力必須項目です。");
      isValidCommon(postCode, "", city, address, tel, mail, pass);
    }
  };

  const [city, setCity] = useState("");
  const [cityError, setCityError] = useState("");
  const onCity = (e: Event) => {
    const value = (e.target as HTMLInputElement).value;
    if (value) {
      setCity(value);
      setCityError("");
      isValidCommon(postCode, prefecture, value, address, tel, mail, pass);
    } else {
      setCity("");
      setCityError("市区町村は入力必須項目です。");
      isValidCommon(postCode, prefecture, "", address, tel, mail, pass);
    }
  };

  const [address, setAddress] = useState("");
  const [addressError, setAddressError] = useState("");
  const onAddress = (e: Event) => {
    const value = (e.target as HTMLInputElement).value;
    if (value) {
      setAddress(value);
      setAddressError("");
      isValidCommon(postCode, prefecture, city, value, tel, mail, pass);
    } else {
      setAddress("");
      setAddressError("丁目・番地は入力必須項目です。");
      isValidCommon(postCode, prefecture, city, "", tel, mail, pass);
    }
  };

  const [tel, setTel] = useState("");
  const [telError, setTelError] = useState("");
  const onTel = (e: Event) => {
    const value = (e.target as HTMLInputElement).value;
    const regex = /^([0-9]{10,11})$/;
    if (regex.test(value)) {
      setTel(value);
      setTelError("");
      isValidCommon(postCode, prefecture, city, address, value, mail, pass);
    } else {
      setTel("");
      setTelError(value ? "正しい形式で入力してください。" : "電話番号は入力必須項目です。");
      isValidCommon(postCode, prefecture, city, address, "", mail, pass);
    }
  };

  const [mail, setMail] = useState("");
  const [mailError, setMailError] = useState("");
  const onMail = (e: Event) => {
    const value = (e.target as HTMLInputElement).value;
    const regex =
      /^[a-zA-Z0-9_+-]+(\.[a-zA-Z0-9_+-]+)*@([a-zA-Z0-9][a-zA-Z0-9-]*[a-zA-Z0-9]*\.)+[a-zA-Z]{2,}$/;
    if (regex.test(value)) {
      setMailError("");
      setMail(value);
      isValidCommon(postCode, prefecture, city, address, tel, value, pass);
    } else {
      setMailError(value ? "正しい形式のメールアドレスを入力してください" : "メールアドレスが入力されていません。");
      setMail("");
      isValidCommon(postCode, prefecture, city, address, tel, "", pass);
    }
  };

  const [pass1, setPass1] = useState("");
  const [pass2, setPass2] = useState("");
  const [passError1, setPassError1] = useState("");
  const [passError2, setPassError2] = useState("");
  const onPass1 = (e: Event) => {
    const value = (e.target as HTMLInputElement).value;
    const regex = /^([a-zA-Z0-9]{6,20})$/;
    if (regex.test(value)) {
      setPass1(value);
      setPassError1("");
      isPass(value, pass2);
    } else {
      setPass1("");
      setPassError1(value ? "6~20文字の半角英数字で入力してください。" : "パスワードは入力必須項目です。");
      isPass(value, pass2);
    }
  };
  const onPass2 = (e: Event) => {
    const value = (e.target as HTMLInputElement).value;
    if (value) {
      setPass2(value);
      setPassError2("");
      isPass(pass1, value);
    } else {
      setPass2("");
      setPassError2("パスワード（確認）は入力必須項目です。");
    }
  };
  const [pass, setPass] = useState(false);
  const isPass = (value1: string, value2: string) => {
    if (value1 === value2) {
      setPassError2("");
      setPass(true);
      isValidCommon(postCode, prefecture, city, address, tel, mail, true);
    } else {
      if (value2 != "") {
        setPassError2("パスワードが一致しません。");
        setPass(false);
        isValidCommon(postCode, prefecture, city, address, tel, mail, false);
      }
    }
  };

  const [validCommon, setValidCommon] = useState(false);
  const isValidCommon = (
    postCode: string,
    prefecture: string,
    city: string,
    address: string,
    tel: string,
    mail: string,
    pass: boolean,
  ) => {
    if (
      postCode != "" && prefecture != "" && city != "" && address != "" &&
      tel != "" && mail != "" && pass
    ) {
      setValidCommon(true);
      isValidAll(validKojin, validHojin, true, checked);
    } else {
      setValidCommon(false);
      isValidAll(validKojin, validHojin, false, checked);
    }
  };

  //プラポリなどのチェックボックスのバリデーション
  const [checked, setChecked] = useState(false);
  const onChecked = (e: Event) => {
    if (!checked) {
      setChecked(true);
      isValidAll(validKojin, validHojin, validCommon, true);
    } else {
      setChecked(false);
      isValidAll(validKojin, validHojin, validCommon, false);
    }
  };

  const [disabled, setDisabled] = useState(true);
  const isValidAll = (
    kojin: boolean,
    hojin: boolean,
    common: boolean,
    checked: boolean,
  ) => {
    if ((kojin || hojin) && common && checked) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  };

  return (
    <>
      <BrownHeader />
      <main>
        <Title title="新規会員登録" />
        <StepBar step={1} />
        <div class="mt-8 border-b text-2.5">
          <p class="ml-4 mb-2.5 text-red">
            入力目安時間（2分）
          </p>
          <BgLeading title="会員種別" mandatory={true} />
          <RadioButton
            buttonList={memberType}
            radioName="classification"
            klass="mt-4 mb-6"
          />
          {classification
            ? (
              <Kojin
                nameError={nameError}
                nameKanaError={nameKanaError}
                onName1={onName1}
                onName2={onName2}
                onNameKana1={onNameKana1}
                onNameKana2={onNameKana2}
                onGender={onGender}
              />
            )
            : (
              <Hojin
                compNameError={compNameError}
                compNameKanaError={compNameKanaError}
                nameError_h={nameError_h}
                nameKanaError_h={nameKanaError_h}
                onCompName={onCompName}
                onCompNameKana={onCompNameKana}
                onName1_h={onName1_h}
                onName2_h={onName2_h}
                onNameKana1_h={onNameKana1_h}
                onNameKana2_h={onNameKana2_h}
              />
            )}
          <Common
            postCodeError={postCodeError}
            prefectureError={prefectureError}
            cityError={cityError}
            addressError={addressError}
            telError={telError}
            mailError={mailError}
            passError1={passError1}
            passError2={passError2}
            onPostCode={onPostCode}
            onPrefecture={onPrefecture}
            onCity={onCity}
            onAddress={onAddress}
            onTel={onTel}
            onMail={onMail}
            onPass1={onPass1}
            onPass2={onPass2}
          />
        </div>
        <Permission onClick={onChecked} />
        {disabled
          ? (
            <p class="text-center mt-12 mb-2 text-2.5 text-lightgray">
              必須項目の一部が未入力もしくは未チェックです
            </p>
          )
          : null}
        <Button
          name="確認画面へ"
          link="/registration/confirmation"
          klass={`${disabled ? "mb-12" : "my-12"}`}
          h10_w72={true}
          disabled={disabled}
          color={disabled ? "disabled" : "brown"}
        />
      </main>
    </>
  );
}

interface Kojin {
  nameError: string;
  nameKanaError: string;
  onName1: (e: Event) => void;
  onName2: (e: Event) => void;
  onNameKana1: (e: Event) => void;
  onNameKana2: (e: Event) => void;
  onGender: (e: Event) => void;
}
export function Kojin(props: Kojin) {
  const nameError = props.nameError;
  const nameKanaError = props.nameKanaError;
  return (
    <>
      <BgLeading title="氏名" mandatory={true} />
      <Input
        placeholder="性"
        onInput={props.onName1}
        klass={`w-32 ml-8 mt-4 mr-2 ${nameError ? "bg-red" : "mb-6"}`}
      />
      <Input
        placeholder="名"
        onInput={props.onName2}
        klass={`w-32 mt-4 ${nameError ? "bg-red" : "mb-6"}`}
      />
      {nameError
        ? <div class="ml-8 mb-6 mt-1 text-red">{nameError}</div>
        : null}

      <BgLeading title="氏名（カナ）" mandatory={true} />
      <Input
        placeholder="セイ"
        onInput={props.onNameKana1}
        klass={`w-32 ml-8 mt-4 mr-2 ${nameKanaError ? "bg-red" : "mb-6"}`}
      />
      <Input
        placeholder="メイ"
        onInput={props.onNameKana2}
        klass={`w-32 mt-4 ${nameKanaError ? "bg-red" : "mb-6"}`}
      />
      {nameKanaError
        ? <div class="ml-8 mb-6 mt-1 text-red">{nameKanaError}</div>
        : null}

      <BgLeading title="性別" mandatory={true} />
      <RadioButton
        label={["男性", "女性", "無回答"]}
        radioName="gender"
        klass="mt-4 mb-6"
        onInput={props.onGender}
      />

      <BgLeading title="ご住所" mandatory={true} />
    </>
  );
}

interface Hojin {
  compNameError: string;
  compNameKanaError: string;
  nameError_h: string;
  nameKanaError_h: string;
  onCompName: (e: Event) => void;
  onCompNameKana: (e: Event) => void;
  onName1_h: (e: Event) => void;
  onName2_h: (e: Event) => void;
  onNameKana1_h: (e: Event) => void;
  onNameKana2_h: (e: Event) => void;
}
export function Hojin(props: Hojin) {
  const compNameError = props.compNameError;
  const compNameKanaError = props.compNameKanaError;
  const nameError_h = props.nameError_h;
  const nameKanaError_h = props.nameKanaError_h;
  return (
    <>
      <BgLeading title="会社名" mandatory={true} />
      <Input
        placeholder="会社名"
        onInput={props.onCompName}
        klass={`w-72 ml-8 mt-4 ${compNameError ? "bg-red" : "mb-6"}`}
      />
      {compNameError
        ? <div class="ml-8 mb-6 mt-1 text-red">{compNameError}</div>
        : null}

      <BgLeading title="会社名（カナ）" mandatory={true} />
      <Input
        placeholder="カイシャメイ"
        onInput={props.onCompNameKana}
        klass={`w-72 ml-8 mt-4 ${compNameKanaError ? "bg-red" : "mb-6"}`}
      />
      {compNameKanaError
        ? <div class="ml-8 mb-6 mt-1 text-red">{compNameKanaError}</div>
        : null}

      <BgLeading title="部署名" />
      <Input
        placeholder="部署名"
        klass="w-72 ml-8 mt-4 mb-6"
      />

      <BgLeading title="部署名（カナ）" />
      <Input
        placeholder="ブショメイ"
        klass="w-72 ml-8 mt-4 mb-6"
      />

      <BgLeading title="役職名" />
      <Input placeholder="役職名" klass="w-72 ml-8 mt-4 mb-6" />

      <BgLeading title="担当者名" mandatory={true} />
      <Input
        placeholder="性"
        onInput={props.onName1_h}
        klass={`w-32 ml-8 mt-4 mr-2 ${nameError_h ? "bg-red" : "mb-6"}`}
      />
      <Input
        placeholder="名"
        onInput={props.onName2_h}
        klass={`w-32 mt-4 ${nameError_h ? "bg-red" : "mb-6"}`}
      />
      {nameError_h
        ? <div class="ml-8 mb-6 mt-1 text-red">{nameError_h}</div>
        : null}

      <BgLeading title="担当者名（カナ）" mandatory={true} />
      <Input
        placeholder="セイ"
        onInput={props.onNameKana1_h}
        klass={`w-32 ml-8 mt-4 mr-2 ${nameKanaError_h ? "bg-red" : "mb-6"}`}
      />
      <Input
        placeholder="メイ"
        onInput={props.onNameKana2_h}
        klass={`w-32 mt-4 ${nameKanaError_h ? "bg-red" : "mb-6"}`}
      />
      {nameKanaError_h
        ? <div class="ml-8 mb-6 mt-1 text-red">{nameKanaError_h}</div>
        : null}

      <BgLeading title="会社のご住所" mandatory={true} />
    </>
  );
}

interface Common {
  postCodeError: string;
  addressError: string;
  prefectureError: string;
  cityError: string;
  telError: string;
  mailError: string;
  passError1: string;
  passError2: string;
  onPostCode: (e: Event) => void;
  onPrefecture: (e: Event) => void;
  onCity: (e: Event) => void;
  onAddress: (e: Event) => void;
  onTel: (e: Event) => void;
  onMail: (e: Event) => void;
  onPass1: (e: Event) => void;
  onPass2: (e: Event) => void;
}
export function Common(props: Common) {
  const postCodeError = props.postCodeError;
  const prefectureError = props.prefectureError;
  const cityError = props.cityError;
  const addressError = props.addressError;
  const telError = props.telError;
  const mailError = props.mailError;
  const passError1 = props.passError1;
  const passError2 = props.passError2;
  return (
    <>
      <SubLeading
        title="郵便番号"
        mandatory={true}
        msg="都道府県・市区町村は、郵便番号から住所検索していただくと、自動で入力されます。"
      />
      <div class="flex">
        <Input
          placeholder="0000000"
          onInput={props.onPostCode}
          klass={`w-24 ml-8 mr-2 ${postCodeError ? "bg-red" : ""}`}
        />
        <Button
          color="brown"
          no_mx_auto={true}
          klass="h-10 w-24"
          name="住所検索"
        />
      </div>
      {postCodeError
        ? <div class="ml-8 mt-1 text-red">{postCodeError}</div>
        : null}
      <SubLeading title="都道府県" mandatory={true} />
      <Input
        placeholder="都道府県"
        onInput={props.onPrefecture}
        klass={`w-72 ml-8 ${prefectureError ? "bg-red" : ""}`}
      />
      {/* todo:後程プルダウンにする */}
      {prefectureError
        ? <div class="ml-8 mt-1 text-red">{prefectureError}</div>
        : null}

      <SubLeading title="市区町村" mandatory={true} />
      <Input
        placeholder="例 : 品川区平塚"
        onInput={props.onCity}
        klass={`w-72 ml-8 ${cityError ? "bg-red" : ""}`}
      />
      {cityError ? <div class="ml-8 mt-1 text-red">{cityError}</div> : null}

      <SubLeading title="丁目・番地" mandatory={true} msg="数字は半角で記入してください" />
      <Input
        placeholder="例 : 2-3-2"
        onInput={props.onAddress}
        klass={`w-72 ml-8 ${addressError ? "bg-red" : ""}`}
      />
      {addressError
        ? <div class="ml-8 mt-1 text-red">{addressError}</div>
        : null}

      <SubLeading title="建物名・部屋番号" msg="全て半角で記入してください。" />
      <Input placeholder="飲食フランチャイズ101" klass="w-72 ml-8 mb-6" />

      <BgLeading title="電話番号" mandatory={true} />
      <Input
        placeholder="電話番号（ハイフン不要）"
        onInput={props.onTel}
        klass={`w-72 ml-8 mt-4 ${telError ? "bg-red" : "mb-6"}`}
      />
      {telError == ""
        ? null
        : <div class="ml-8 mt-1 mb-6 text-red">{telError}</div>}

      <BgLeading title="メールアドレス" mandatory={true} />
      <Input
        placeholder="メールアドレス"
        onInput={props.onMail}
        klass={`w-72 ml-8 mt-4 ${mailError ? "bg-red" : "mb-6"}`}
      />
      {mailError
        ? <div class="ml-8 mt-1 mb-6 text-red">{mailError}</div>
        : null}

      <BgLeading title="パスワード" mandatory={true} />
      <HiddenInput
        placeholder="半角英数字6~20文字"
        onInput={props.onPass1}
        klass="w-72 ml-8 mt-4"
        krass={passError1 ? "bg-red" : ""}
      />
      {passError1
        ? <div class="ml-8 mt-1 mb-4 text-red">{passError1}</div>
        : null}
      <HiddenInput
        placeholder="確認のため再度ご入力ください"
        onInput={props.onPass2}
        klass={`w-72 ml-8 mt-2 ${passError2 ? "" : "mb-6"}`}
        krass={passError2 ? "bg-red" : ""}
      />
      {passError2
        ? <div class="ml-8 mt-1 mb-4 text-red">{passError2}</div>
        : null}

      <BgLeading title="メールマガジン" />
      <p class="mt-4 mx-8">メールマガジンにて、新着ブランド情報、コラムなどのお得な情報をお送りします。</p>
      <div class="w-72 h-10 ml-8 mt-2 mb-6 rounded flex border items-center text-2.5">
        <Checkbox msg="メールマガジンを受け取る" klass="mx-2" />
      </div>
    </>
  );
}
