import { Page } from '@components/layout';
import { ArrowLeft, ArrowRight, ArrowRightCircle } from 'react-feather';

const colors = {
  // #green
  green050: '#FBFDFC',
  green100: '#D6EDDA',
  green200: '#AFDDB8',
  green300: '#87CF95',
  green400: '#5EC371',
  green500: '#33B74C',
  green600: '#28933D',
  green700: '#1E6E2D',
  green800: '#144A1E',
  green900: '#0A250F',
};

const ColorTest = () => {
  return (
    <Page>
      <div className="grid grid-cols-2">
        <section className="p-8 bg-pgray-50">
          <div className="space-y-8">
            <h1 className="font-serif text-6xl text-pgray-800">
              This is the intro to an article
            </h1>
            <p className="leading-relaxed text-pgray-700">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Quibusdam, ipsa exercitationem! Hic in maiores numquam, aliquam
              suscipit omnis enim dolores architecto harum dignissimos
              repellendus aperiam commodi esse ipsam, eius molestiae.
            </p>
            <div className="inline-flex px-8 py-4 text-lg font-bold text-white bg-green-500 rounded-full">
              Button
            </div>
            <div className="flex justify-between">
              <a
                href="#"
                className="flex items-center px-2 py-1 space-x-4 leading-tight text-green-600 rounded hover:bg-green-100"
              >
                <ArrowLeft size="20" />
                <span>Prev</span>
              </a>
              <a
                href="#"
                className="flex items-center px-2 py-1 space-x-4 leading-tight text-right text-green-600 rounded hover:bg-green-100"
              >
                <span>Next</span> <ArrowRight size="20" />
              </a>
            </div>
          </div>
          <div className="py-8 space-y-8">
            <div>
              <div className="h-px opacity-75 bg-pgray-100"></div>
              <div className="h-px bg-pgray-200"></div>
            </div>
            <div className="h-px bg-pgray-200"></div>
            <div className="h-px bg-pgray-300"></div>
            <div className="h-px bg-pgray-400"></div>
            <div className="h-px bg-pgray-500"></div>
            <div className="h-px bg-pgray-600"></div>
            <div className="h-px bg-pgray-700"></div>
            <div className="h-px bg-pgray-800"></div>
            <div className="h-px bg-pgray-900"></div>
          </div>
        </section>
        <section className="p-8 bg-pgray-800">
          <div className="space-y-8">
            <h1 className="font-serif text-6xl text-pgray-50">
              This is the intro to an article
            </h1>
            <p className="leading-relaxed text-pgray-200">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Quibusdam, ipsa exercitationem! Hic in maiores numquam, aliquam
              suscipit omnis enim dolores architecto harum dignissimos
              repellendus aperiam commodi esse ipsam, eius molestiae.
            </p>
            <div className="inline-flex px-8 py-4 text-lg font-bold text-white bg-green-500 rounded-full">
              Button
            </div>
            <div className="flex justify-between">
              <a
                href="#"
                className="flex items-center px-2 py-1 space-x-4 leading-tight text-green-600 rounded hover:bg-green-800"
              >
                <ArrowLeft size="20" />
                <span>Prev</span>
              </a>
              <a
                href="#"
                className="flex items-center px-2 py-1 space-x-4 leading-tight text-right text-green-600 rounded hover:bg-green-800"
              >
                <span>Next</span> <ArrowRight size="20" />
              </a>
            </div>
          </div>
          <div className="py-8 space-y-8">
            <div className="h-px bg-pgray-700"></div>
            <div className="h-px bg-pgray-600"></div>
            <div className="h-px bg-pgray-500"></div>
            <div className="h-px bg-pgray-400"></div>
            <div className="h-px bg-pgray-300"></div>
            <div className="h-px bg-pgray-200"></div>
            <div className="h-px bg-pgray-100"></div>
            <div className="h-px bg-pgray-50"></div>
          </div>
        </section>
      </div>
    </Page>
  );
};

export default ColorTest;
