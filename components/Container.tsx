import tw, { styled } from 'twin.macro';
import Box from './Box';

export interface IContainer {
  size?: 'sm' | 'md' | 'lg' | 'full';
  children: React.ReactNode;
}

const StyledBox = styled(Box, {
  ...tw`w-full px-6 mx-auto xl:px-0`,
  variants: {
    size: {
      sm: { ...tw`max-w-2xl` },
      md: { ...tw`max-w-3xl` },
      lg: { ...tw`max-w-5xl` },
      full: { ...tw`max-w-none xl:px-12` },
    },
  },
  defaultVariants: {
    size: 'md',
  },
});

function Container({ size, children, ...props }: IContainer) {
  return (
    <StyledBox {...props} size={size}>
      {children}
    </StyledBox>
  );
}

export default Container;
