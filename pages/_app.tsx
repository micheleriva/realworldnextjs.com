import type { AppProps } from 'next/app';
import Navbar from '../components/Navbar';
import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="w-full min-h-screen bg-teal-900">
      <Navbar />
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
