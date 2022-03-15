import 'twin.macro';
import PageFooter from './PageFooter';
import PageHeader from './PageHeader';

export interface PageProps {
  children: React.ReactNode;
}

function Page({ children }: PageProps) {
  return (
    <div tw="flex flex-col min-h-screen">
      <PageHeader />
      <main tw="flex-1">{children}</main>
      <PageFooter />
    </div>
  );
}

export default Page;
