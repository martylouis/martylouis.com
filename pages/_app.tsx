import globalStyles from '../styles/global';
import '@/styles/globals.css';
import { AppProps } from 'next/app';
import { ThemeProvider } from 'next-themes';

export default function App({ Component, pageProps, router }: AppProps) {
  globalStyles();
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      value={{
        dark: 'dark',
        light: 'light',
      }}
    >
      <Component key={router.route} {...pageProps} />
    </ThemeProvider>
  );
}
