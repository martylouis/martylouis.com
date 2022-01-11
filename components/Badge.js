import tw, { styled } from 'twin.macro';

const Badge = ({ children, ...props }) => {
  return <StyledBadge {...props}>{children}</StyledBadge>;
};

export default Badge;

const StyledBadge = styled('div', {
  ...tw`inline-flex items-center font-bold leading-none capitalize rounded-sm`,

  variants: {
    size: {
      xs: {
        ...tw`h-5 leading-none tracking-wider px-1.5 mr-1`,
        fontSize: '12px',
      },
      sm: { ...tw`h-6 px-2 text-xs leading-none tracking-wide mr-1.5` },
      lg: { ...tw`px-3 mr-2 leading-none h-7` },
    },
    color: {
      gray: {
        ...tw`text-gray-600 bg-gray-300 bg-opacity-75`,
      },
      // 'gray-dark': {
      //   ...tw`text-gray-400 bg-gray-800 bg-opacity-75`,
      // },
    },
  },

  defaultVariants: {
    size: 'xs',
    color: 'gray',
  },
});
