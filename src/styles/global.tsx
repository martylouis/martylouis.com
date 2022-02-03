import tw, { theme, globalStyles } from 'twin.macro';
import { globalCss } from '../../stitches.config';

const customStyles = {
  'html, body *': tw`text-gray-900 dark:text-gray-100 bg-gray-50 dark:bg-gray-900`,
  body: {
    ...tw`antialiased`,
    scrollBehavior: 'smooth',
  },
  a: {
    ...tw`transition-colors`,
  },
};

const styles = () => {
  globalCss(customStyles)();
  globalCss(globalStyles as Record<any, any>)();
};

export default styles;
