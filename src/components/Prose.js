/* eslint-disable react/display-name */
import { Link as LinkIcon } from 'react-feather';
import tw, { theme, styled } from 'twin.macro';
import NextLink from 'next/link';
import CodeBlock from './CodeBlock';

export const ProseSpan = styled('span', {});

export const ProseText = styled('p', {
  ...tw`px-6 mt-0 mb-2 sm:px-0 md:mb-4`,
  '& > code': {
    ...tw`inline-block px-1 text-sm subpixel-antialiased font-normal rounded`,
    ...tw`text-purple-600 bg-purple-200 bg-opacity-75`,
    ...tw`dark:(text-purple-400 bg-purple-900 bg-opacity-10)`,
  },

  variants: {
    size: {
      sm: { ...tw`mt-8 mb-2 text-lg font-bold md:text-xl` },
      md: { ...tw`mt-12 mb-4 text-xl font-bold md:text-2xl` },
      lg: { ...tw`mt-16 mb-6 text-2xl font-bold md:text-3xl` },
    },
  },
});

export const ProseLink = styled('a', {
  ...tw`px-0.5 font-medium hover:text-purple-700 hover:underline focus:underline`,
  textUnderlineOffset: '1px',
  textDecorationLine: 'underline',
});

export const ProseHeading = ({ id, children, ...props }) => {
  LinkIcon.toString = () => '.link-icon';

  return (
    <ProseText
      id={id}
      as={props.as}
      {...props}
      css={{
        ...tw`text-gray-800 dark:text-gray-100`,
        scrollMarginTop: '4rem',
      }}
    >
      {children}
    </ProseText>
  );
};

export const StyledList = styled('ul', {
  ...tw`mb-2`,
  '& > li': { ...tw`relative my-1` },
  '& ul, & ol': { ...tw`mb-1 md:mb-1` },
});

export const StyledOrderedList = ({ children, ...props }) => (
  <StyledList
    as="ol"
    {...props}
    css={{
      ...tw`pl-10 md:pl-4`,
      '& > li': { ...tw`pl-2` },
      '& > li:before': {
        ...tw`absolute tracking-tighter text-gray-700 right-full dark:text-gray-300`,
        content: 'counter(list-item, decimal) "."',
        fontFamily: 'Inter, sans-serif',
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
      $$gray700: theme`colors.gray.700`,
      ...tw`pl-8 md:pl-2`,
      '& > li': { ...tw`pl-4` },
      '& > li:before': {
        ...tw`absolute w-[6px] h-[6px] rounded-full mt-2.5 top-0 left-0 mr-2`,
        ...tw`bg-gray-700 dark:bg-gray-300`,
        content: '',
      },
      '& ul > li:before': {
        boxShadow: 'inset 0 0 0 1px $$dark700',
        background: 'transparent',
      },
    }}
  >
    {children}
  </StyledList>
);

export const ProseHR = styled('hr', {
  ...tw`my-8 transition-colors border-gray-200 dark:border-gray-700 md:my-16`,
});

export const ProseBlockquote = styled('blockquote', {
  ...tw`py-1 pl-6 mx-4 my-4 font-serif border-l-4 border-purple-300 md:mx-0 lg:my-8`,
  p: {
    ...tw`px-0 my-1 text-2xl italic leading-tight md:text-3xl md:leading-tight`,
  },
});

export const ProseInlineCode = styled('code', {
  ...tw`inline px-1 text-sm font-normal text-purple-500 bg-purple-400 rounded-sm bg-opacity-10`,
});

const ProseComponents = {
  h1: (props) => <ProseHeading {...props} size="lg" as="h2" />,
  h2: (props) => <ProseHeading {...props} size="lg" as="h2" />,
  h3: (props) => <ProseHeading {...props} size="md" as="h3" />,
  h4: (props) => <ProseHeading {...props} size="sm" as="h4" />,
  p: (props) => <ProseText {...props} />,
  a: ProseLink,
  ol: (props) => <StyledOrderedList {...props} />,
  ul: (props) => <StyledUnorderedList {...props} />,
  li: (props) => <ProseText as="li" {...props} />,
  hr: (props) => <ProseHR {...props} />,
  blockquote: (props) => <ProseBlockquote {...props} />,
  pre: (props) => <CodeBlock {...props} />,
};

export default ProseComponents;
