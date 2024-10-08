// "use client"

// import * as React from "react"


// import { cn } from "../../../shadcn/lib/utils"
// import './header.css'


// import {
//   NavigationMenu,
//   NavigationMenuContent,
//   NavigationMenuItem,
//   NavigationMenuLink,
//   NavigationMenuList,
//   NavigationMenuTrigger,
// } from "../../../shadcn/components/ui/navigation-menu"

// const components: { title: string; href: string; description: string; src: string }[] = [
//   {
//     title: "Shared Hosting ",
//     href: "/docs/primitives/alert-dialog",
//     description:
//       "A modal dialog that interrupts the user with important content and expects a response.",
//     src: 'https://deep-image.ai/_next/static/media/app-info-generator.bf08e63e.webp'
//   },
//   {
//     title: " WordPress Hosting",
//     href: "/docs/primitives/hover-card",
//     description:
//       "For sighted users to preview content available behind a link.",
//     src: 'https://deep-image.ai/_next/static/media/app-info-generator.bf08e63e.webp'
//   },
//   {
//     title: " Reseller Hosting  ",
//     href: "/docs/primitives/progress",
//     description:
//       "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
//     src: 'https://deep-image.ai/_next/static/media/app-info-generator.bf08e63e.webp'
//   },

// ]

// export function NavigationMenuDemo() {
//   return (
//     <div className="flex justify-between items-center px-[1rem] py-[.6rem]">
//       <div className='logo_header'>
//         <img
//           src='https://img.favpng.com/15/14/12/web-hosting-service-software-development-computer-servers-mobile-app-development-cloud-computing-png-favpng-wsQBRC3tFTyNqe3SgtApn2X93.jpg'
//           alt='logo'
//         />
//       </div>
//       <NavigationMenu>
//         <NavigationMenuList className="gap-[1.5rem]">
//           <NavigationMenuItem>
//             <NavigationMenuTrigger>Hosting</NavigationMenuTrigger>
//             <NavigationMenuContent>
//               <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
//                 {components.map((component) => (
//                   <ListItem
//                     key={component.title}
//                     title={component.title}
//                     href={component.href}

//                   >
//                     {component.description}
//                   </ListItem>
//                 ))}
//               </ul>
//             </NavigationMenuContent>
//           </NavigationMenuItem>
//           <NavigationMenuItem>
//             <NavigationMenuTrigger>Hosting</NavigationMenuTrigger>
//             <NavigationMenuContent>
//               <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
//                 {components.map((component) => (
//                   <ListItem
//                     key={component.title}
//                     title={component.title}
//                     href={component.href}
//                   >
//                     {component.description}
//                   </ListItem>
//                 ))}
//               </ul>
//             </NavigationMenuContent>
//           </NavigationMenuItem>

//           <NavigationMenuItem>
//             <NavigationMenuTrigger>Getting started</NavigationMenuTrigger>
//             <NavigationMenuContent>
//               <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
//                 <li className="row-span-3">
//                   <NavigationMenuLink asChild>
//                     <a
//                       className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
//                       href="/"
//                     >
//                       {/* <Icons.logo className="h-6 w-6" /> */}
//                       <div className="mb-2 mt-4 text-lg font-medium">
//                         shadcn/ui
//                       </div>
//                       <p className="text-sm leading-tight text-muted-foreground">
//                         Beautifully designed components that you can copy and
//                         paste into your apps. Accessible. Customizable. Open
//                         Source.
//                       </p>
//                     </a>
//                   </NavigationMenuLink>
//                 </li>
//                 <ListItem href="/docs" title="Introduction">
//                   Re-usable components built using Radix UI and Tailwind CSS.
//                 </ListItem>
//                 <ListItem href="/docs/installation" title="Installation">
//                   How to install dependencies and structure your app.
//                 </ListItem>
//                 <ListItem href="/docs/primitives/typography" title="Typography">
//                   Styles for headings, paragraphs, lists...etc
//                 </ListItem>
//               </ul>
//             </NavigationMenuContent>
//           </NavigationMenuItem>
//         </NavigationMenuList>
//       </NavigationMenu>
//       <div className='btn'>
//         <button className='login_btn rounded-[5px] bg-[#ff0066] color-[#fff] px-[20px] py-[10px]'>Login</button>
//       </div>
//     </div>
//   )
// }

// const ListItem = React.forwardRef<
//   React.ElementRef<"a">,
//   React.ComponentPropsWithoutRef<"a">
// >(({ className, title, children, ...props }, ref) => {
//   return (
//     <li>
//       <NavigationMenuLink asChild>
//         <a
//           ref={ref}
//           className={cn(
//             "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
//             className
//           )}
//           {...props}
//         >
//           <div className="flex items-center gap-[10px]">

//             <img src="https://img.favpng.com/15/14/12/web-hosting-service-software-development-computer-servers-mobile-app-development-cloud-computing-png-favpng-wsQBRC3tFTyNqe3SgtApn2X93.jpg" alt="logo" className="w-[40px] h-[40px]" />
//             <div>
//               <div className="text-sm font-medium leading-none">{title}</div>
//               <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
//                 {children}
//               </p>
//             </div>
//           </div>
//         </a>
//       </NavigationMenuLink>
//     </li>
//   )
// })
// ListItem.displayName = "ListItem"

