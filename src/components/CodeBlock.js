import { global } from '@stitches/react';
import tw, { styled, theme } from 'twin.macro';

const CodeBlock = ({ children, ...props }) => {
  remarkCodeTitleStyles();
  return (
    <>
      {/* <pre {...props}>{children}</pre> */}
      <StyledPre {...props}>{children}</StyledPre>
    </>
  );
};

export default CodeBlock;

const StyledPre = styled('pre', {
  $$code_text: 'white',
  $$code_bg: '#24292E', //
  $$code_syntax1: '#E1E4E8', // purple
  $$code_syntax2: '#F97583', // red
  $$code_syntax3: '#B392F0', // purple
  $$code_syntax4: '#85E89D', // green
  $$code_syntax5: '#9ECBFF', // light blue
  $$code_syntax6: '#79B8FF', // blue
  $$code_comment: '#6A737D', // gray
  // $$code_removed: '',
  // $$code_added: '',

  '&[class*="language-"]': {
    ...tw`px-6 pt-3 pb-6 mb-2`,
  },

  '&[class*="language-"], & > code[class*="language-"]': {
    ...tw`overflow-auto text-xs leading-relaxed text-left sm:text-[14px] sm:leading-6 sm:rounded-b-lg`,
    color: '$$code_text',
    background: '$$code_bg',
    whiteSpace: 'pre',
    wordSpacing: 'normal',
    wordBreak: 'normal',
    wordWrap: 'normal',
    tabSize: 2,
    hyphens: 'none',
    textShadow: '0 1px 0 rgba(0, 0, 0, 0.25)',

    '&::selection': {
      color: 'blue',
    },

    '& > code': { display: 'block' },

    '.token': {
      '&.comment, &.prolog, &.cdata': {
        color: '$$code_comment',
      },

      '&.punctuation': {
        color: '$$code_syntax1',
      },

      '&.deleted': {
        color: 'rgba(239, 83, 80, 0.56)',
        fontStyle: 'italic',
      },

      '&.symbol, &.combinator, &.operator, &.keyword, &.atrule, &.rule, &.unit, &.important, &.script-punctuation':
        {
          color: '$$code_syntax2',
        },

      '&.class, &.maybe-class-name, &.attr-name, &.color, &.pseudo-class, &.function, &.method':
        {
          color: '$$code_syntax3',
        },

      '&.boolean, &.tag': {
        color: '$$code_syntax4',
      },

      '&.number': {
        color: '$$code_syntax5',
      },

      '&.property, &.class-name, &.constant, &.builtin, &.char, &.variable': {
        color: '$$code_syntax6',
      },

      '&.doctype': {
        color: '$$code_syntax1',
      },

      '&.selector': {
        color: '$$code_syntax4',
      },

      '&.inserted': {
        color: '$$code_syntax5',
      },

      '&.string, &.url, &.entity, &.attr-value': {
        color: '$$code_syntax5',
      },

      '&.regex': {
        color: '$$code_text',

        '.regex-delimiter': { color: '$$code_syntax5' },
      },

      '&.important, &.bold': { fontWeight: 'bold' },
      '&.italic': { fontStyle: 'italic' },

      '&.language-javascript.script': {
        color: '$$code_text',
      },
    },

    '.language-css .token.string, style .token.string': {
      color: '$$code_syntax5',
    },

    '.namespace': { color: '$$code_syntax3' },
  },

  variants: {
    theme: {},
  },
});

const remarkCodeTitleStyles = global({
  'pre[class*="language-"]': {},

  '.remark-code-title': {
    ...tw`relative flex items-center justify-center w-full h-8 px-4 mt-4 overflow-auto text-xs leading-none tracking-wide text-gray-400 sm:rounded-t-lg lg:h-10 lg:text-sm`,
    $$code_bg: '#24292E',
    background: '$$code_bg',

    '&:before': {
      ...tw`absolute left-0 w-[8px] h-[8px] ml-4 rounded-full lg:w-[10px] lg:h-[10px] bg-gray-500 bg-opacity-50`,
      content: '',
      boxShadow:
        '1rem 0 0 rgba(107, 114, 128, 0.5), 2rem 0 0 rgba(107, 114, 128, 0.5)',
    },

    '& + pre[class*="language-"]': {
      ...tw`mt-0 rounded-t-none`,
    },
  },
});
