"use client"

import * as React from "react"


import { cn } from "../../../shadcn/lib/utils"
import './header.css'
import { Menu } from 'lucide-react';
import { SideBarSheet } from "./sidebarSheet";


import {  NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle, } from "../../../shadcn/components/ui/navigation-menu"

const components: { title: string; href: string; description: string; src: string }[] = [
  {
    title: "Shared Hosting     ",
    href: "/docs/primitives/alert-dialog",
    description:
      "A modal dialog that interrupts the user with important content and expects a response.",
      src: 'https://deep-image.ai/_next/static/media/app-info-generator.bf08e63e.webp'
  },
  {
    title: "WordPress Hosting",
    href: "/docs/primitives/hover-card",
    description:
      "For sighted users to preview content available behind a link.",
      src: 'https://deep-image.ai/_next/static/media/app-info-generator.bf08e63e.webp'
  },
  {
    title: " Reseller Hosting  ",
    href: "/docs/primitives/progress",
    description:
      "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
      src: 'https://deep-image.ai/_next/static/media/app-info-generator.bf08e63e.webp'
  },

]

export function NavigationMenuDemo() {
    const [isMobile,setIsMobile]=React.useState(false)
    const [isMenuOpen,setIsMenuOpen]=React.useState(false)
    React.useEffect(() => {
        const handleResize = () => {
          setIsMobile(window.innerWidth <= 600);
        };
    
        handleResize();
    
        window.addEventListener('resize', handleResize);
    
        return () => {
          window.removeEventListener('resize', handleResize);
        };
      }, []);
  return (
   <div className="flex justify-between items-center px-[1rem] py-[.6rem]">
      <div className='logo_header'>
          <img
            src='/img/best-logo.png'
            alt='logo'
          />
        </div>
   {
    !isMobile && (
        <NavigationMenu>
        <NavigationMenuList className="gap-[1.5rem]">
          <NavigationMenuItem>
            <NavigationMenuTrigger>Hosting</NavigationMenuTrigger>
            <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                {components.map((component) => (
                  <ListItem
                    key={component.title}
                    title={component.title}
                    href={component.href}
                  >
                    {component.description}
                  </ListItem>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Hosting</NavigationMenuTrigger>
            <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                {components.map((component) => (
                  <ListItem
                    key={component.title}
                    title={component.title}
                    href={component.href}
                  >
                    {component.description}
                  </ListItem>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Hosting</NavigationMenuTrigger>
            <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                {components.map((component) => (
                  <ListItem
                    key={component.title}
                    title={component.title}
                    href={component.href}
                  >
                    {component.description}
                  </ListItem>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Hosting</NavigationMenuTrigger>
            <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                {components.map((component) => (
                  <ListItem
                    key={component.title}
                    title={component.title}
                    href={component.href}
                  >
                    {component.description}
                  </ListItem>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
         
          <NavigationMenuItem>
          
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    )
   }
   {
    !isMobile && (
        <div className='btn'>
        <button className='login_btn rounded-[5px] bg-[#ff0066] color-[#fff] px-[20px] py-[10px]'>Login</button>
      </div>
    )
   }
   {
    isMobile && (
        <span
        onClick={()=>{
            setIsMenuOpen(!isMenuOpen)
        }}
        className="cursor-pointer"
        ><Menu size={30}/></span>
    )
   }
   <SideBarSheet
   isMenuOpen={isMenuOpen}
   setIsMenuOpen={setIsMenuOpen}
   />
   </div>
  )
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
         <div className="flex items-center gap-[10px]">

           <img src="/img/best-logo.png" alt="logo" className="w-[40px] h-[40px]"/>
         <div>
         <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
         </div>
         </div>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"
