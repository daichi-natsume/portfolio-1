interface info {
  date?: string;
  content?: string;
}

const infoList = [{
  date: "2022/09/12",
  content: "お知らせだよ。お知らせだよ。お知らせだよ。お知らせだよ。お知らせだよ。お知らせだよ。",
}, {
  date: "2022/09/12",
  content: "お知らせだよ。お知らせだよ。お知らせだよ。お知らせだよ。お知らせだよ。お知らせだよ。",
}, {
  date: "2022/09/12",
  content: "お知らせだよ。お知らせだよ。お知らせだよ。お知らせだよ。お知らせだよ。お知らせだよ。",
}, {
  date: "2022/09/12",
  content: "お知らせだよ。お知らせだよ。お知らせだよ。お知らせだよ。お知らせだよ。お知らせだよ。",
}, {
  date: "2022/09/12",
  content: "お知らせだよ。お知らせだよ。お知らせだよ。お知らせだよ。お知らせだよ。お知らせだよ。",
}];

export interface InfoData {
  infoList: info[];
}

export function getInfoData() {
  return {
    infoList: infoList,
  };
}
