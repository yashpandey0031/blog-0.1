import Image from "next/image";
import { Pixelify_Sans } from "next/font/google";

const pixelify = Pixelify_Sans({
  subsets: ["latin"],
  weight: ["400", "700"], // you can add more weights if needed
  variable: "--font-pixelify", // optional for Tailwind use
});

export default function Home() {
  return (
    <div
      className={`${pixelify.className} bg-custom-hero bg-cover bg-center min-h-screen text-white p-30 pt-6`}
    >
      <div className="bg-amber-200 shadow-xl">
        <header className="flex justify-center gap-8 p-5 text-[30px] ">
          <button className=" hover:bg-fuchsia-500 text-shadow-lg rounded-full">
            Home
          </button>
          <button className=" hover:bg-fuchsia-500 text-shadow-lg rounded-full">
            About Me
          </button>
          <button className=" hover:bg-fuchsia-500 text-shadow-lg rounded-full">
            Blogs
          </button>
        </header>
      </div>
      <main className="backdrop-blur-none bg-white/30 h-800  shadow-lg my-5 ">
        <div className="p-2 flex">
          <Image
            src="https://i.pinimg.com/originals/94/6e/06/946e065ebf6c68dbc30f7a162a04351d.gif"
            width={800}
            height={400}
            alt="welcome"
            className=" shadow-lg border-4 "
          />
          <div className="p-8 text-[30px] w-120 ">
            <div className="text-[30px]">
              ----------------✨----------------
            </div>
            Welcome to my small corner on internet :)
            <li className="text-[20px] ">
              here i post blogs and things i love in general ,
            </li>
            <li className="text-[20px]">
              I love Computer science and everything about it I also love taking
              pictures , music and doing art
            </li>
            <li className="text-[20px]">
              you can find the blogs and pictures in their respective categories
            </li>
            <li className="text-[30px]">Hope you enjoy your stay here</li>
            <div className="text-[30px]">
              ----------------✨----------------
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
