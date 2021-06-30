import '@styles/styles.css';

export default function MyApp({ Component, pageProps, router }) {
  return <Component key={router.route} {...pageProps} />;
}
