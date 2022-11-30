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
    label: "個人",
    checked: classification,
    onClick: () => setClassification(true),
  }, {
    label: "法人",
    onClick: () => setClassification(false),
  }];

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
          {classification ? <Kojin /> : <Hojin />}
          <Common />
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

export function Kojin() {
  const [name, setName] = useState({
    value: "",
    error: "",
    dirty: false,
  });
  const onName = (e: Event) => {
    const value = (e.target as HTMLInputElement).value;
    setName({
      value,
      error: value ? "" : "氏名は入力必須項目です。",
      dirty: true,
    });
  };

  const [nameKana, setNameKana] = useState({
    value: "",
    error: "",
    dirty: false,
  });
  const onNameKana = (e: Event) => {
    const value = (e.target as HTMLInputElement).value;
    setNameKana({
      value,
      error: value ? "" : "氏名(カナ)は入力必須項目です。",
      dirty: true,
    });
  };

  return (
    <>
      <BgLeading title="氏名" mandatory={true} />
      <WInput
        inputList={["性", "名"]}
        klass={`mt-4 ${name.error ? "bg-red" : "mb-6"}`}
        onInput={onName}
      />
      {name.error
        ? <div class="ml-8 mb-6 mt-1 text-red">{name.error}</div>
        : null}

      <BgLeading title="氏名（カナ）" mandatory={true} />
      <WInput
        inputList={["セイ", "メイ"]}
        klass={`mt-4 ${nameKana.error ? "bg-red" : "mb-6"}`}
        onInput={onNameKana}
      />
      {nameKana.error
        ? <div class="ml-8 mb-6 mt-1 text-red">{nameKana.error}</div>
        : null}

      <BgLeading title="性別" mandatory={true} />
      <RadioButton
        label={["男性", "女性", "無回答"]}
        radioName="gender"
        klass="mt-4 mb-6"
      />

      <BgLeading title="ご住所" mandatory={true} />
    </>
  );
}

