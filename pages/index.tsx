import type { NextPage } from 'next';
import DesktopHero from '../components/sections/Hero/Desktop';
import About from '../components/sections/About';
import Author from '../components/sections/Author';

const Home: NextPage = () => {
  return (
    <div>
      <DesktopHero />
      <About />
      <Author />
    </div>
  );
};

export default Home;
