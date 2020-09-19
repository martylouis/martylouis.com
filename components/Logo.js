import { SvgIcon } from './Icon';
import { martylouisLogo } from '../data/icons';

const Logo = (props) => {
  const { className } = props;
  return (
    <SvgIcon
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
