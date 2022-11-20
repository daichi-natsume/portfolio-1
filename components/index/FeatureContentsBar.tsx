//todo:リファクタリング未着手

import { tw } from "twind";
import { ScrollFeature2 } from "../../components/common/Feature.tsx";
import { useState } from "preact/hooks";

export function FeatureContents() {
  const [tabNumber, setTabNumber] = useState(0);
  const tabs = ["おすすめ", "新着", "事例紹介", "読みもの"];
  const getClass = (i: number) =>
    "list-none w-1/4 text-center " +
    (tabNumber === i
      ? "border-b border-[#FF6B00]"
      : "hover:border-b hover:border-blue-500");
  const contents = [
    <>
      <ScrollFeature2 bgColor="#C18462" />
      <ScrollFeature2 bgColor="#C18462" />
      <ScrollFeature2 bgColor="#C18462" />
    </>,

    <>
      <ScrollFeature2 bgColor="red" />
      <ScrollFeature2 bgColor="red" />
      <ScrollFeature2 bgColor="red" />
    </>,

    <>
      <ScrollFeature2 bgColor="black" />
      <ScrollFeature2 bgColor="black" />
      <ScrollFeature2 bgColor="black" />
    </>,

    <>
      <ScrollFeature2 bgColor="blue" />
      <ScrollFeature2 bgColor="blue" />
      <ScrollFeature2 bgColor="blue" />
    </>,
  ];
  return (
    <>
      <div>
        <ul class="border-b m-4 flex flex-row text-xs">
          {tabs.map((tab, i) => (
            <li
              class={getClass(i)}
              onClick={() => {
                setTabNumber(i);
              }}
            >
              <label class="cursor-pointer">
                {tab}
              </label>
            </li>
          ))}
        </ul>
      </div>
      <div
        class={`flex flex-row w-full overflow-x-auto pr-4  ${tw`(hidden-scrollbar)`}`}
      >
        {contents[tabNumber]}
      </div>
    </>
  );
}
