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
type MenuItem = 'wordpress' | 'reseller' | 'shared' | 'item4' | 'item5' | 'item6' | 'item7' | 'item8';

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

      const [hoveredItem, setHoveredItem] = React.useState<MenuItem | ''>('');

      // const [hoveredItem, setHoveredItem] = useState<MenuItem | ''>('');

      const images: { [key in MenuItem]: string } = {
        wordpress: 'https://www.ssldragon.com/wp-content/uploads/2023/05/web-hosting-trends.webp',
        reseller: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShc1mNFcmNwZoFfCtNpE0daKnhRvD-3tps3Q&s',
        shared: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiopL7E3AyV2cWFSYxFV_GHOmZz70HxrrPA1mweC_MkFwzm5AI-M4UmUKrE8N_4ZEiP2s&usqp=CAU',
        item4: 'https://www.serverbasket.com/wp-content/uploads/2017/01/30-Days-Risk-Free-Tier-4-Data-Center-Dedicated-Servers-In-India.png',
        item5: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_OjYdLIb1u-PF6-g1YSRz5MpGX0FvfzyqfA&s',
        item6: 'https://w7.pngwing.com/pngs/246/478/png-transparent-web-hosting-service-internet-hosting-service-dedicated-hosting-service-reseller-web-hosting-web-hosting-computer-network-web-design-internet-thumbnail.png',
        item7: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTH-6ZBky2spliwe9MPr9XIBKoFLi_H9bEXOmJKXjIoP8MKsJ-KPFKa90ydZ4dQRgnh5Ek&usqp=CAU',
        item8: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMrHKJHJSLtMEwCr5DOnXYv7AbCw00D33V0g&s',

      };
    
      const handleMouseEnter = (item: MenuItem) => {
        setHoveredItem(item);
      };
    
      const handleMouseLeave = () => {
        setHoveredItem('');
      };
    
      const menuItemsContent = [
        {
          menu: 'Hosting',
          items: [
            { title: 'Wordpress Hosting', description: 'Domain and hosting are two different things.', image: 'wordpress' },
            { title: 'Reseller Hosting', description: 'Domain and hosting are two different things but equally important to build a website.', image: 'reseller' },
          ]
        },
        {
          menu: 'Hosting',
          items: [
            { title: 'Item4 Hosting', description: 'Some description for item 4.', image: 'item4' },
            { title: 'Item5 Hosting', description: 'Some description for item 5.', image: 'item5' },
          ]
        },
        {
          menu: 'Hosting',
          items: [
            { title: 'Item7 Hosting', description: 'Some description for item 7.', image: 'item7' },
            { title: 'Item8 Hosting', description: 'Some description for item 8.', image: 'item8' },
          ]
        },
        {
          menu: 'Hosting',
          items: [
            { title: 'Item10 Hosting', description: 'Some description for item 10.', image: 'item10' },
            { title: 'Item11 Hosting', description: 'Some description for item 11.', image: 'item11' },
          ]
        }
      ];
    
  return (
    <nav className="nav">
 <div className="flex justify-between items-center px-[.3rem] py-[.3rem] header-bg">
      {/* <div className='logo_header'>
        <a href="/">Traumhosting</a>
      </div> */}
      {
        !isMobile &&(
          <div className='btn text-black font-bold text-2xl'>
            <a href="/">Traumhosting</a>
          </div>
        )
      }
      {
        !isMobile && (
          <NavigationMenu className="menu-list">
            <NavigationMenuList className="flex gap-0 p-0 m-0">
              {menuItemsContent.map((menuContent, index) => (
                <NavigationMenuItem key={index} className="p-2 m-0">
                  <NavigationMenuTrigger className="bg-transparent text-lg font-bold m-0 p-0">{menuContent.menu}</NavigationMenuTrigger>
                  <NavigationMenuContent className="p-0 m-0">
                    <ul className="grid gap-1 md:w-[800px] lg:w-[800px] lg:grid-cols-[.75fr_1fr]">
                      <li className="row-span-3">
                        <NavigationMenuLink asChild>
                          <img
                            src={hoveredItem ? images[hoveredItem] : 'https://www.ssldragon.com/wp-content/uploads/2023/05/web-hosting-trends.webp'}
                            style={{ width: '100%', height: '300px' }}
                            alt="Description of image"
                            className="object-cover rounded-md h-full p-2  custom-header-img-width mb-[-1rem] ml-2 lg:ml-4"
                          />
                        </NavigationMenuLink>
                      </li>
                      {menuContent.items.map((item, idx) => (
                        <ListItem
                          key={idx}
                          href="/docs"
                          title={item.title}
                          className="ml-2 lg:ml-4"
                          onMouseEnter={() => handleMouseEnter(item.image as MenuItem)}
                          onMouseLeave={handleMouseLeave}
                        >
                          {item.description}
                        </ListItem>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              ))}
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
    </div>
   {
    isMobile && (
      <div className='logo_header text-white'>
          <a href="/">Traumhosting</a>
        </div>
    )}
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
   </nav>
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
