import Image from 'next/image';
import Link from '@/components/Link';
import tw, { styled } from 'twin.macro';

const Figure = (props) => {
  const { src, alt, caption, aspectRatio, priority, unsplash } = props;
  return (
    <StyledFigure {...props}>
      <div className="object-cover aspect-video">
        <Image src={src} alt={alt} layout="fill" priority={priority} />
      </div>
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

const StyledFigure = styled('figure', {
  ...tw`relative`,
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
