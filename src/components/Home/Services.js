// import Link from 'next/link';
import { services } from '@data/home';
import Emoji from '@components/emoji';
import { H2, H3 } from '@components/typography';

const Services = () => (
  <section id="services">
    <div className="container">
      <div className="text-center">
        <H2>{services.header.heading}</H2>
        <p className="mt-4 text-xl text-gray-700">
          {services.header.subheading}
        </p>
      </div>
      <div className="mt-8 gap-x-16 sm:grid sm:grid-cols-2">
        {services.items.map(({ title, emoji, desc, link }) => (
          <div key={title} className="mt-8">
            <div className="text-4xl">
              <Emoji type={emoji.type} ariaLabel={emoji.label} />
            </div>
            <H3 className="mt-2">{title}</H3>
            <p className="mt-2 text-gray-700">{desc}</p>
            {/* <p className="mt-2">
              <Link href={link}>
                <a className="font-semibold text-green-600">
                  Learn more &rarr;
                </a>
              </Link>
            </p> */}
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Services;
