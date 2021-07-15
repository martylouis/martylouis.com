import SiteFooter from '@components/SiteFooter';
import SiteHeader from '@components/SiteHeader';
import SEO from '../components/SEO';

const Page = ({ children }) => {
  return (
    <>
      <SEO />
      <div className="flex flex-col h-screen">
        <div className="flex-grow flex-shrink-0">
          <SiteHeader />
          <main className="pb-[8vh]">{children}</main>
        </div>
        <SiteFooter />
      </div>
    </>
  );
};

export default Page;
