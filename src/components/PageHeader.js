import { ProseText } from './Prose';
import tw, { css } from 'twin.macro';

const PageHeader = ({ children, as = 'h1', ...props }) => {
  return (
    <ProseText
      as={as}
      css={{
        ...tw`mt-8 text-4xl font-black md:mt-16 md:text-5xl`,
      }}
    >
      {children}
    </ProseText>
  );
};

export default PageHeader;
