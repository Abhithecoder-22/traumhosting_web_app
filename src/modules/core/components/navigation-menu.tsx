"use client"

import * as React from "react"


import { cn } from "../../../shadcn/lib/utils"
import './header.css'


import {  NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle, } from "../../../shadcn/components/ui/navigation-menu"

const components: { title: string; href: string; description: string; src: string }[] = [
  {
    title: "Shared Hosting ",
    href: "/docs/primitives/alert-dialog",
    description:
      "A modal dialog that interrupts the user with important content and expects a response.",
      src: 'https://deep-image.ai/_next/static/media/app-info-generator.bf08e63e.webp'
  },
  {
    title: " WordPress Hosting",
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
  return (
   <div className="flex justify-between items-center px-[1rem] py-[.6rem]">
      <div className='logo_header'>
          <img
            src='/img/best-logo.png'
            alt='logo'
          />
        </div>
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
          {/* <NavigationMenuTrigger>Components</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
              {components.map((component) => (
                
               
                <div
                  key={component.title}
        
                >
                 <div className="flex">
                    <div className="w-[600px] h-[60px] border-[1px] border-[red]">
                        <img src='/img/best-logo.png' className="w-[100%] h-[100%]" alt="logo"/>
                    </div>
                    <p>{component.description}</p>
                    </div>  
                 
                    </div>
              ))}
            </ul>
          </NavigationMenuContent> */}
        </NavigationMenuItem>
        <NavigationMenuItem>
          {/* <Link href="/docs" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Documentation
            </NavigationMenuLink>
          </Link> */}
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
    <div className='btn'>
          <button className='login_btn rounded-[5px] bg-[#ff0066] color-[#fff] px-[20px] py-[10px]'>Login</button>
        </div>
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
