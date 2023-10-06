import { AppProps } from 'next/app'
import '../styles/global.scss';
import '../styles/global.css';

function Portfolio({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default Portfolio;
