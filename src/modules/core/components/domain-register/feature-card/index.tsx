// CardSection.tsx
import React from 'react';

interface CardProps{
    title: string
    description: string
    link: string
    imageSrc: string
}

// Your Card component
const Card: React.FC<CardProps> = ({ title, description, link }) => (
<div className=" flex flex-col bg-white border border-t-4 border-t-blue-600 shadow-sm rounded-xl dark:bg-neutral-900 dark:border-neutral-700 dark:border-t-blue-500 dark:shadow-neutral-700/70">
  <div className="p-4 md:p-5">
    <h3 className="text-lg font-bold text-gray-800 dark:text-white">
      {title}
    </h3>
    <p className="mt-2 text-gray-500 dark:text-neutral-400">
     {description}
    </p>
    <a className="mt-3 inline-flex items-center gap-x-1 text-sm font-semibold rounded-lg border border-transparent text-blue-600 decoration-2 hover:text-blue-700 hover:underline focus:underline focus:outline-none focus:text-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:text-blue-500 dark:hover:text-blue-600 dark:focus:text-blue-600" href="#">
      {link}
      {/* <svg className="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="m9 18 6-6-6-6"></path>
      </svg> */}
    </a>
  </div>
</div>
);

// CardSection component
const DomainCardSection: React.FC = () => (
    <div className="bg-blue-500 p-4 flex flex-col items-center justify-center min-h-screen">
        <div className="heading mb-10">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 dark:text-white">
  Benefits of Having A Domain Name
</h1>

</div>
    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-2 max-w-5xl w-full">
      {/* Card 1 */}
      <Card
        title="Create Custom Email Account"
        description="With supporting text below as a natural lead-in to additional content."
        link=""
        imageSrc=""
      />
      {/* Card 2 */}
      <Card
        title="Easily Promote Your Business"
        description="With supporting text below as a natural lead-in to additional content."
        link=""
        imageSrc="https://via.placeholder.com/400x200?text=Image+2"
      />
      {/* Card 3 */}
      <Card
        title="Easily Promote Your Business"
        description="With supporting text below as a natural lead-in to additional content."
        link=""
        imageSrc="https://via.placeholder.com/400x200?text=Image+3"
      />
      {/* Card 4 */}
      <Card
        title="Easily Promote Your Business"
        description="With supporting text below as a natural lead-in to additional content."
        link=""
        imageSrc="https://via.placeholder.com/400x200?text=Image+4"
      />
    </div>
  </div>
);

export default DomainCardSection;
