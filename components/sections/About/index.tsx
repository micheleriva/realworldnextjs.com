import Image from 'next/image';

export default function About() {
  return (
    <div className="relative w-full min-h-screen">
      <Image
        src="/imgs/isaac-matthew-5x8hH2c07Ao-unsplash.jpg"
        layout="fill"
        objectFit="cover"
        objectPosition="center"
        alt="Gardens By the Bay, picture by Isaac Matthew on Unsplash"
      />
      <div className="absolute top-0 left-0 w-full h-full about-shadow">
        <div className="grid grid-cols-8 w-9/12 m-auto py-16 h-full">
          <div className="flex flex-col justify-center w-full col-span-4">
            <h2 className="font-serif font-bold text-5xl text-yellow-100">
              About the book
            </h2>
            <p className="text-white mt-12 text-md">
              Next.js is a scalable and high-performance React.js framework for
              modern web development. <br />
              It provides a large set of features such as hybrid rendering,
              route prefetching, automatic image optimization,
              internationalization, etc., out of the box.
              <br />
              <br />
              Next.js is an exciting technology that can be used for many
              purposes. If you (or your company) are willing to create
              e-commerce, a blog, or a simple website, you will learn how to do
              it without compromises about performances, user experience, and
              developer happiness. Starting from the basics of Next.js, you will
              understand how the framework can help you reach your goals, and
              you will realize how versatile Next.js is by building real-world
              applications with step-by-step explanations. You will learn to
              choose the right rendering methodology for your website, how to
              secure it and how to deploy it to different providers. We’ll
              always keep a look at performances and developer experience.
              <br />
              <br />
              By the end of this book, you will be able to design, build and
              deploy beautiful and modern architectures using Next.js with any
              headless CMS or data source.
            </p>
          </div>

          <div className="flex justify-center items-center col-span-4 w-full">
            <div className="relative w-[35rem] h-[35rem]">
              <Image
                src="/imgs/real-world-nextjs-kindle.png"
                layout="fill"
                objectFit="cover"
                alt="Real-World Next.js Kindle version"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
