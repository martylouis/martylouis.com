import tw, { css, styled, theme } from 'twin.macro';
import { XCircle, HelpCircle, CheckCircle, AlertCircle } from 'react-feather';
import { StyledDiv } from './Prose';
// import Container from './Container';

const Aside = ({ children, type, ariaLabel = '' }) => {
  return (
    <StyledAside as="aside" type={type} aria-label={!ariaLabel && type}>
      {type && (
        <StyledIcon>
          <IconType type={type} />
        </StyledIcon>
      )}
      {children}
    </StyledAside>
  );
};

export default Aside;

const StyledIcon = styled('span', {
  ...tw`absolute top-0 left-0 p-px rounded-full`,
  marginTop: '-14px',
  marginLeft: '-14px',
});

const StyledAside = styled('div', {
  ...tw`relative col-start-1 col-end-4 px-6 py-6 my-6 transition-colors rounded-md`,
  ...tw`bg-gray-200 border-2 border-gray-300 dark:(bg-gray-700 border-gray-600 bg-opacity-20)`,

  '& > :last-child': {
    ...tw`mb-0`,
  },

  'article &': {
    ...tw`sm:-mx-6`,
  },

  variants: {
    type: {
      info: {
        ...tw`border-blue-500 bg-blue-50`,
        ...tw`dark:(text-blue-100 bg-blue-900 border-blue-600 bg-opacity-20)`,
        '&:before': {
          content: '',
          ...tw`bg-blue-500`,
        },
        [`& ${StyledIcon}`]: {
          ...tw`bg-blue-500 text-blue-50`,
        },
      },
      success: {
        ...tw`border-green-500 bg-green-50`,
        ...tw`dark:(text-gray-100 bg-green-900 border-green-600 bg-opacity-20)`,
        '&:before': {
          content: '',
          ...tw`bg-green-500`,
        },
        [`& ${StyledIcon}`]: {
          ...tw`bg-green-500 text-green-50`,
        },
      },
      warning: {
        ...tw`border-orange-500 bg-orange-50`,
        ...tw`dark:(text-gray-100 bg-orange-900 border-orange-500 bg-opacity-20)`,
        '&:before': {
          content: '',
          ...tw`bg-orange-500`,
        },
        [`& ${StyledIcon}`]: {
          ...tw`bg-orange-500 text-orange-50`,
        },
      },
      danger: {
        ...tw`border-red-500 bg-red-50`,
        ...tw`dark:(text-gray-100 bg-red-900 border-red-500 bg-opacity-20)`,
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
