import SiteFooter from '@/components/SiteFooter';
import SiteHeader from '@/components/SiteHeader';
import SEO from './SEO';
import tw, { styled } from 'twin.macro';

const StyledPageLayout = styled('div', {
  ...tw`flex flex-col min-h-screen px-[8%]`,
});

const PageLayout = ({ children }) => {
  return (
    <>
      <SEO />
      <StyledPageLayout>
        <SiteHeader />
        <main tw="flex-1">{children}</main>
        <SiteFooter />
      </StyledPageLayout>
    </>
  );
};

export default PageLayout;
