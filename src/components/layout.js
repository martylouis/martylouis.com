// import { motion } from 'framer-motion';
import SiteHeader from '@components/site/header';
import SiteFooter from '@components/site/footer';

export function Page({ children }) {
  return (
    <div className="flex flex-col h-screen">
      <div className="flex-grow flex-shrink-0">
        <SiteHeader className="py-4 bg-white border-b border-gray-100" />
        <main
        // initial={{ opacity: 0, y: '-1.5rem' }}
        // animate={{ opacity: 1, y: 0 }}
        // transition={{ ease: 'easeOut', duration: 0.3 }}
        // exit={{ opacity: 0, y: 0 }}
        // id="siteMain"
        >
          {children}
        </main>
        <div className="pt-48"></div>
      </div>
      <SiteFooter />
    </div>
  );
}

// const LayoutTransition = ({ children, ...otherProps }) => (
//   <motion.div
//     // initial={{ opacity: 0 }}
//     // animate={{ opacity: 1 }}
//     // exit={{ opacity: 0 }}
//     // transition={{ duration: 0.2, ease: 'easeOut' }}
//     {...otherProps}
//   >
//     {children}
//   </motion.div>
// );
