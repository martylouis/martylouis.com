import tw, { css, styled, theme } from 'twin.macro';
import { XCircle, HelpCircle, CheckCircle, AlertCircle } from 'react-feather';
import { StyledDiv } from './Prose';
import Container from './Container';

const Aside = ({ children, type, ariaLabel = '' }) => {
  return (
    <Container
      isGrid
      as="aside"
      aria-label={!ariaLabel && type}
      tw="my-8 col-start-1 col-end-4 px-6 sm:px-0"
    >
      <StyledAsideContainer type={type}>
        {type && (
          <StyledIcon>
            <IconType type={type} />
          </StyledIcon>
        )}
        {children}
      </StyledAsideContainer>
    </Container>
  );
};

export default Aside;

const StyledIcon = styled('span', {
  ...tw`absolute top-0 left-0 p-px rounded-full`,
  marginTop: '-14px',
  marginLeft: '-14px',
});

const StyledAsideContainer = styled('div', {
  ...tw`relative py-6 transition-colors rounded-md sm:px-6 sm:-mx-6`,
  ...tw`bg-gray-200 dark:bg-gray-700`,

  '& > p:last-child': {
    ...tw`mb-0`,
  },

  variants: {
    type: {
      info: {
        ...tw`border-2 border-blue-500 bg-blue-50`,
        ...tw`dark:(text-blue-100 bg-blue-900 bg-opacity-20)`,
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
        ...tw`dark:(text-gray-100 bg-green-900 bg-opacity-30)`,
        '&:before': {
          content: '',
          ...tw`bg-green-500`,
        },
        [`& ${StyledIcon}`]: {
          ...tw`bg-green-500 text-green-50`,
        },
      },
      warning: {
        ...tw`border-2 border-orange-500 bg-orange-50`,
        ...tw`dark:(text-gray-100 bg-orange-900 bg-opacity-20)`,
        '&:before': {
          content: '',
          ...tw`bg-orange-500`,
        },
        [`& ${StyledIcon}`]: {
          ...tw`bg-orange-500 text-orange-50`,
        },
      },
      danger: {
        ...tw`border-2 border-red-500 bg-red-50`,
        ...tw`dark:(text-gray-100 bg-red-900 bg-opacity-20)`,
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
