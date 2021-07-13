/* eslint-disable react/display-name */
import { Link as LinkIcon } from 'react-feather';
import tw, { theme, styled } from 'twin.macro';
import NextLink from 'next/link';
import CodeBlock from './CodeBlock';

export const StyledDiv = styled('div', {});

export const ProseText = styled('p', {
  ...tw`max-w-xl mx-auto my-4 md:my-6`,
  '& > code': {
    ...tw`inline-block px-1 text-sm font-normal text-purple-500 bg-purple-400 rounded-sm bg-opacity-10`,
  },

  variants: {
    size: {
      sm: { ...tw`mt-8 mb-0 text-lg font-bold md:text-xl` },
      md: { ...tw`mt-12 mb-0 text-xl font-bold md:text-2xl` },
      lg: { ...tw`mt-16 mb-0 text-2xl font-bold md:text-3xl` },
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
      as="a"
      css={{
        [`&:hover ${LinkIcon}`]: { ...tw`opacity-100 ` },
      }}
      href={`#${id}`}
      data-id={id}
    >
      <ProseText
        id={id}
        as={props.as}
        {...props}
        css={{
          scrollMarginTop: '4rem',
        }}
      >
        <span tw="inline-flex items-center">
          <ProseText as="span" css={{ margin: 0 }}>
            {children}
          </ProseText>
          <LinkIcon
            aria-hidden
            size="16px"
            className="link-icon"
            tw="block ml-1.5 text-gray-400 transition-opacity opacity-0 flex-shrink-0"
          />
        </span>
      </ProseText>
    </ProseText>
  );
};

export const StyledList = styled('ul', {
  ...tw`max-w-xl pl-2 mx-auto my-4`,
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

export const ProseHR = styled('hr', {
  ...tw`my-8 border-gray-300 md:my-16`,
});

export const ProseBlockquote = styled('blockquote', {
  $$purple400: theme`colors.purple.200`,
  ...tw`max-w-full py-1 pl-6 my-8 font-bold border-l-4 border-gray-300 lg:my-20`,
  p: {
    ...tw`max-w-full my-0 text-xl italic md:text-2xl`,
    textShadow: '0 0 24px 0 $$purple400',
    // boxShadow: '0 0 24px $$purple400',
  },
});

const Prose = {
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

export default Prose;
