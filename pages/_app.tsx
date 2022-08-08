import '../styles/global.css';
import { ThemeProvider } from 'next-themes';
import { AppProps } from 'next/app';

export default function App({ Component, pageProps, router }: AppProps) {
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
