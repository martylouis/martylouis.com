import Image from 'next/image';
import Link from 'next/link';
import tw, { styled } from 'twin.macro';

const Figure = ({ children, ...props }) => {
  const { src, alt, caption, unsplash } = props;

  {
    return (
      props && (
        <StyledFigure>
          <div>
            <Image src={src} alt={alt} priority layout="fill" />
          </div>
          <Figcaption>
            {unsplash ? <UnsplashCaption {...props} /> : <p>{caption}</p>}
          </Figcaption>
        </StyledFigure>
      )
    );
  }
};

export default Figure;

const StyledFigure = styled('figure', {
  ...tw`w-full mx-auto`,
  gridColumn: '2 / 3',

  '& > div': { ...tw`aspect-w-16 aspect-h-8` },
  '& img': { ...tw`object-cover rounded-lg` },
});

const Figcaption = styled('figcaption', {
  ...tw`flex items-center justify-center py-2 mb-8`,
  '& p': { ...tw`mt-1 text-xs tracking-wide text-gray-500 text-opacity-75` },
  '& a': { ...tw`underline hover:text-gray-600` },
});

const UnsplashCaption = ({ ...props }) => {
  const { unsplash, caption } = props;

  const photo_url = `https://unsplash.com/photos/${unsplash.id}`;
  const profile_url = `https://unsplash.com/@${unsplash.profile}`;
  console.log(caption);

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
