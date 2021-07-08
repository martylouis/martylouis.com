import tw, { styled } from 'twin.macro';

const Container = styled('div', {
  ...tw`max-w-3xl px-6 mx-auto md:px-12 lg:px-0`,
  // gridTemplateColumns: '1fr min(64ch, 100%) 2fr 1fr',
  '& > *': {
    // gridColumn: 2,
  },
});

export default Container;
