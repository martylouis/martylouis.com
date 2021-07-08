/* eslint-disable react/display-name */
import { Link as LinkIcon } from 'react-feather';
import tw, { theme, styled } from 'twin.macro';
import NextLink from 'next/link';

export const StyledText = styled('span', {
  ...tw`max-w-[54ch]`,
  '& > code': {
    ...tw`inline-block px-1 text-sm font-normal text-purple-500 bg-purple-500 rounded-sm bg-opacity-10`,
  },
});

export const StyledLink = styled('a', {
  ...tw`px-0.5 hover:text-purple-700 hover:underline focus:underline`,
  textUnderlineOffset: '1px',
  textDecorationLine: 'underline',
  // textDecorationColor: theme`colors.gray.300`,
});

export const StyledHeading = styled('h1', {
  ...tw`font-bold`,
  variants: {
    size: {
      xl: {
        ...tw`my-4 text-2xl tracking-tight md:my-6 lg:my-8 md:text-3xl lg:text-4xl`,
      },
      lg: { ...tw`text-2xl md:text-3xl` },
      md: { ...tw`text-xl md:text-2xl` },
      sm: { ...tw`text-lg md:text-xl` },
    },
  },
});

export const LinkedHeading = ({ id, children, ...props }) => (
  <StyledText
    as="a"
    href={`#${id}`}
    data-id={id}
    css={{
      ...tw`block mt-12 mb-4`,
      '& + *': { ...tw`mt-0` },
      '&:hover span': { ...tw`text-gray-500` },
    }}
  >
    <StyledHeading
      id={id}
      {...props}
      css={{
        ...tw`inline-flex items-center`,
        scrollMarginTop: '4rem',
      }}
    >
      {children}
      <span tw="w-3.5 h-3.5 text-gray-300 ml-1.5 transition-colors flex-shrink-0">
        <LinkIcon aria-hidden tw="w-full h-full block" />
      </span>
    </StyledHeading>
  </StyledText>
);

export const StyledList = styled('ul', {
  ...tw`pl-2 my-4`,
});

export const StyledOrderedList = ({ children, ...props }) => (
  <StyledList
    as="ol"
    {...props}
    css={{
      ...tw`pl-8`,
      '& > li': { ...tw`relative my-2` },
      '& > li:before': {
        ...tw`absolute mr-2 tracking-tighter right-full`,
        content: 'counter(list-item, decimal) "."',
        fontWeight: '400',
        fontFamily: 'Inter, sans-serif',
        color: theme('colors.gray.700'),
        fontVariant: 'tabular-nums',
      },
    }}
  >
    {children}
  </StyledList>
);

export const StyledUnorderedList = ({ children, ...props }) => (
  <StyledList
    as="ul"
    css={{
      $$gray800: theme`colors.gray.800`,
      '& > li': { ...tw`relative pl-4 my-2` },
      '& > li:before': {
        ...tw`absolute w-[6px] h-[6px] bg-gray-800 rounded-full mt-2.5 top-0 left-0 mr-2`,
        content: '',
      },
      '& ul > li:before': {
        boxShadow: 'inset 0 0 0 1px $$gray800',
        background: 'transparent',
      },
      '& li > ul': {
        ...tw`mt-0`,
      },
    }}
  >
    {children}
  </StyledList>
);

const Prose = {
  h1: (props) => <LinkedHeading {...props} size="lg" as="h2" />,
  h2: (props) => <LinkedHeading {...props} size="lg" as="h2" />,
  h3: (props) => <LinkedHeading {...props} size="md" as="h3" />,
  h4: (props) => <StyledHeading {...props} size="sm" as="h4" />,
  p: (props) => <StyledText {...props} as="p" css={{ ...tw`my-4 md:my-6` }} />,
  a: StyledLink,
  ol: (props) => <StyledOrderedList {...props} />,
  ul: (props) => <StyledUnorderedList {...props} />,
  li: (props) => <StyledText as="li" {...props} />,
  hr: (props) => <hr className="my-8 border-gray-300 md:my-16" />,
  blockquote: (props) => (
    <StyledText
      as="blockquote"
      {...props}
      css={{
        ...tw`pl-4 my-8 font-bold border-l-4 border-purple-400 lg:my-16`,
        p: {
          ...tw`my-0 text-xl italic lg:text-2xl`,
        },
      }}
    />
  ),
};

export default Prose;
