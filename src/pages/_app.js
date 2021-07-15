import '@styles/styles.css';
import { ThemeProvider } from 'next-themes';

export default function MyApp({ Component, pageProps, router }) {
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
