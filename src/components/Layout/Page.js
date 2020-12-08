import Header from '@components/Header';
import Footer from '@components/Footer';

export default function Page({ children }) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
