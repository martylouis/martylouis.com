import tw, { styled } from 'twin.macro';

interface IButton {
  children: React.ReactNode;
  href?: string;
  target?: string;
  rel?: string;
}

const StyledButton = styled('a', {
  ...tw`
    inline-flex font-medium space-x-0.5 items-center relative cursor-pointer transition-colors h-12 px-8 rounded-full
    text-gray-900 dark:text-gray-200
    border border-gray-900/10 dark:border-gray-100/10
    hover:(bg-black/5 text-black/90 dark:(bg-white/10 text-white/90))
    active:(bg-black/5 text-black dark:(bg-white/10 text-white))
    focus:(outline-none text-black/90 ring-2 ring-black/80 dark:(text-white/90 ring-white/80))
  `,
});

const Button = ({ href, target, rel, children }: IButton) => {
  return (
    <StyledButton href={href} target={target} rel={rel}>
      {children}
    </StyledButton>
  );
};

export default Button;
