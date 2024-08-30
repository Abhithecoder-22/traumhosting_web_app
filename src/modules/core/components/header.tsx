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

      // const [hoveredItem, setHoveredItem] = React.useState<MenuItem | ''>('');

      // const [hoveredItem, setHoveredItem] = useState<MenuItem | ''>('');

      // const images: { [key in MenuItem]: string } = {
      //   domain1: 'https://plus.unsplash.com/premium_photo-1685086785423-435c02d5c321?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      //   domain2: 'https://plus.unsplash.com/premium_photo-1685086785054-d047cdc0e525?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      //   w1: 'https://img.freepik.com/free-photo/website-hosting-with-man-holding-tablet_23-2149406767.jpg?t=st=1723364398~exp=1723367998~hmac=a57da09e3b396b61d2ffeb04c3feb71c59966bf713076aeedf77b052276680cc&w=900',
      //   w2: 'https://img.freepik.com/free-photo/website-hosting-concept-with-polygonal-shapes_23-2149406773.jpg?t=st=1723364418~exp=1723368018~hmac=27df5953531c3d2b615e4f608cfbb390985ac5c3f78146d54992705a8cb604df&w=1060',
      //   VPS1: 'https://img.freepik.com/free-vector/server-concept-illustration_114360-287.jpg?t=st=1723364441~exp=1723368041~hmac=8fe4614205788adb5e2ac84b0cc71fc8abb89748ed9af08290f2677f2b32a1e7&w=740',
      //   VPS2: 'https://img.freepik.com/free-vector/secure-server-concept-illustration_114360-522.jpg?t=st=1723364455~exp=1723368055~hmac=5257ffceb190ce4c506cc59080f9c19645467645494bb906810430f4fd0a5982&w=900',
      //   VPS3: 'https://img.freepik.com/free-vector/cloud-hosting-concept-illustration_114360-4347.jpg?t=st=1723364477~exp=1723368077~hmac=fc66f456e2257a2a38ec256630a162eec48f9dc48690231772b4788a026bc1a9&w=900',
      //   D1: 'https://img.freepik.com/premium-photo/graphic-visualization-bitcoin-storage-server-within-dedicated-equipment-space_850197-6405.jpg?w=1060',
      //   D2: 'https://img.freepik.com/premium-photo/computer-with-circuit-board_850197-2492.jpg?w=1060',
      //   C1: 'https://img.freepik.com/premium-photo/abstract-computer-circuit-with-cloud-computing-technology_1261838-4194.jpg?w=740',
      //   C2: 'https://img.freepik.com/premium-photo/ctronic-chip-board-cloud-computer-is-system-transfer-data-information-andupload-download-application-technology_1261838-1266.jpg?w=740',

      // };
    
      // const handleMouseEnter = (item: MenuItem) => {
      //   setHoveredItem(item);
      // };
    
      // const handleMouseLeave = () => {
      //   setHoveredItem('');
      // };
    
      const menuItemsContent = [
        {
          menu: 'Domain',
          items: [
            {
              title: 'Domain Register',
              description: 'Register your domain easily. Domain registration is the first step in building your online presence.',
              image: 'domain1'
            },
            {
              title: 'Domain Transfer',
              description: 'Transfer your domain effortlessly. Ensure continuity and control over your online assets.',
              image: 'domain2'
            },
          ]
        },
        {
          menu: 'Hosting',
          items: [
            {
              title: 'Wordpress Hosting',
              description: 'Optimize your WordPress site with our reliable hosting. Fast and secure hosting tailored for WordPress.',
              image: 'w1'
            },
            {
              title: 'Reseller Hosting',
              description: 'Start your own hosting business with our reseller plans. Flexible and scalable hosting solutions.',
              image: 'w2'
            },
          ]
        },
        {
          menu: 'VPS Server',
          items: [
            {
              title: 'Indian Server',
              description: 'Powerful VPS servers based in India. High performance and reliability for your local needs.',
              image: 'VPS1'
            },
            {
              title: 'US Server',
              description: 'Robust VPS servers in the US. Perfect for global reach and high-speed performance.',
              image: 'VPS2'
            },
            {
              title: 'Non Indian Server',
              description: 'Secure VPS servers located in Germany. Ideal for European data protection and efficiency.',
              image: 'VPS3'
            },
          ]
        },
        {
          menu: 'Dedicated Server',
          items: [
            {
              title: 'India Server',
              description: 'High-performance dedicated servers in India. For mission-critical applications and enhanced security.',
              image: 'D1'
            },
            {
              title: 'Non Indian Server',
              description: 'Reliable dedicated servers in Germany. Ideal for demanding applications and compliance needs.',
              image: 'D2'
            },
          ]
        },
        {
          menu: 'Cloud Server',
          items: [
            {
              title: 'Indian Server',
              description: 'Scalable cloud servers in India. Perfect for businesses needing flexible resources and local support.',
              image: 'C1'
            },
            {
              title: 'Non Indian Server',
              description: 'Flexible cloud servers in Germany. Best for companies requiring scalability and data protection.',
              image: 'C2'
            },
          ]
        },
        {
          menu: 'Enterprise Service',
          items: [
            { title: 'Tally on Cloud Server', description: 'Cloud-based Tally solutions for easy access and management.', image: 'item10' },
            { title: 'TS Plus', description: 'Enhanced remote desktop services for secure and efficient access.', image: 'item11' },
          ]
        }
      ];
      
    
  return (
    <nav>
 <nav className="flex header-bg">
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
        //   <NavigationMenu className="menu-list">
        //   <NavigationMenuList className="flex gap-0 p-0 m-0"> 
        //     {menuItemsContent.map((menuContent, index) => (
        //       <NavigationMenuItem key={index} className="p-1 m-0 gap-0"> 
        //         <NavigationMenuTrigger className="bg-transparent text-lg font-bold m-0 p-0">{menuContent.menu}</NavigationMenuTrigger>
        //         <NavigationMenuContent className="p-0 m-0">
        //           <ul className="grid gap-1 md:w-max lg:w-max lg:grid-cols-[.75fr_1fr] ul-menu"> 
        //             <li className="row-span-3">
        //               <NavigationMenuLink asChild>
        //                 <img
        //                   src={hoveredItem ? images[hoveredItem] : 'https://www.ssldragon.com/wp-content/uploads/2023/05/web-hosting-trends.webp'}
        //                   style={{ width: '100%', height: '200px' }}
        //                   alt="Description of image"
        //                   className="object-cover rounded-md h-full p-1 custom-header-img-width mb-[-1rem] ml-2 lg:ml-4 rounded-xl"
        //                 />
        //               </NavigationMenuLink>
        //             </li>
        //             {menuContent.items.map((item, idx) => (
        //               <ListItem
        //                 key={idx}
        //                 href="/docs"
        //                 title={item.title}
        //                 className="ml-1 lg:ml-2" 
        //                 onMouseEnter={() => handleMouseEnter(item.image as MenuItem)}
        //                 onMouseLeave={handleMouseLeave}
        //               >
        //                 {item.description}
        //               </ListItem>
        //             ))}
        //           </ul>
        //         </NavigationMenuContent>
        //       </NavigationMenuItem>
        //     ))}
        //   </NavigationMenuList>
        // </NavigationMenu>

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
                href="/docs"
               
                className="ml-1 flex flex-col items-center w-96"
                
                
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
          <div className='btn flex gap-1'> 
          {/* <Button
            variant='default'
          
            className='login_btn rounded-[5px] bg-[#ff0066] text-[#fff] px-[20px] py-[10px]'
          >
            Mailing System
          </Button> */}
        
        </div>
        
        )
      }
    </nav>
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
         <div className="flex items-center gap-[0px]">

           <img src="https://img.favpng.com/15/14/12/web-hosting-service-software-development-computer-servers-mobile-app-development-cloud-computing-png-favpng-wsQBRC3tFTyNqe3SgtApn2X93.jpg" alt="logo" className="w-[60px] h-[40px]"/>
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
  )
})
ListItem.displayName = "ListItem"
