import '../styles/globals.css'
import { useEffect } from 'react';
import type { AppProps } from 'next/app'
import renderMathInElement from 'katex/dist/contrib/auto-render.mjs';

import 'katex/dist/katex.min.css';

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    renderMathInElement(document.body);
  }, [Component]);

  return <Component {...pageProps} />
}

export default MyApp
