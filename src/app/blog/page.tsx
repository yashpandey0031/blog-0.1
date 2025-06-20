import Image from "next/image";
import { Pixelify_Sans } from "next/font/google";
import Link from "next/link";

const pixelify = Pixelify_Sans({
  subsets: ["latin"],
  weight: ["400", "700"], // you can add more weights if needed
  variable: "--font-pixelify", // optional for Tailwind use
});

export default function Blog() {
  return (
    <div
      className={`${pixelify.className} bg-custom-blog bg-cover bg-center min-h-screen text-white p-30 pt-6`}
    >
      <div className="bg-white/30 shadow-xl">
        <header className="flex justify-center gap-8 p-5 text-[30px]">
          <Link
            href="/"
            className="hover:bg-red-400 text-shadow-lg rounded-full px-4 py-2"
          >
            Home
          </Link>
          {/* <Link
            href="/about_me"
            className="hover:bg-red-400 text-shadow-lg rounded-full px-4 py-2"
          >
            About Me
          </Link> */}
          <Link
            href="/blog"
            className="hover:bg-red-400 text-shadow-lg rounded-full px-4 py-2"
          >
            Blogs
          </Link>
        </header>
      </div>
      <main className="backdrop-blur-none bg-white/30 h-400  shadow-lg my-5 ">
        <div className="p-2 flex"></div>
        {/* blog preview slide */}

        <div className="p-2 text-[30px] w-316 bg-black/30 border-4 border-white/30 shadow-lg ml-2 ">
          <img
            src="https://i.pinimg.com/736x/b8/84/b9/b884b92d316e83f19c6499389c9b3675.jpg"
            width={2000}
            alt="blog 1 image"
            className=" shadow-lg"
          />
          <div className="p-4">
            <div className="text-[70px] ">What is Lorem Ipsum?</div>
            <p className="text-[35px] ">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsumtypesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsumtypesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing
              <p className="text-purple-600 ...">21-06-2025 / BlOG 0.0</p>
            </p>
          </div>
        </div>
        {/* blog preview slide end*/}
      </main>
    </div>
  );
}
