/* eslint-disable react/display-name */
import { Link as LinkIcon } from 'react-feather';
import tw, { theme, styled } from 'twin.macro';
import NextLink from 'next/link';
import CodeBlock from './CodeBlock';
import { ExternalLink } from 'react-feather';
import Link from './Link';

export const ProseSpan = styled('span', {});

export const ProseText = styled('p', {
  ...tw`mt-0 mb-2 md:mb-4`,
  '& strong': { ...tw`font-extrabold text-gray-800 dark:text-gray-100` },
  '& code': {
    ...tw`inline-flex px-1 font-bold whitespace-pre-wrap rounded font-size[0.9rem]`,
    ...tw`text-indigo-500 transition-colors bg-white bg-opacity-25 border border-gray-200`,
    ...tw`dark:(text-indigo-500 bg-gray-900 border border-gray-700 bg-opacity-50)`,
  },

  '& a code': {
    ...tw`text-teal-500 dark:text-teal-400 hocus:(text-teal-600 dark:text-teal-500)`,
  },

  variants: {
    size: {
      sm: { ...tw`mt-8 mb-2 text-lg font-bold md:text-xl` },
      md: { ...tw`mt-12 mb-4 text-xl font-bold md:text-2xl` },
      lg: { ...tw`mt-16 mb-6 text-2xl font-bold md:text-3xl` },
    },
  },
});

export const ProseHeading = ({ id, children, ...props }) => {
  LinkIcon.toString = () => '.link-icon';

  return (
    <ProseText
      id={id}
      as={props.as}
      {...props}
      css={{
        ...tw`text-gray-800 transition-colors dark:text-gray-100`,
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
        ...tw`absolute top-0 left-0 mr-2 rounded-full w-[6px] h-[6px] mt-2.5`,
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
  ...tw`py-1 pl-6 my-4 border-l-4 border-teal-400 md:mx-0 lg:my-8`,
  p: {
    ...tw`px-0 my-1 text-xl italic font-black leading-tight tracking-tighter md:text-2xl md:leading-tight`,
  },

  'article &': { ...tw`-mx-0 sm:-mx-8 md:-mx-16` },
});

export const ProseInlineCode = styled('code', {
  ...tw`inline px-1 text-sm font-normal text-indigo-500 bg-indigo-400 rounded-sm bg-opacity-10`,
});

const ProseComponents = {
  h1: (props) => <ProseHeading {...props} size="lg" as="h2" />,
  h2: (props) => <ProseHeading {...props} size="lg" as="h2" />,
  h3: (props) => <ProseHeading {...props} size="md" as="h3" />,
  h4: (props) => <ProseHeading {...props} size="sm" as="h4" />,
  p: (props) => <ProseText {...props} />,
  a: (props) => (
    <Link
      {...props}
      css={{
        ...tw`text-teal-500 dark:text-teal-400 hocus:(text-teal-600 dark:text-teal-500)`,
      }}
    />
  ),
  ol: (props) => <StyledOrderedList {...props} />,
  ul: (props) => <StyledUnorderedList {...props} />,
  li: (props) => <ProseText as="li" {...props} />,
  hr: (props) => <ProseHR {...props} />,
  blockquote: (props) => <ProseBlockquote {...props} />,
  pre: (props) => <CodeBlock {...props} />,
};

export default ProseComponents;
