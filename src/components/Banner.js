import tw, { css, styled, theme } from 'twin.macro';
import { AlertTriangle, XOctagon, Info } from 'react-feather';

const Banner = ({ children, ...props }) => {
  const { type, title } = props;

  return (
    <StyledBanner {...props}>
      {type && (
        <StyledIcon>
          <IconType {...props} />
        </StyledIcon>
      )}
      <div>
        {title && <StyledTitle>{title}</StyledTitle>}
        {children}
      </div>
    </StyledBanner>
  );
};

export default Banner;

const StyledTitle = styled('div', {
  ...tw`text-lg font-bold`,
});

const StyledIcon = styled('span', {
  ...tw`self-center flex-grow-0 flex-shrink-0 mx-4 -ml-2`,
});

const StyledBanner = styled('div', {
  ...tw`flex px-6 py-4 my-4 text-sm leading-snug rounded`,

  variants: {
    type: {
      default: tw`text-gray-700 bg-gray-200`,
      info: {
        $$infoShadow: theme`colors.blue.200`,
        ...tw`text-blue-900 bg-blue-50`,
        boxShadow: 'inset 0 0 0 1px $$infoShadow',
      },
      warning: {
        $$warningShadow: theme`colors.orange.200`,
        boxShadow: 'inset 0 0 0 1px $$warningShadow',
        ...tw`text-orange-900 bg-orange-50`,
        '& a': {
          ...tw`text-orange-700`,
        },
      },
      danger: {
        $$dangerShadow: theme`colors.red.200`,
        ...tw`text-red-900 bg-red-50`,
        boxShadow: 'inset 0 0 0 1px $$dangerShadow',
        '& a': {
          ...tw`text-red-700`,
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
      return <Info />;
    case 'warning':
      return <AlertTriangle />;
    case 'danger':
      return <XOctagon />;
    default:
      return null;
  }
};
