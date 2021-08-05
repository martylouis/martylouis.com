import { default as NextLink } from 'next/link';
import Error from 'next/error';
import { ArrowUpRight, ExternalLink } from 'react-feather';
import tw, { css, styled } from 'twin.macro';

const Action = ({ svgSize = '16px', ...props }) => {
  const { href, children, target, ...rest } = props;

  const isExternal =
    (href.includes('http') && !href.includes('martylouis.com')) ||
    props.target === '_blank';

  return (
    <NextLink {...rest} href={href} passHref={true}>
      <a
        target={isExternal ? '_blank' : undefined || target}
        rel={isExternal ? 'noopener noreferrer' : undefined}
        css={{
          ...tw`underline`,
          textUnderlineOffset: '1px',
          textDecorationColor: 'currentColor',
        }}
        {...rest}
      >
        {isExternal ? (
          <>
            <span>{children}</span>
            <ExternalLink
              strokeWidth="2"
              size={svgSize}
              aria-hidden="true"
              focusable="false"
              css={{
                ...tw`inline-block ml-1 align-middle stroke-current`,
              }}
            />
            <span tw="sr-only">(opens in a new tab)</span>
          </>
        ) : (
          <>{children}</>
        )}
      </a>
    </NextLink>
  );
};

export default Action;
