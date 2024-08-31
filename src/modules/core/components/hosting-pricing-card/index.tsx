import React from 'react';
// import SectionTitle from '../wordpress-hosting/Common/SectionTitle';

interface PricingCardProps {
    title: string;
    price: string;
    features: string[];
    highlight?: boolean;
  }

const HostingPricingCard:React.FC<PricingCardProps> = ({ title, price, features, highlight=false }) => {
  return (
    <>
 
    <div className={`flex flex-col border ${highlight ? 'border-blue-600 shadow-xl' : 'border-gray-200'} text-center rounded-xl p-8`}>
      {highlight && <p className="mb-3">
        <span className="inline-flex items-center gap-1.5 py-1.5 px-3 rounded-lg text-xs uppercase font-semibold bg-blue-100 text-blue-800 dark:bg-blue-600 dark:text-white">
          Most popular
        </span>
      </p>}
      <h4 className="font-medium text-lg text-gray-800 text-body-color">{title}</h4>
      <span className="mt-5 font-bold text-2xl text-gray-800 text-body-color">
        <span className="font-bold text-2xl "></span>{price}
      </span>
      <p className="mt-2 text-sm text-gray-500 dark:text-neutral-500">Details about the plan</p>
      <ul className="mt-7 space-y-2.5 text-sm">
        {features.map((feature, index) => (
          <li key={index} className="flex gap-x-2">
            <svg className="shrink-0 mt-0.5 size-4 text-blue-600 dark:text-blue-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="20 6 9 17 4 12"/>
            </svg>
            <span className="text-gray-800 dark:text-neutral-700">{feature}</span>
          </li>
        ))}
      </ul>
      <a className="mt-5 py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:bg-blue-700" href="#">
       Choose Plan
      </a>
    </div>
    </>
  );
};

export default HostingPricingCard;
