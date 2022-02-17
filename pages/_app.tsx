import globalStyles from '../styles/global';
import '@/styles/styles.css';
import { AppProps } from 'next/app';
import { ThemeProvider } from 'next-themes';

export default function App({ Component, pageProps, router }: AppProps) {
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
