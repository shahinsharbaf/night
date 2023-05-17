import Image from "next/image";
import img2 from "./r.jpg";

export default function Home() {
  return (
    <Image src={img2} alt="Vercel Logo" width={500} height={240} priority />
  );
}
