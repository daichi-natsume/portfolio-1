import { PageProps } from "$fresh/server.ts";

export default function routes(props: PageProps) {
  return <div>Hello {props.params.status}</div>;
}

//１だったらどうする２だったらどうするを書く
