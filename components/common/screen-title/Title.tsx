//画面のタイトルを挿入するときに使用するコンポーネント

interface Props {
  title: string;
}

export function Title(props: Props) {
  return (
    <div class="mx-2 border-b">
      <p class="mt-4 ml-2 mb-1">
        {props.title}
      </p>
    </div>
  );
}
