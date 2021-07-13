import { global } from '@stitches/react';
import tw, { styled } from 'twin.macro';

const CodeBlock = ({ children, ...props }) => {
  codeBlockStyles();
  return <pre {...props}>{children}</pre>;
};

export default CodeBlock;

const codeBlockStyles = global({
  '.remark-code-title': {
    ...tw`max-w-[39rem] mx-auto relative flex items-center justify-center w-full h-8 px-4 mt-4 overflow-auto text-xs leading-none text-gray-400 bg-gray-900 tracking-wide rounded-t-xl lg:h-10 lg:text-sm`,
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
