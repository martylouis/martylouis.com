import { blog } from '@data/home';
import { PostPreview } from '@components/post';
import { H2 } from '@components/typography';

const Blog = () => (
  <section id="blog">
    <div className="container">
      <div className="py-16">
        <div className="my-4 text-center">
          <H2>{blog.heading}</H2>
        </div>
        {blog.items.map(({ title, preview, link, published }) => {
          return (
            <div key={title} className="my-4">
              <PostPreview
                title={title}
                preview={preview}
                link={link}
                date={published}
              />
            </div>
          );
        })}
      </div>
    </div>
  </section>
);

export default Blog;
