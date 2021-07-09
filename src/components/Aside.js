import tw, { css, styled, theme } from 'twin.macro';
import { XCircle, HelpCircle, CheckCircle, AlertCircle } from 'react-feather';
import { StyledDiv } from './Prose';

const Aside = ({ children, type }) => {
  return (
    <StyledAside as="aside">
      <StyledAsideContainer type={type}>
        {type && (
          <StyledIcon>
            <IconType type={type} />
          </StyledIcon>
        )}
        {children}
      </StyledAsideContainer>
    </StyledAside>
  );
};

export default Aside;

const StyledAside = styled('aside', {
  ...tw`mx-auto my-8`,

  variants: {
    size: {
      default: { maxWidth: '39rem' },
      full: { ...tw`max-w-full` },
      content: { ...tw`max-w-xl` },
    },
  },

  defaultVariants: {
    size: 'default',
  },
});

const StyledIcon = styled('span', {
  ...tw`absolute top-0 left-0 p-px rounded-full`,
  marginTop: '-14px',
  marginLeft: '-14px',
});

const StyledAsideContainer = styled('div', {
  ...tw`relative max-w-full p-6 text-sm leading-snug rounded-lg`,

  '& p': {
    ...tw`my-0 text-sm`,
    '& + p': { ...tw`mt-2` },
  },

  variants: {
    type: {
      default: tw`text-gray-700 bg-gray-400 bg-opacity-10`,
      info: {
        ...tw`border-2 border-blue-500 bg-blue-50`,
        '&:before': {
          content: '',
          ...tw`bg-blue-500`,
        },
        [`& ${StyledIcon}`]: {
          ...tw`bg-blue-500 text-blue-50`,
        },
      },
      success: {
        ...tw`border-2 border-green-500 bg-green-50`,
        '&:before': {
          content: '',
          ...tw`bg-green-500`,
        },
        [`& ${StyledIcon}`]: {
          ...tw`bg-green-500 text-green-50`,
        },
      },
      warning: {
        ...tw`border-2 border-yellow-500 bg-yellow-50`,
        '&:before': {
          content: '',
          ...tw`bg-yellow-500`,
        },
        [`& ${StyledIcon}`]: {
          ...tw`bg-yellow-500 text-yellow-50`,
        },
      },
      danger: {
        ...tw`border-2 border-red-500 bg-red-50`,
        '&:before': {
          content: '',
          ...tw`bg-red-500`,
        },
        [`& ${StyledIcon}`]: {
          ...tw`bg-red-500 text-red-50`,
        },
      },
    },
  },
  defaultVariants: {
    type: 'default',
    width: 'bleed',
  },
});

const IconType = ({ ...props }) => {
  const { type } = props;

  switch (type) {
    case 'info':
      return <HelpCircle />;
    case 'success':
      return <CheckCircle />;
    case 'warning':
      return <AlertCircle />;
    case 'danger':
      return <XCircle />;
    default:
      return null;
  }
};
