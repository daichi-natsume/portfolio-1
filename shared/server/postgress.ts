import { Pool, PoolClient } from "https://deno.land/x/postgres@v0.17.0/mod.ts";

const config = {
  database: "postgres",
  hostname: "db.zhhsysefdogxhsnpchyp.supabase.co",
  password: "Daichi1203@",
  port: 6543, //supabaseが用意しているコネクションプール
  user: "postgres",
  tls: {
    caCertificates: [
      await Deno.readTextFile(
        new URL("./prod-ca-2021.crt", import.meta.url),
      ),
    ],
    enabled: false,
  },
};

const pool = new Pool(config, 10, true);
console.log("postgres connected!");

export function connect() {
  console.log("connected", pool.available);
  return pool.connect();
}

export function release(client: PoolClient) {
  client.release();
  console.log("released", pool.available);
}

// await pool.end();

//
interface Brand {
  id: bigint;
  name: string;
  price: string;
  area: string;
  items: string;
  profile: string;
}

export async function getBrand(client: PoolClient) {
  const result = await client
    .queryObject<
    Brand
  >`select id, name, price, area, items, profile from brand`; //selectの時に大文字のカラムがあるときは""で囲う必要がある
  console.info(result.rows);
  const rows = result.rows.map((row) => ({
    ...row,
    id: new Number(+row.id.toLocaleString()),
  }));
  return rows;
}
