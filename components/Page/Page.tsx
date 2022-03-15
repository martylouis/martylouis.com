import PageFooter from './PageFooter';
import PageHeader from './PageHeader';

export interface PageProps {
  children: React.ReactNode;
}

function Page({ children }: PageProps) {
  return (
    <>
      <PageHeader />
      <main>{children}</main>;
      <PageFooter />
    </>
  );
}

export default Page;
