import { sql } from "@vercel/postgres";

const likes = 100;
const { rows } = await sql`SELECT * FROM posts WHERE likes > ${likes};`;
console.log(rows);
export default async function Home() {
  return (
    <>
      <div className="flex">
        <h1>salam</h1>
        {/* <h1>Hello {userWithEmail[0].firstname}</h1> */}
      </div>
    </>
  );
}
