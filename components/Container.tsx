import tw, { styled } from 'twin.macro';
import Box from './Box';

export interface ContainerProps {
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

const StyledBox = styled(Box, {
  ...tw`w-full px-4 mx-auto lg:px-8`,
  variants: {
    size: {
      sm: { ...tw`max-w-xl` },
      md: { ...tw`max-w-3xl` },
      lg: { ...tw`max-w-5xl` },
    },
  },
  defaultVariants: {
    size: 'sm',
  },
});

function Container({ size, children, ...props }: ContainerProps) {
  return (
    <StyledBox {...props} size={size}>
      {children}
    </StyledBox>
  );
}

export default Container;
