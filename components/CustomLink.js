import Link from 'next/link';
import { FeatherIcon } from './Icon';

export default function CustomLink({
  className,
  title,
  href,
  external,
  icon,
  iconProps,
  children,
}) {
  const hasIcon = icon ? <FeatherIcon name={icon} {...iconProps} /> : '';
  return (
    <>
      {external ? (
        <a
          href={href}
          className={className}
          target="_blank"
          rel="noreferrer noopener"
        >
          {title} {hasIcon} {children}
        </a>
      ) : (
        <Link href={href}>
          <a className={className}>
            {title} {hasIcon} {children}
          </a>
        </Link>
      )}
    </>
  );
}
