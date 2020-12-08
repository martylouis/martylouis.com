import { H2, H3 } from '@components/typography';
import { projects } from '@data/home';

const Projects = () => (
  <section id="projects">
    <div className="container">
      <div className="pt-16">
        <div className="my-8 text-center">
          <H2>Featured Projects</H2>
        </div>
        <div className="grid grid-cols-2 gap-8">
          {projects.map(({ title, img }) => (
            <div key={title} className="flex flex-col">
              <div className="w-full h-full">
                <img
                  className="object-cover max-w-full overflow-hidden rounded-xl"
                  src={img}
                  alt=""
                  width="300"
                  height="300"
                />
                <div className="mt-2">
                  <H3>{title}</H3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default Projects;
