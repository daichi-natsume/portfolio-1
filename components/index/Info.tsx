//お知らせを出す際に使うコンポーネント

interface Props {
  infoList: { date?: string; content?: string }[];
}

export function Info(props: Props) {
  return (
    <div>
      {props.infoList.map((info) => (
        <div class="first:border-t border-b mx-4 py-2 text-2.5">
          <p class="mb-1">{info.date}</p>
          <p>{info.content}</p>
        </div>
      ))}
    </div>
  );
}
