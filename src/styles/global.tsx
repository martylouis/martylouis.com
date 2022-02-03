import tw, { theme, globalStyles } from 'twin.macro';
import { globalCss } from '../stitches.config';

const customStyles = {
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
