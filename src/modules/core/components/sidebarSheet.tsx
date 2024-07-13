// import { Button } from "../../../shadcn/components/ui/button"
import './sidebar.css'

import {  Sheet,

    SheetContent,
   
    } from "../../../shadcn/components/ui/sheet"
    import {
        Accordion,
        AccordionContent,
        AccordionItem,
        AccordionTrigger,
      } from "../../../shadcn/components/ui/accordion"
// import { NavigationMenuDemo } from "./navigation-menu"

    interface ISideBarSheetProps{
        isMenuOpen:boolean
        setIsMenuOpen:React.Dispatch<React.SetStateAction<boolean>>
    }

export function SideBarSheet({isMenuOpen,setIsMenuOpen}:ISideBarSheetProps) {
  return (
    <Sheet
     open={isMenuOpen}
     onOpenChange={setIsMenuOpen}
    >
      <SheetContent className="w-[100%]">

       <div className="mt-4 ">
       <Accordion type="single" collapsible className="w-full">
      <AccordionItem value="item-1" className="!border-none">
        <AccordionTrigger className='text-2xl font-bold bg-transparent'>Hosting</AccordionTrigger>
        <AccordionContent>
        <section className="section">
      <div className="section__container">
        <div className="section__logo">
          <img src="https://cdn-icons-png.flaticon.com/512/3098/3098132.png" alt="Logo" />
        </div>
        <div className="section__content">
          <h2 className="section__header">Wordpress Hosting</h2>
          <p className="section__description">
            Hosting is Website host
          </p>
        </div>
      </div>
    </section>
        <section className="section">
      <div className="section__container">
        <div className="section__logo">
          <img src="https://cdn-icons-png.flaticon.com/512/3098/3098132.png" alt="Logo" />
        </div>
        <div className="section__content">
          <h2 className="section__header">Header</h2>
          <p className="section__description">
            This is the description for the section.
          </p>
        </div>
      </div>
    </section>
        </AccordionContent>
      </AccordionItem>
      <hr className="accordion-divider" />
      <AccordionItem value="item-2" className="!border-none">
        <AccordionTrigger className='text-2xl font-bold'>Dedicated Server</AccordionTrigger>
        <AccordionContent>
        <section className="section">
      <div className="section__container">
        <div className="section__logo">
          <img src="https://cdn-icons-png.flaticon.com/512/3098/3098132.png" alt="Logo" />
        </div>
        <div className="section__content">
          <h2 className="section__header">Indian Server</h2>
          <p className="section__description">
            Hosting is Website host
          </p>
        </div>
      </div>
    </section>
        <section className="section">
      <div className="section__container">
        <div className="section__logo">
          <img src="https://cdn-icons-png.flaticon.com/512/3098/3098132.png" alt="Logo" />
        </div>
        <div className="section__content">
          <h2 className="section__header">German Server</h2>
          <p className="section__description">
            This is the description for the section.
          </p>
        </div>
      </div>
    </section>
        <section className="section">
      <div className="section__container">
        <div className="section__logo">
          <img src="https://cdn-icons-png.flaticon.com/512/3098/3098132.png" alt="Logo" />
        </div>
        <div className="section__content">
          <h2 className="section__header">US Server</h2>
          <p className="section__description">
            This is the description for the section.
          </p>
        </div>
      </div>
    </section>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3" className="!border-none">
        <AccordionTrigger className='text-2xl font-bold'>VPS Server</AccordionTrigger>
        <AccordionContent>
        <section className="section">
      <div className="section__container">
        <div className="section__logo">
          <img src="https://cdn-icons-png.flaticon.com/512/3098/3098132.png" alt="Logo" />
        </div>
        <div className="section__content">
          <h2 className="section__header">Indian</h2>
          <p className="section__description">
            Hosting is Website host
          </p>
        </div>
      </div>
    </section>
        <section className="section">
      <div className="section__container">
        <div className="section__logo">
          <img src="https://cdn-icons-png.flaticon.com/512/3098/3098132.png" alt="Logo" />
        </div>
        <div className="section__content">
          <h2 className="section__header">German</h2>
          <p className="section__description">
            This is the description for the section.
          </p>
        </div>
      </div>
    </section>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-4" className="!border-none">
        <AccordionTrigger className='text-2xl font-bold'>Cloud Server</AccordionTrigger>
        <AccordionContent>
        <section className="section">
      <div className="section__container">
        <div className="section__logo">
          <img src="https://cdn-icons-png.flaticon.com/512/3098/3098132.png" alt="Logo" />
        </div>
        <div className="section__content">
          <h2 className="section__header">Indian</h2>
          <p className="section__description">
            Hosting is Website host
          </p>
        </div>
      </div>
    </section>
        <section className="section">
      <div className="section__container">
        <div className="section__logo">
          <img src="https://cdn-icons-png.flaticon.com/512/3098/3098132.png" alt="Logo" />
        </div>
        <div className="section__content">
          <h2 className="section__header">German</h2>
          <p className="section__description">
            This is the description for the section.
          </p>
        </div>
      </div>
    </section>
        </AccordionContent>
      </AccordionItem>
    </Accordion>

        </div> 
       
       
      </SheetContent>
    </Sheet>
  )
}
