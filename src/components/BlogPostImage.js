import Image from 'next/image';

const BlogPostImage = ({ image, children }) => {
  const { src, alt, caption, unsplash } = image;

  {
    return (
      image && (
        <figure className="my-4 full-bleed">
          <div className="relative aspect-w-16 aspect-h-8">
            <Image
              src={src}
              alt={alt}
              priority
              layout="fill"
              className="object-cover rounded"
            />
          </div>
          <figcaption className="p-3 text-center">
            {caption && (
              <p className="tracking-wide text-gray-700">{caption}</p>
            )}
            {unsplash && (
              <p className="mt-2 text-sm tracking-wide text-gray-400">
                Photo by{' '}
                <a
                  href={`https://unsplash.com/@${unsplash.profile}`}
                  rel="noopener nofollow"
                  className="underline"
                >
                  {unsplash.profile}
                </a>{' '}
                on{' '}
                <a
                  href={`https://unsplash.com/photos/${unsplash.id}`}
                  rel="noopener nofollow"
                  className="underline"
                >
                  Unsplash
                </a>
              </p>
            )}
          </figcaption>
        </figure>
      )
    );
  }
};

export default BlogPostImage;
