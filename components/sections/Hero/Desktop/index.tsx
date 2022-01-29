import Link from 'next/link';
import Image from 'next/image';

export default function Hero() {
  return (
    <div className="container grid-cols-7 min-h-screen m-auto hidden 2xl:grid xl:grid lg:grid w-9/12">
      <div className="absolute -top-[500px] -right-[500px] rounded-full w-[1000px] h-[1000px] bg-lime-200" />

      <div className="flex w-full flex-col justify-center z-10 px-2 col-span-4">
        <h1 className="2xl:text-7xl xl:text-6xl lg:text-5xl text-yellow-100 font-serif font-bold">
          Real-World Next.js
        </h1>
        <p className="text-yellow-50 2xl:text-xl xl:text-lg lg:text-md mt-3">
          Build scalable, high performances and modern web applications using
          Next.js, the React framework for production.
        </p>
        <div className="flex mt-7">
          <Link href="https://rwnjs.com/order/amazon" passHref>
            <a
              target="_blank"
              className="py-2 px-12 bg-emerald-500 rounded-lg text-emerald-50"
            >
              Buy
            </a>
          </Link>
          <Link href="#content" passHref>
            <a className="ml-5 py-2 px-7 bg-orange-500 rounded-lg text-orange-50">
              Learn more
            </a>
          </Link>
        </div>
      </div>
      <div className="flex justify-center items-center w-full min-h-screen col-span-3">
        <div className="relative w-full 2xl:h-4/6 xl:h-3/6 lg:h-3/6">
          <Image
            src="/imgs/real-world-nextjs-book.png"
            layout="fill"
            objectFit="contain"
            alt="Real-World Next.js, book by Michele Riva"
          />
        </div>
      </div>
    </div>
  );
}
