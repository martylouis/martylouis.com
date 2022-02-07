import { ProseText } from './Prose';
import tw, { css } from 'twin.macro';

const PageHeader = ({ children, as = 'h1', ...props }) => {
  return (
    <ProseText
      as={as}
      css={{
        ...tw`font-serif text-4xl text-gray-900 dark:text-gray-50`,
      }}
    >
      {children}
    </ProseText>
  );
};

export default PageHeader;
