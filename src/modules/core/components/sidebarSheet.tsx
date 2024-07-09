import { Button } from "../../../shadcn/components/ui/button"
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
import { NavigationMenuDemo } from "./navigation-menu"

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
        <AccordionTrigger>Is it accessible?</AccordionTrigger>
        <AccordionContent>
          Yes. It adheres to the WAI-ARIA design pattern.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2" className="!border-none">
        <AccordionTrigger>Is it styled?</AccordionTrigger>
        <AccordionContent>
        <section className="section">
      <div className="section__container">
        <div className="section__logo">
          <img src="/img/best-logo.png" alt="Logo" />
        </div>
        <div className="section__content">
          {/* <h2 className="section__header">Header</h2> */}
          <p className="section__description">
            This section.
          </p>
        </div>
      </div>
    </section>
        <section className="section">
      <div className="section__container">
        <div className="section__logo">
          <img src="/img/best-logo.png" alt="Logo" />
        </div>
        <div className="section__content">
          {/* <h2 className="section__header">Header</h2> */}
          <p className="section__description">
            This is the description for the section.
          </p>
        </div>
      </div>
    </section>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3"className="!border-none">
        <AccordionTrigger>Is it animated?</AccordionTrigger>
        <AccordionContent>
          Yes. It&apos;s animated by default, but you can disable it if you
          prefer.
        </AccordionContent>
      </AccordionItem>
    </Accordion>

        </div> 
       
       
      </SheetContent>
    </Sheet>
  )
}
