import tw, { styled } from 'twin.macro';

interface IButton {
  children: React.ReactNode;
  href?: string;
  target?: string;
  rel?: string;
  title?: string;
  size?: 'lg' | 'md' | 'sm';
}

const StyledButton = styled('a', {
  ...tw`
    inline-flex font-medium gap-x-1 items-center relative cursor-pointer transition-colors h-12 px-8 rounded-full
    text-gray-900 dark:text-gray-200
    border-2 border-gray-900 dark:border-gray-100
    hover:(bg-black text-white dark:(bg-white text-black))
    active:(bg-black/5 text-black dark:(bg-white/10 text-white))
    focus:(outline-none text-black/90 ring-2 ring-black/80 dark:(text-white/90 ring-white/80))
  `,
  variants: {
    size: {
      lg: { ...tw`h-16 text-xl` },
    },
    defaultVariants: {
      size: 'md',
    },
  },
});

const Button = ({ href, target, rel, title, size, children }: IButton) => {
  const linkProps = { href, target, rel, title, size };
  return <StyledButton {...linkProps}>{children}</StyledButton>;
};

export default Button;