export function Hojin() {
  const [compName, setCompName] = useState({
    value: "",
    error: "",
    dirty: false,
  });
  const onCompName = (e: Event) => {
    const value = (e.target as HTMLInputElement).value;
    setCompName({
      value,
      error: value ? "" : "会社名は入力必須項目です。",
      dirty: true,
    });
  };

  const [compNameKana, setCompNameKana] = useState({
    value: "",
    error: "",
    dirty: false,
  });
  const onCompNameKana = (e: Event) => {
    const value = (e.target as HTMLInputElement).value;
    setCompNameKana({
      value,
      error: value ? "" : "会社名(カナ)は入力必須項目です。",
      dirty: true,
    });
  };

  const [name, setName] = useState({
    value: "",
    error: "",
    dirty: false,
  });
  const onName = (e: Event) => {
    const value = (e.target as HTMLInputElement).value;
    setName({
      value,
      error: value ? "" : "担当者名は入力必須項目です。",
      dirty: true,
    });
  };

  const [nameKana, setNameKana] = useState({
    value: "",
    error: "",
    dirty: false,
  });
  const onNameKana = (e: Event) => {
    const value = (e.target as HTMLInputElement).value;
    setNameKana({
      value,
      error: value ? "" : "担当者名(カナ)は入力必須項目です。",
      dirty: true,
    });
  };
  return (
    <>
      <BgLeading title="会社名" mandatory={true} />
      <Input
        placeholder="会社名"
        onInput={onCompName}
        klass={`w-72 ml-8 mt-4 ${compName.error ? "bg-red" : "mb-6"}`}
      />
      {compName.error
        ? <div class="ml-8 mb-6 mt-1 text-red">{compName.error}</div>
        : null}

      <BgLeading title="会社名（カナ）" mandatory={true} />
      <Input
        placeholder="カイシャメイ"
        onInput={onCompNameKana}
        klass={`w-72 ml-8 mt-4 ${compNameKana.error ? "bg-red" : "mb-6"}`}
      />
      {compNameKana.error
        ? <div class="ml-8 mb-6 mt-1 text-red">{compNameKana.error}</div>
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
      <WInput
        inputList={["性", "名"]}
        onInput={onName}
        klass={`mt-4 ${name.error ? "bg-red" : "mb-6"}`}
      />
      {name.error
        ? <div class="ml-8 mb-6 mt-1 text-red">{name.error}</div>
        : null}

      <BgLeading title="担当者名（カナ）" mandatory={true} />
      <WInput
        inputList={["セイ", "メイ"]}
        onInput={onNameKana}
        klass={`mt-4 ${nameKana.error ? "bg-red" : "mb-6"}`}
      />
      {nameKana.error
        ? <div class="ml-8 mb-6 mt-1 text-red">{nameKana.error}</div>
        : null}

      <BgLeading title="会社のご住所" mandatory={true} />
    </>
  );
}

export function Common() {
  const [postCode, setPostCode] = useState({
    value: "",
    error: "",
    dirty: false,
  });
  const onPostCode = (e: Event) => {
    const value = (e.target as HTMLInputElement).value;
    const regex = /^([0-9]{7})$/;
    if (regex.test(value)) {
      setPostCode({
        value,
        error: "",
        dirty: true,
      });
    } else {
      setPostCode({
        value,
        error: value ? "7桁の半角数字で入力してください。" : "郵便番号は入力必須項目です。",
        dirty: true,
      });
    }
  };

  const [address, setAddress] = useState({
    value: "",
    error: "",
    dirty: false,
  });
  const onAddress = (e: Event) => {
    const value = (e.target as HTMLInputElement).value;
    setAddress({
      value,
      error: value ? "" : "丁目・番地は入力必須項目です。",
      dirty: true,
    });
  };

  const [mail, setMail] = useState({
    value: "",
    error: "",
  });
  const onMail = (e: Event) => {
    const value = (e.target as HTMLInputElement).value;
    const regex =
      /^[a-zA-Z0-9_+-]+(\.[a-zA-Z0-9_+-]+)*@([a-zA-Z0-9][a-zA-Z0-9-]*[a-zA-Z0-9]*\.)+[a-zA-Z]{2,}$/;
    if (regex.test(value)) {
      setMail({
        value,
        error: "",
      });
    } else {
      setMail({
        value,
        error: value ? "正しい形式のメールアドレスを入力してください" : "メールアドレスが入力されていません。",
      });
    }
  };

  const [pass1, setPass1] = useState({
    value: "",
    error: "",
    dirty: false,
  });
  const [pass2, setPass2] = useState({
    value: "",
    error: "",
    dirty: false,
  });
  const onPass1 = (e: Event) => {
    const value = (e.target as HTMLInputElement).value;
    const regex = /^([a-zA-Z0-9]{6,20})$/;
    if (regex.test(value)) {
      setPass1({
        value,
        error: "",
        dirty: true,
      });
    } else {
      setPass1({
        value,
        error: value ? "6~20文字の半角英数字で入力してください。" : "パスワードは入力必須項目です。",
        dirty: true,
      });
    }
    _setPass2(value, pass2.value, pass2.dirty);
  };
  const onPass2 = (e: Event) => {
    _setPass2(pass1.value, (e.target as HTMLInputElement).value, true);
  };
  const _setPass2 = (value1: string, value2: string, dirty: boolean) => {
    if (dirty) {
      setPass2({
        value: value2,
        error: value1 === value2 ? "" : "パスワードが一致しません。",
        dirty,
      });
    }
  };

  const [tel1, setTel1] = useState("");
  const [tel2, setTel2] = useState("");
  const [tel3, setTel3] = useState("");
  const [telErrorMsg, setTelErrorMsg] = useState("");
  const onTel1 = (e: Event) => {
    const value = (e.target as HTMLInputElement).value;
    const regex = /^([0-9]{2,3})$/;
    if (regex.test(value)) {
      setTel1(value);
      setTelErrorMsg("");
      setTel(value, tel2, tel3, true);
    } else {
      setTelErrorMsg(value ? "正しい形式で入力してください。" : "電話番号は入力必須項目です。");
    }
  };
  const onTel2 = (e: Event) => {
    const value = (e.target as HTMLInputElement).value;
    const regex = /^([0-9]{4})$/;
    if (regex.test(value)) {
      setTel2(value);
      setTelErrorMsg("");
      setTel(tel1, value, tel3, true);
    } else {
      setTelErrorMsg(value ? "正しい形式で入力してください。" : "電話番号は入力必須項目です。");
    }
  };
  const onTel3 = (e: Event) => {
    const value = (e.target as HTMLInputElement).value;
    const regex = /^([0-9]{4})$/;
    if (regex.test(value)) {
      setTel3(value);
      setTelErrorMsg("");
      setTel(tel1, tel2, value, true);
    } else {
      setTelErrorMsg(value ? "正しい形式で入力してください。" : "電話番号は入力必須項目です。");
    }
  };
  const setTel = (
    value1: string,
    value2: string,
    value3: string,
    dirty: boolean,
  ) => {
    if (dirty && !(value1 && value2 && value3)) {
      setTelErrorMsg("電話番号は入力必須項目です。");
    }
  };

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
          onInput={onPostCode}
          klass={`w-24 ml-8 mr-2 ${postCode.error ? "bg-red" : ""}`}
        />
        <Button
          color="brown"
          no_mx_auto={true}
          klass="h-10 w-24"
          name="住所検索"
        />
      </div>
      {postCode.error
        ? <div class="ml-8 mt-1 text-red">{postCode.error}</div>
        : null}
      <SubLeading title="都道府県" mandatory={true} />
      <Input placeholder="都道府県" klass="w-72 ml-8" />
      {/* todo:後程プルダウンにする */}

      <SubLeading title="市区町村" mandatory={true} />
      <Input placeholder="例 : 品川区平塚" klass="w-72 ml-8" />

      <SubLeading title="丁目・番地" mandatory={true} msg="数字は半角で記入してください" />
      <Input
        placeholder="例 : 2-3-2"
        onInput={onAddress}
        klass={`w-72 ml-8 ${address.error ? "bg-red" : ""}`}
      />
      {address.error
        ? <div class="ml-8 mt-1 text-red">{address.error}</div>
        : null}

      <SubLeading title="建物名・部屋番号" msg="全て半角で記入してください。" />
      <Input placeholder="飲食フランチャイズ101" klass="w-72 ml-8 mb-6" />

      <BgLeading title="電話番号" mandatory={true} />
      <div class="flex">
        <Input
          placeholder="000"
          onInput={onTel1}
          klass={`w-16 ml-8 mt-4 ${telErrorMsg == "" ? "mb-6" : "bg-red"}`}
        />
        <div class="h-10 mx-2 mt-4 flex items-center">
          <p>ー</p>
        </div>
        <Input
          placeholder="000"
          onInput={onTel2}
          klass={`w-16 mt-4 ${telErrorMsg == "" ? "mb-6" : "bg-red"}`}
        />
        <div class="h-10 mx-2 mt-4 flex items-center">
          <p>ー</p>
        </div>
        <Input
          placeholder="000"
          onInput={onTel3}
          klass={`w-16 mt-4 ${telErrorMsg == "" ? "mb-6" : "bg-red"}`}
        />
      </div>
      {telErrorMsg == ""
        ? null
        : <div class="ml-8 mt-1 mb-6 text-red">{telErrorMsg}</div>}

      <BgLeading title="メールアドレス" mandatory={true} />
      <Input
        placeholder="メールアドレス"
        onInput={onMail}
        klass={`w-72 ml-8 mt-4 ${mail.error ? "bg-red" : "mb-6"}`}
      />
      {mail.error
        ? <div class="ml-8 mt-1 mb-6 text-red">{mail.error}</div>
        : null}

      <BgLeading title="パスワード" mandatory={true} />
      <HiddenInput
        placeholder="半角英数字6~20文字"
        onInput={onPass1}
        klass="w-72 ml-8 mt-4"
        krass={pass1.error ? "bg-red" : ""}
      />
      {pass1.error
        ? <div class="ml-8 mt-1 mb-4 text-red">{pass1.error}</div>
        : null}
      <HiddenInput
        placeholder="確認のため再度ご入力ください"
        onInput={onPass2}
        klass={`w-72 ml-8 mt-2 ${pass2.error ? "" : "mb-6"}`}
        krass={pass2.error ? "bg-red" : ""}
      />
      {pass2.error
        ? <div class="ml-8 mt-1 mb-4 text-red">{pass2.error}</div>
        : null}

      <BgLeading title="メールマガジン" />
      <p class="mt-4 mx-8">メールマガジンにて、新着ブランド情報、コラムなどのお得な情報をお送りします。</p>
      <div class="w-72 h-10 ml-8 mt-2 mb-6 rounded flex border items-center text-2.5">
        <Checkbox msg="メールマガジンを受け取る" klass="mx-2" />
      </div>
    </>
  );
}
