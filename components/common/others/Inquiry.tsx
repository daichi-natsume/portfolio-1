//お問い合わせ欄を出すときに使用するコンポーネント

import { Button } from "../../common/Button.tsx";

export function Inquiry() {
  return (
    <div class="my-12 mx-4 border rounded text-center border-brown">
      <p class="my-8">お電話でのお問い合わせ</p>
      <p class="text-2xl">0120-000-000</p>
      <p class="text-xs mt-2">9時〜18時 / 年中無休</p>
      <Button
        brown={true}
        h10_w72={true}
        klass="mt-8 mb-6"
        name="よくあるご質問・お問い合わせ"
        arrow="right"
      />
    </div>
  );
}
