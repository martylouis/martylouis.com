// import { createCss } from '@stitches/react';
// import { utils } from '@lib/stitches.utils';

// export const {
//   css,
//   styled,
//   global,
//   theme,
//   keyframes,
//   getCssString,
// } = createCss({
//   media: {
//     sm: '(min-width: 640px)',
//     md: '(min-width: 768px)',
//     lg: '(min-width: 1024px)',
//   },
//   utils,
// });

// stitches.config.ts
import { createCss, StitchesCss } from '@stitches/react';
// export type { StitchesVariants } from '@stitches/react'

export const stitches = createCss({
  prefix: '',
  theme: {},
  themeMap: {},
  utils: {},
});

// export type CSS = StitchesCss<typeof stitches>

export const { css, styled, global, theme, keyframes, getCssString } = stitches;
