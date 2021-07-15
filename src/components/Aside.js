import tw, { css, styled, theme } from 'twin.macro';
import { XCircle, HelpCircle, CheckCircle, AlertCircle } from 'react-feather';
import { StyledDiv } from './Prose';
import Container from './Container';

const Aside = ({ children, type }) => {
  return (
    <Container
      type="grid"
      as="aside"
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
  ...tw`relative py-6 rounded-md sm:px-6 sm:-mx-6`,

  '& > p:last-child': {
    ...tw`mb-0`,
  },

  variants: {
    type: {
      default: tw`text-dye-800 bg-see-200`,
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
