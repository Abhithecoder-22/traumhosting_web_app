import React from 'react';

export interface Text {
  text: string;
}

const AboutSectionOne: React.FC = () => {
  const List: React.FC<Text> = ({ text }) => (
    <div className="border-b border-body-color/[.15] pb-4 mb-4 last:mb-0">
      <p className="flex items-center text-lg font-medium text-body-color">
        <span className="mr-4 flex h-[30px] w-[30px] items-center justify-center rounded-md bg-opacity-10 text-green">
          <i className="fas fa-check"></i>
        </span>
        {text}
      </p>
    </div>
  );

  return (
    <section id="about" className="pt-16 md:pt-20 lg:pt-28">
      <div className="container">
        <div className="border-b border-body-color/[.15] dark:border-white/[.15] md:pb-20 lg:pb-28">
          <div className="flex flex-wrap -mx-3">
            {/* Column 1 */}
            <div className="w-full px-3 sm:w-1/2 lg:w-1/4">
              <List text="Premium quality" />
              <List text="Tailwind CSS" />
              <List text="Use for lifetime" />
            </div>

            {/* Column 2 */}
            <div className="w-full px-3 sm:w-1/2 lg:w-1/4">
              <List text="Next.js" />
              <List text="Rich documentation" />
              <List text="Developer friendly" />
            </div>

            {/* Column 3 */}
            <div className="w-full px-3 sm:w-1/2 lg:w-1/4">
              <List text="Custom components" />
              <List text="Responsive design" />
              <List text="Optimized performance" />
            </div>

            {/* Column 4 */}
            <div className="w-full px-3 sm:w-1/2 lg:w-1/4">
              <List text="Easy integration" />
              <List text="Scalable architecture" />
              <List text="Secure code" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionOne;
