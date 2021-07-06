import tw, { styled } from 'twin.macro';

const Container = styled('div', {
  ...tw`px-6 md:px-12 lg:px-0 lg:grid`,
  gridTemplateColumns: '1fr min(64ch, 100%) 2fr 1fr',
  '& > *': {
    gridColumn: 2,
  },
});

export default Container;
