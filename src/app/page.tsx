import Image from "next/image";
import { Pixelify_Sans } from "next/font/google";
import Link from "next/link";

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
        <div className="p-2 flex">
          <Image
            src="https://i.pinimg.com/originals/94/6e/06/946e065ebf6c68dbc30f7a162a04351d.gif"
            width={800}
            height={400}
            alt="welcome"
            className=" shadow-lg border-4 "
          />
          <div className="p-8 text-[30px] w-120 bg-black/30 border-4 border-white/30 shadow-lg ">
            <div className="text-[30px]">
              ----------------✨----------------
            </div>
            Welcome to my small corner on internet :)
            <li className="text-[20px] ">
              here i post blogs and things i love in general ,
            </li>
            <li className="text-[20px]">
              I love Computer science and everything about it ,I also love
              taking pictures , music and doing art
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
        {/* blog preview slide */}

        <div className="p-2 text-[30px] w-316 bg-black/30 border-4 border-white/30 shadow-lg ml-2 flex">
          <img
            src="https://i.pinimg.com/736x/92/16/f4/9216f4c3cd6e806357f6bcf79e7c7850.jpg"
            width={200}
            height={40}
            alt="blog 1 image"
            className=" shadow-lg"
          />
          <div className="p-4">
            <div className="text-[30px] ">What is Lorem Ipsum?</div>
            <p className="text-[15px] ">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum........
              <Link href="/blog">
                <p className="text-purple-600 ...">Read More....</p>
              </Link>
            </p>
          </div>
        </div>
        {/* blog preview slide end*/}
        {/* blog preview slide */}

        <div className="p-2 text-[30px] w-316 bg-black/30 border-4 border-white/30 shadow-lg ml-2 flex">
          <img
            src="https://i.pinimg.com/736x/73/20/25/73202564284d79a5f53357e2fcbae7ee.jpg"
            width={200}
            height={40}
            alt="blog 2 image"
            className=" shadow-lg"
          />
          <div className="p-4">
            <div className="text-[30px]">Why the Indie Web Still Matters</div>
            <p className="text-[15px]">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum........
              <Link href="/blog">
                <p className="text-purple-600 ...">Read More....</p>
              </Link>
            </p>
          </div>
        </div>

        {/* blog preview slide end */}
        {/* blog preview slide */}

        <div className="p-2 text-[30px] w-316 bg-black/30 border-4 border-white/30 shadow-lg ml-2 flex">
          <img
            src="https://i.pinimg.com/736x/46/2f/97/462f97a1c7b798a779345a7274594fcc.jpg"
            width={200}
            height={40}
            alt="blog 3 image"
            className=" shadow-lg"
          />
          <div className="p-4">
            <div className="text-[30px]">The Magic of Building in Public</div>
            <p className="text-[15px]">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum........
              <Link href="/blog">
                <p className="text-purple-600 ...">Read More....</p>
              </Link>
            </p>
          </div>
        </div>

        {/* blog preview slide end */}
        {/* blog preview slide */}

        <div className="p-2 text-[30px] w-316 bg-black/30 border-4 border-white/30 shadow-lg ml-2 flex">
          <img
            src="https://i.pinimg.com/736x/bc/73/76/bc7376164a06d2ae5b3307b176d36b20.jpg"
            width={200}
            height={40}
            alt="blog 4 image"
            className=" shadow-lg"
          />
          <div className="p-4">
            <div className="text-[30px]">How I Fell Back in Love with Code</div>
            <p className="text-[15px]">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum........
              <Link href="/blog/code-love">
                <p className="text-purple-600 ...">Read More....</p>
              </Link>
            </p>
          </div>
        </div>

        {/* blog preview slide end */}
      </main>
    </div>
  );
}
