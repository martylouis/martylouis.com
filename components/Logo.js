import { SvgIcon } from './Icon';
import { martylouisLogo } from '../data/icons';

const Logo = (props) => {
  const { size, className } = props;
  return (
    <SvgIcon
      size={size}
      title="MartyLouis.com Logo"
      path={martylouisLogo}
      fill="currentColor"
      fillRule="evenodd"
      clipRule="evenodd"
      viewBox="0 0 256 256"
      className={className}
    />
  );
};

export default Logo;
