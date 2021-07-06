import Link from 'next/link';
import SEO from '../components/SEO';
import MartyLouisLogo from '@components/MartyLouisLogo';
import styles from './Page.module.css';

const Page = ({ children }) => {
  return (
    <>
      <SEO />
      <div className="flex flex-col h-screen">
        <div className="flex-grow flex-shrink-0">
          <header className="py-[4vh]">
            <div className={styles.container}>
              <Link href="/" passHref>
                <a className="flex items-center max-w-3xl">
                  <span className="w-8 h-8 lg:w-10 lg:h-10">
                    <MartyLouisLogo />
                  </span>
                  <span className="ml-2 span">martylouis.com</span>
                </a>
              </Link>
              {/* PageHeaderNav */}
            </div>
          </header>
          <main>{children}</main>
        </div>
        <footer className="py-[8vh]">
          <div className={styles.container}>
            <p>&copy; {new Date().getFullYear()} Marty Louis Co</p>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Page;
