import tw, { globalStyles } from 'twin.macro';
import { globalCss } from '../stitches.config';

const customStyles = {
  body: {
    ...tw`h-full font-sans antialiased text-gray-700 bg-gray-50 dark:(text-gray-400 bg-gray-900)`,
    scrollBehavior: 'smooth',
  },
};

const styles = () => {
  globalCss(customStyles)();
  globalCss(globalStyles as Record<any, any>)();
};

export default styles;
