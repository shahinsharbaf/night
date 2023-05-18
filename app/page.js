import Image from "next/image";
import img2 from "/public/image/bb.jpg";
import img3 from "/public/image/b2.jpg";

export default function Home() {
  return (
    <>
      <div className="flex">
        <Image src={img2} alt="Vercel Logo" width={200} height={140} priority />
        <Image src={img3} alt="Vercel Logo" width={200} height={140} priority />
        {/* <video autoPlay loop style={{ width: "500px", height: "500px" }}>
          <source src="/blue.mp4" />
        </video> */}
      </div>
      <iframe
        src="https://www.youtube.com/embed/E7wJTI-1dvQ"
        frameborder="0"
        allow="autoplay; encrypted-media"
        allowfullscreen
        title="video"
      />
    </>
  );
}
