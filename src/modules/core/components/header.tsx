"use client"

import * as React from "react"


import { cn } from "../../../shadcn/lib/utils"
import './header.css'
import { Menu } from 'lucide-react';
import { SideBarSheet } from "./sidebarSheet";
import '../../../assets/css/bootstrap.css';
import '../../../assets/css/style.css'; 
import '../../../assets/css/responsive.css';


import {  NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
     } from "../../../shadcn/components/ui/navigation-menu"
import { Button } from "../../../shadcn/components/ui/button";

// const components: { title: string; href: string; description: string; src: string }[] = [
//   {
//     title: "Shared Hosting     ",
//     href: "/docs/primitives/alert-dialog",
//     description:
//       "A modal dialog that interrupts ",
//       src: 'https://deep-image.ai/_next/static/media/app-info-generator.bf08e63e.webp'
//   },
//   {
//     title: "WordPress Hosting",
//     href: "/docs/primitives/hover-card",
//     description:
//       "For sighted users to preview",
//       src: 'https://deep-image.ai/_next/static/media/app-info-generator.bf08e63e.webp'
//   },
//   {
//     title: " Reseller Hosting  ",
//     href: "/docs/primitives/progress",
//     description:
//       "Displays an indicator ",
//       src: 'https://deep-image.ai/_next/static/media/app-info-generator.bf08e63e.webp'
//   },

// ]

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
          {/* <img
            src='https://traumhosting.in/images/s1.png'
            alt='logo'
          /> */}
          <a href="/">Traumhosting</a>
        </div>
   {
    !isMobile && (
        <NavigationMenu>
        <NavigationMenuList className="gap-[1.5rem]">
          {/* <NavigationMenuItem>
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
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]  ">
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
          </NavigationMenuItem> */}
          <NavigationMenuItem>
  <NavigationMenuTrigger>Hosting</NavigationMenuTrigger>
  <NavigationMenuContent>
    <ul className="grid gap-1 md:w-[800px] lg:w-[800px] lg:grid-cols-[.75fr_1fr]">
      <li className="row-span-3">
        <NavigationMenuLink asChild>
          <img
            src="https://www.ssldragon.com/wp-content/uploads/2023/05/web-hosting-trends.webp"
            alt="Description of image"
            className="object-cover rounded-md h-full custom-header-img-width mb-[-1rem] ml-2 lg:ml-4" // Adjust margin left for larger screens
          />
        </NavigationMenuLink>
      </li>
      <ListItem href="/docs" title="Wordpress Hosting" className="ml-2 lg:ml-4"> {/* Adjust margin left for larger screens */}
      Domain and hosting are two different things
      </ListItem>
      <ListItem href="/docs/installation" title="Reseller Hosting" className="ml-2 lg:ml-4"> {/* Adjust margin left for larger screens */}
      Domain and hosting are two different things but equally important to build a website.
      </ListItem>
      <ListItem href="/docs/primitives/typography" title="Shared Hosting" className="ml-2 lg:ml-4"> {/* Adjust margin left for larger screens */}
      Domain and hosting are two different things but equally important to build a website.
      </ListItem>
    </ul>
  </NavigationMenuContent>
</NavigationMenuItem>
          <NavigationMenuItem>
  <NavigationMenuTrigger>VPS Server</NavigationMenuTrigger>
  <NavigationMenuContent>
    <ul className="grid gap-1 md:w-[800px] lg:w-[800px] lg:grid-cols-[.75fr_1fr]">
      <li className="row-span-3">
        <NavigationMenuLink asChild>
          <img
            src="https://www.ssldragon.com/wp-content/uploads/2023/05/web-hosting-trends.webp"
            alt="Description of image"
            className="object-cover rounded-md h-full custom-header-img-width mb-[-1rem] ml-2 lg:ml-4" // Adjust margin left for larger screens
          />
        </NavigationMenuLink>
      </li>
      <ListItem href="/docs" title="Indian Server" className="ml-2 lg:ml-4"> {/* Adjust margin left for larger screens */}
      Domain and hosting are two different things but equally important to build a website.
      </ListItem>
      <ListItem href="/docs/installation" title="US Server" className="ml-2 lg:ml-4"> {/* Adjust margin left for larger screens */}
      Domain and hosting are two different things but equally important to build a website.
      </ListItem>
      <ListItem href="/docs/primitives/typography" title="German Server" className="ml-2 lg:ml-4"> {/* Adjust margin left for larger screens */}
      Domain and hosting are two different things but equally important to build a website.
      </ListItem>
    </ul>
  </NavigationMenuContent>
</NavigationMenuItem>
          <NavigationMenuItem>
  <NavigationMenuTrigger>Dedicated Server</NavigationMenuTrigger>
  <NavigationMenuContent>
    <ul className="grid gap-1 md:w-[800px] lg:w-[800px] lg:grid-cols-[.75fr_1fr]">
      <li className="row-span-3">
        <NavigationMenuLink asChild>
          <img
            src="https://www.ssldragon.com/wp-content/uploads/2023/05/web-hosting-trends.webp"
            alt="Description of image"
            className="object-cover rounded-md h-full custom-header-img-width mb-[-1rem] ml-2 lg:ml-4" // Adjust margin left for larger screens
          />
        </NavigationMenuLink>
      </li>
      <ListItem href="/docs" title="Indian Server" className="ml-2 lg:ml-4"> {/* Adjust margin left for larger screens */}
      Domain and hosting are two different things but equally important to build a website.
      </ListItem>
      <ListItem href="/docs/installation" title="German Server" className="ml-2 lg:ml-4"> {/* Adjust margin left for larger screens */}
      Domain and hosting are two different things but equally important to build a website.
      </ListItem>

    </ul>
  </NavigationMenuContent>
</NavigationMenuItem>
          <NavigationMenuItem>
  <NavigationMenuTrigger>Cloud Server</NavigationMenuTrigger>
  <NavigationMenuContent>
    <ul className="grid gap-1 md:w-[800px] lg:w-[800px] lg:grid-cols-[.75fr_1fr]">
      <li className="row-span-3">
        <NavigationMenuLink asChild>
          <img
            src="https://www.ssldragon.com/wp-content/uploads/2023/05/web-hosting-trends.webp"
            alt="Description of image"
            className="object-cover rounded-md h-full custom-header-img-width mb-[-1rem] ml-2 lg:ml-4" // Adjust margin left for larger screens
          />
        </NavigationMenuLink>
      </li>
      <ListItem href="/docs" title="Indian" className="ml-2 lg:ml-4"> {/* Adjust margin left for larger screens */}
      Domain and hosting are two different things but equally important to build a website.
      </ListItem>
      <ListItem href="/docs/installation" title="German" className="ml-2 lg:ml-4"> {/* Adjust margin left for larger screens */}
      Domain and hosting are two different things but equally important to build a website.
      </ListItem>
     
    </ul>
  </NavigationMenuContent>
</NavigationMenuItem>


        </NavigationMenuList>
      </NavigationMenu>
    )
   }
   {
    !isMobile && (
        <div className='btn'>
        <Button variant='default' className='login_btn rounded-[5px] bg-[#ff0066] color-[#fff] px-[20px] py-[10px]'>Mailing System</Button>
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

           <img src="https://img.favpng.com/15/14/12/web-hosting-service-software-development-computer-servers-mobile-app-development-cloud-computing-png-favpng-wsQBRC3tFTyNqe3SgtApn2X93.jpg" alt="logo" className="w-[60px] h-[40px]"/>
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
