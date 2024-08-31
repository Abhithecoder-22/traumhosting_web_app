"use client"

import * as React from "react"


import { cn } from "../../../shadcn/lib/utils"
import './header.css'
import { Menu } from 'lucide-react';
import { SideBarSheet } from "./sidebarSheet";
import '../../../assets/css/bootstrap.css';
import '../../../assets/css/style.css';
import '../../../assets/css/responsive.css';


import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "../../../shadcn/components/ui/navigation-menu"
import { Button } from "../../../shadcn/components/ui/button";
// import { Route } from "react-router-dom";
// import { Button } from "../../../shadcn/components/ui/button";

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
// type MenuItem = 'domain1' | 'domain2' | 'w1' | 'w2' | 'VPS1' | 'VPS2' | 'VPS3' | 'D1' | 'D2'  | 'C1' | 'C2';

export function NavigationMenuDemo() {
  const [isMobile, setIsMobile] = React.useState(false)
  const [isMenuOpen, setIsMenuOpen] = React.useState(false)
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

  const menuItemsContent = [
    {
      menu: 'Domain',
      items: [
        {
          title: 'Domain Register',
          description: 'Register your domain easily. Domain is first step in building your online presence.',
          image: 'https://w7.pngwing.com/pngs/1019/352/png-transparent-blue-www-illustration-domain-name-website-email-world-wide-web-emaze-domain-blue-globe-text-thumbnail.png',
          Route: '/domain'
        },
        {
          title: 'Domain Transfer',
          description: 'Transfer your domain effortlessly. Ensure continuity over your online assets.',
          image: 'https://w7.pngwing.com/pngs/795/447/png-transparent-transport-layer-security-https-e-commerce-uniform-resource-locator-world-wide-web-angle-text-rectangle-thumbnail.png',
          Route: '/domain-transfer'
        },
      ]
    },
    {
      menu: 'Hosting',
      items: [
        {
          title: 'Wordpress Hosting',
          description: 'Optimize your WordPress site with our reliable hosting.',
          image: 'https://w7.pngwing.com/pngs/531/584/png-transparent-wordpress-computer-icons-wordpress-logo-inside-web-thumbnail.png',
          Route: '/wordpress-hosting'

        },
        {
          title: 'Reseller Hosting',
          description: 'Start your own hosting business with our reseller plans. ',
          image: 'https://w7.pngwing.com/pngs/495/750/png-transparent-cloud-computing-web-hosting-service-computer-servers-dedicated-hosting-service-internet-hosting-service-cloud-computing-computer-network-cloud-cloud-computing-thumbnail.png',
          Route: '/reseller-hosting'
        },
      ]
    },
    {
      menu: 'VPS Server',
      items: [
        {
          title: 'Indian Server',
          description: 'Powerful VPS servers based in India. High performance and for your local needs.',
          image: 'https://w7.pngwing.com/pngs/194/442/png-transparent-cloud-computing-computer-servers-dedicated-hosting-service-virtual-private-server-web-hosting-service-server-computer-network-electronics-internet-thumbnail.png',
          Route: '/indian-vps-server'
        },
        {
          title: 'Non Indian Server',
          description: 'Robust VPS servers in the US. Perfect for global reach and high-speed performance.',
          image: 'https://w7.pngwing.com/pngs/953/189/png-transparent-computer-servers-server-web-server-storage-miscellaneous-computer-network-computer-program-thumbnail.png',
          Route: '/non-indian-vps-server'
        },

      ]
    },
    {
      menu: 'Dedicated Server',
      items: [
        {
          title: 'India Server',
          description: 'High-performance dedicated servers in India. For mission-critical applications.',
          image: 'https://w7.pngwing.com/pngs/355/899/png-transparent-computer-servers-web-hosting-service-virtual-private-server-dedicated-hosting-service-cloud-computing-computer-network-computer-cloud-computing-thumbnail.png',
          Route: '/page-coming-soon'
        },
        {
          title: 'Non Indian Server',
          description: 'Reliable dedicated servers in Germany. Ideal for demanding applications needs.',
          image: 'https://w7.pngwing.com/pngs/269/568/png-transparent-data-center-computer-servers-cloud-computing-web-hosting-service-cloud-computing-computer-network-electronics-cloud-computing-thumbnail.png',
          Route: '/page-coming-soon'
        },
      ]
    },
    {
      menu: 'Cloud Server',
      items: [
        {
          title: 'Indian Server',
          description: 'Scalable cloud servers in India. Perfect for businesses needing flexible resources.',
          image: 'https://w7.pngwing.com/pngs/340/724/png-transparent-cloud-computing-computer-servers-database-server-client-cloud-computing-computer-network-cloud-computer-thumbnail.png',
          Route: '/indian-cloud-server'
        },
        {
          title: 'Non Indian Server',
          description: 'Flexible cloud servers in Germany. Best for companies requiring scalability.',
          image: 'https://w7.pngwing.com/pngs/495/750/png-transparent-cloud-computing-web-hosting-service-computer-servers-dedicated-hosting-service-internet-hosting-service-cloud-computing-computer-network-cloud-cloud-computing-thumbnail.png',
          Route: '/non-indian-cloud-server'
        },
      ]
    },
    {
      menu: 'Enterprise Service',
      items: [
        { title: 'Tally on Cloud Server', description: 'Cloud-based Tally solutions for easy access and management.', image: 'https://w7.pngwing.com/pngs/432/664/png-transparent-computer-icons-service-management-enterprise-resource-planning-services-hand-service-people-thumbnail.png', Route: '/page-coming-soon' },
        { title: 'TS Plus', description: 'Enhanced remote desktop services for secure and efficient access.', image: 'https://w7.pngwing.com/pngs/20/504/png-transparent-real-time-computing-service-customer-enterprise-resource-planning-system-others-thumbnail.png', Route: '/page-coming-soon' },
      ]
    }
  ];


  return (
    <nav>
      <nav className="flex header-bg">
        {
          !isMobile && (
            <div className='btn text-black font-bold text-2xl ml-4'>
              <a href="/">Traumhosting</a>
            </div>
          )
        }
        {
          !isMobile && (
            <NavigationMenu className="menu-list">
              <NavigationMenuList className="flex gap-0 p-0 m-0">
                {menuItemsContent.map((menuContent, index) => (
                  <NavigationMenuItem key={index} className="p-1 m-0 gap-0">
                    <NavigationMenuTrigger className="bg-transparent text-base font-bold m-0 p-0">{menuContent.menu}</NavigationMenuTrigger>
                    <NavigationMenuContent className="p-0 m-0">
                      <ul className="grid gap-1 md:w-max lg:w-max lg:grid-cols-[.75fr_1fr] ul-menu items-center">
                        {menuContent.items.map((item, idx) => (
                          <ListItem
                            key={idx}
                            href={item.Route}
                            target="_blank"
                            className="ml-1 flex flex-col items-center w-96"
                            imageSrc={item.image}
                            title=""

                          >
                            <div className="flex flex-col gap-[5px]">
                              <span className="font-bold text-black">{item.title}</span>
                              <span className="text-sm">{item.description}</span>
                            </div>
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
            <div className='btn flex gap-1 mr-4'>
              <Button variant={'default'}>Client Login</Button>
            </div>

          )
        }
   
      {
        isMobile && (
          <div className='flex justify-between item-center logo_header text-white bg-slate-500'>
            <div className="m-4">
            <a href="/">Traumhosting</a>
            </div>
            <div className="m-4">
            <span
            onClick={() => {
              setIsMenuOpen(!isMenuOpen)
            }}
            className="cursor-pointer"
          ><Menu size={30} /></span></div>
          </div>
          
        )}
       </nav>
      <SideBarSheet
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
      />
    </nav>
  )
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a"> & { imageSrc?: string; title: string; }
>(({ className, imageSrc, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none  rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="flex justify-center items-center gap-[10px]">
            {imageSrc && (
              <img src={imageSrc} alt="logo" className="w-[60px] h-[40px]" />
            )}
            <div>
              <div className="text-lg font-bold leading-none">{title}</div>
              <p className="text-sm leading-snug text-muted-foreground w-100 flex-wrap">
                {children}
              </p>
            </div>
          </div>
        </a>
      </NavigationMenuLink>
    </li>
  );
});

ListItem.displayName = "ListItem"
