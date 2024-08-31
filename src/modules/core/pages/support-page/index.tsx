import React from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../../../../shadcn/components/ui/accordion';
import FirstHeader from '../../components/first-header';
import { NavigationMenuDemo } from '../../components/header';
import Footer from '../../components/footer';


interface FAQItem {
  title: string;
  content: string;
}

interface ImageItem {
  src: string;
  alt: string;
  title: string;
  text: string;
}

const Suport: React.FC = () => {
  // Define the FAQ items
  const faqItems: FAQItem[] = [
    { title: 'Popular articles', content: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat, ex. Expedita sunt enim, vel amet cumque nulla illum harum. Similique!' },
    { title: 'Fix problems & request removals', content: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat, ex. Expedita sunt enim, vel amet cumque nulla illum harum. Similique!' },
    { title: 'Browse the web', content: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat, ex. Expedita sunt enim, vel amet cumque nulla illum harum. Similique!' },
    { title: 'Search on your phone or tablet', content: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat, ex. Expedita sunt enim, vel amet cumque nulla illum harum. Similique!' },
  ];

  // Define the images
  const images: ImageItem[] = [
    { src: 'https://images.unsplash.com/45/QDSMoAMTYaZoXpcwBjsL__DSC0104-1.jpg', alt: 'Contact with Customer support', title: 'Contact with Customer support', text: 'Customer support' },
    { src: 'https://images.unsplash.com/photo-1423666639041-f56000c27a9a', alt: 'Send message to support desk', title: 'Send message to support desk', text: 'Send message' },
    { src: 'https://images.unsplash.com/photo-1488998427799-e3362cec87c3', alt: 'Write your feedback', title: 'Write your feedback', text: 'Write feedback' },
  ];

  return (
    <div className="">
        {/* <div className='fixed top-0  left-0 right-0'>
        <FirstHeader/>
        <div className=' rounded-lg shadow-md'>
        <NavigationMenuDemo/>
        </div>
        </div> */}
       
        <FirstHeader/>
   
        <NavigationMenuDemo/>
      
        
      <div className="container mx-auto px-4 sm:px-8 max-w-3xl">
        <div className="main-title mb-8">
          <h1 className="font-bold text-2xl text-center mt-40">How can we help you?</h1>
        </div>

      

        <div className="main-question mb-8 flex flex-col divide-y text-gray-800 text-base">
          <Accordion type="single" collapsible>
            {faqItems.map((item, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="flex items-center justify-between">
                  <h4 className="text-base font-semibold">{item.title}</h4>
                
                </AccordionTrigger>
                <AccordionContent className="mt-3 text-gray-600">
                  {item.content}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="main-images mb-8">
          <div className="images grid grid-cols-1 md:grid-cols-3 gap-8">
            {images.map((image, index) => (
              <div key={index} className="image bg-white rounded-lg shadow-lg overflow-hidden">
                <a href="#">
                  <img src={image.src} alt={image.alt} title={image.title} />
                  <span className="text-center p-2 text-gray-700 text-sm inline-block w-full">{image.text}</span>
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer/>
    </div>
   
  );
};

export default Suport;
