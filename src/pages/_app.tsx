import { AppProps } from 'next/app'
import '../styles/global.scss';  // Add this line

function Portfolio({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default Portfolio;
