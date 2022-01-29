import Image from 'next/image';
import {
  BsTwitter,
  BsInstagram,
  BsMedium,
  BsLinkedin,
} from 'react-icons/bs/index';

const social = [
  {
    Icon: BsTwitter,
    url: 'https://twitter.com/MicheleRivaCode',
    name: 'Twitter',
  },
  {
    Icon: BsInstagram,
    url: 'https://instagram.com/mitch_sleva',
    name: 'Instagram',
  },
  {
    Icon: BsMedium,
    url: 'https://micheleriva.medium.com',
    name: 'Medium',
  },
  {
    Icon: BsLinkedin,
    url: 'https://linkedin.com/in/MicheleRiva95',
    name: 'LinkedIn',
  },
];

export default function Author() {
  return (
    <div className="flex justify-center w-full min-h-screen bg-slate-900">
      <div className="grid grid-cols-8 w-9/12 gap-5 m-auto py-16 h-full">
        <div className="flex flex-col justify-center h-full col-span-3">
          <div className="relative w-96 h-96">
            <Image
              src="/imgs/micheleriva.jpg"
              layout="fill"
              objectFit="cover"
              className="rounded-md"
              alt="Michele Riva live at Codemotion 2019"
            />
          </div>
          <div className="flex items-center justify-center w-96 grid-cols-4 mt-5">
            {social.map((social) => (
              <a key={social.name} href={social.url} target="_blank">
                <social.Icon className="text-white text-2xl mr-5" />
              </a>
            ))}
          </div>
        </div>
        <div className="col-span-5">
          <h1 className="font-serif font-bold text-5xl text-slate-100">
            The author
          </h1>
          <p className="text-white mt-12 text-md">
            Michele Riva is a passionate and experienced Software Architect and
            Google Developer Expert from Milan, Italy.
            <br />
            <br />
            During the last years, he has contributed to many open-source
            projects from big companies and foundations in many different
            programming languages and paradigms, including Haskell, Elixir, Go,
            and TypeScript.
            <br />
            <br />
            He has also written dozens of public domain articles on a broad
            range of topics and given many talks at international conferences
            and meetups.
            <br />
            <br />
            When writing this book, he worked as a Senior Software Engineer in
            the architecture team of ViacomCBS, building a multi-tenant Node.js
            application at the heart of their streaming websites and networks.
            <br />
            <br />
            Nowadays, he&apos;s employed as a <b>
              Senior Software Architect
            </b>{' '}
            in <b>NearForm</b>.
          </p>
        </div>
      </div>
    </div>
  );
}
