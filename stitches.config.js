import { createCss } from '@stitches/react';
import { utils } from './src/utils/stitches.utils';

export const {
  css,
  styled,
  global,
  theme,
  keyframes,
  getCssString,
} = createCss({
  media: {
    sm: '(min-width: 640px)',
    md: '(min-width: 768px)',
    lg: '(min-width: 1024px)',
  },
  utils,
});
