import Image from 'next/image';
import Link from 'next/link';
import tw, { styled } from 'twin.macro';
import Container from './Container';

const Figure = (props) => {
  const { src, alt, caption, frame, priority, unsplash } = props;
  return (
    <figure>
      <StyledFigureImageWrapper frame={frame}>
        <Image src={src} alt={alt} layout="fill" priority={priority} />
      </StyledFigureImageWrapper>
      <StyledFigCaption>
        {unsplash ? (
          <UnsplashCaption caption={caption} {...unsplash} />
        ) : (
          <p>{caption}</p>
        )}
      </StyledFigCaption>
    </figure>
  );
};

export default Figure;

const StyledFigureImageWrapper = styled('div', {
  '& img': { ...tw`object-cover` },

  variants: {
    frame: {
      landscape: { ...tw`aspect-w-16 aspect-h-9` },
      portrait: { ...tw`aspect-w-4 aspect-h-3` },
      square: { ...tw`aspect-w-1 aspect-h-1` },
    },
  },

  defaultVariants: {
    frame: 'landscape',
  },
});

const StyledFigCaption = styled('figcaption', {
  ...tw`flex items-center justify-center mb-4`,
  '& p': { ...tw`my-4 text-xs tracking-wide text-gray-500 text-opacity-75` },
  '& a': { ...tw`underline hover:text-gray-600` },
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
    <Link href={href} rel="noopener nofollow">
      <a>{children}</a>
    </Link>
  );
};
