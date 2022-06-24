import '../styles/global.css';
import splitbee from '@splitbee/web';
import { ThemeProvider } from 'next-themes';
import { AppProps } from 'next/app';
import { useEffect } from 'react';

export default function App({ Component, pageProps, router }: AppProps) {
  useEffect((): void => {
    splitbee.init({
      apiUrl: '/sb-api',
      scriptUrl: '/sb.js',
    });
  }, []);
  return (
    <ThemeProvider
      disableTransitionOnChange
      attribute="class"
      defaultTheme="system"
    >
      <Component key={router.route} {...pageProps} />
    </ThemeProvider>
  );
}
