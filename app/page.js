import Image from "next/image";
import img2 from "/public/image/r.jpg";

export default function Home() {
  return (
    <Image src={img2} alt="Vercel Logo" width={500} height={340} priority />
  );
}
