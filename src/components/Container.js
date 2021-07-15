import tw, { styled } from 'twin.macro';

const Container = styled('div', {
  ...tw`mx-auto`,

  variants: {
    size: {
      sm: { ...tw`max-w-xl px-6` },
      md: { ...tw`max-w-3xl px-6` },
      lg: { ...tw`max-w-5xl px-6` },
      xl: { ...tw`max-w-6xl px-6` },
      full: { ...tw`w-full max-w-7xl` },
    },
    isGrid: {
      true: {
        display: 'grid',
        gridTemplateColumns: '1fr min(60ch, 100%) 1fr',
        '& > *': {
          gridColumn: '2 / 3',
        },
      },
    },
  },

  defaultVariants: {
    size: 'full',
  },
});

export default Container;
