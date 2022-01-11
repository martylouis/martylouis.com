import Image from 'next/image';
import Link from '@components/Link';
import tw, { styled } from 'twin.macro';
import Container from './Container';

const Figure = (props) => {
  const { src, alt, caption, aspectRatio, priority, unsplash } = props;
  return (
    <StyledFigure {...props}>
      <StyledFigureImageWrapper aspectRatio={aspectRatio}>
        <Image src={src} alt={alt} layout="fill" priority={priority} />
      </StyledFigureImageWrapper>
      <StyledFigCaption>
        {unsplash ? (
          <UnsplashCaption caption={caption} {...unsplash} />
        ) : (
          <p>{caption}</p>
        )}
      </StyledFigCaption>
    </StyledFigure>
  );
};

export default Figure;

const StyledFigure = styled('figure', {});

const StyledFigureImageWrapper = styled('div', {
  '& img': { ...tw`object-cover` },

  variants: {
    aspectRatio: {
      landscape: { ...tw`aspect-w-16 aspect-h-9` },
      portrait: { ...tw`aspect-w-4 aspect-h-3` },
      square: { ...tw`aspect-w-1 aspect-h-1` },
    },
  },

  defaultVariants: {
    aspectRatio: 'landscape',
  },
});

const StyledFigCaption = styled('figcaption', {
  ...tw`flex items-center justify-center mb-4`,
  '& p': {
    ...tw`my-2 text-xs tracking-wide text-gray-600 text-opacity-90 dark:(text-gray-500)`,
  },
  '& a': { ...tw`underline hover:text-gray-700 dark:hover:text-gray-400` },
});

const UnsplashCaption = ({ caption, ...unsplash }) => {
  const photo_url = `https://unsplash.com/photos/${unsplash.id}`;
  const profile_url = `https://unsplash.com/@${unsplash.profile}`;

  return (
    <p>
      <UnsplashLink href={photo_url}>{caption}</UnsplashLink> by{' '}
      <UnsplashLink href={profile_url}>{unsplash.profile}</UnsplashLink>
    </p>
  );
};

const UnsplashLink = ({ href, children }) => {
  return (
    <Link href={href} svgSize="12px">
      {children}
    </Link>
  );
};
