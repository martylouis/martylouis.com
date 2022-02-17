import '@/styles/styles.css';
import splitbee from '@splitbee/web';
import { ThemeProvider } from 'next-themes';
import { AppProps } from 'next/app';
import { useEffect } from 'react';
import globalStyles from '../styles/global';

export default function App({ Component, pageProps, router }: AppProps) {
  useEffect((): void => {
    splitbee.init({
      apiUrl: '/sb-api',
      scriptUrl: '/sb.js',
    });
  }, []);
  globalStyles();
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
