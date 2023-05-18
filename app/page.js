import Image from "next/image";
import img2 from "/public/image/bb.jpg";
import img3 from "/public/image/b2.jpg";

export default function Home() {
  return (
    <>
      <div className="flex">
        <Image src={img2} alt="Vercel Logo" width={500} height={340} priority />
        <Image src={img3} alt="Vercel Logo" width={500} height={340} priority />
      </div>
    </>
  );
}
