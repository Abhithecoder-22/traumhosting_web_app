/**
 * v0 by Vercel.
 * @see https://v0.dev/t/iLxRQXs4hHX
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
// import { Input } from "@/components/ui/input"
// import { Button } from "@/components/ui/button"

import { Button } from "../../../../shadcn/components/ui/button";
import { Input } from "../../../../shadcn/components/ui/input";
import DomainCardSection from "../../components/domain-register/feature-card";
import FirstHeader from "../../components/first-header";
import Footer from "../../components/footer";
import { NavigationMenuDemo } from "../../components/header";

export default function DomainRegistrations() {
  return (
    <>
    <div>
    <FirstHeader/>
    <NavigationMenuDemo/>
    </div>
    <section className="w-full bg-gradient-to-r from-primary to-secondary py-24 md:py-32 lg:py-40">
      <div className="container flex flex-col items-center justify-center space-y-8">
        <div className="flex w-full max-w-3xl items-center rounded-md bg-background shadow-lg">
          <Input
            type="search"
            placeholder="Enter Your Domain Name..."
            className="flex-1 rounded-l-md border-none bg-transparent px-4 py-3  text-primary-foreground focus:outline-none"
          />
          <Button
            type="submit"
            className="rounded-r-md bg-primary px-6 py-3 text-primary-foreground transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
          >
            Search
          </Button>
        </div>
        <div className="space-y-4 text-center">
          <h1 className="text-4xl font-bold tracking-tighter text-primary-foreground sm:text-4xl md:text-4xl lg:text-6xl">
          Find & Register Your Domain Today
          </h1>
          {/* <p className="max-w-2xl text-lg text-primary-foreground md:text-xl">
            Explore our wide range of high-quality products and find the perfect fit for your needs.
          </p> */}
        </div>
      </div>
    </section>
   


<div className="bg-white p-8 rounded-md w-full">
  <div className="flex items-center justify-between pb-6">
    
    <div className="flex items-center justify-center text-center w-100">
      <div className="flex bg-gray-50 items-center p-2 rounded-md">
        <h1 className="text-black text-4xl font-bold">Domain Pricing List</h1>
      </div>
     
    </div>
  </div>
  <div>
    <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
      <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
        <table className="min-w-full leading-normal">
          <thead>
            <tr>
              <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">TLDs</th>
              <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">PERIOD</th>
              <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Register</th>
              <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Renew</th>
              <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Transfer</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                <span className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                  <span aria-hidden className="absolute inset-0 bg-green-200 opacity-50 rounded-full"></span>
                  <span className="relative">.COM</span>
                </span>
              </td>
              <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                <div className="flex items-center">
                
                  <div className="ml-3">
                    <p className="text-gray-900 whitespace-no-wrap">1 Year</p>
                  </div>
                </div>
              </td>
              <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                <p className="text-gray-900 whitespace-no-wrap">₹ 975</p>
              </td>
              <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                <p className="text-gray-900 whitespace-no-wrap">₹ 1050	</p>
              </td>
              <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                <p className="text-gray-900 whitespace-no-wrap">₹ 975</p>
              </td>
            </tr>
            <tr>
              <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                <span className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                  <span aria-hidden className="absolute inset-0 bg-green-200 opacity-50 rounded-full"></span>
                  <span className="relative">.NET</span>
                </span>
              </td>
              <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                <div className="flex items-center">
                
                  <div className="ml-3">
                    <p className="text-gray-900 whitespace-no-wrap">1 YEAR		</p>
                  </div>
                </div>
              </td>
              <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                <p className="text-gray-900 whitespace-no-wrap">₹ 1100</p>
              </td>
              <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                <p className="text-gray-900 whitespace-no-wrap">₹ 1400	</p>
              </td>
              <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                <p className="text-gray-900 whitespace-no-wrap">₹ 1100</p>
              </td>
            </tr>
            <tr>
              <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                <span className="relative inline-block px-3 py-1 font-semibold text-orange-900 leading-tight">
                  <span aria-hidden className="absolute inset-0 bg-orange-200 opacity-50 rounded-full"></span>
                  <span className="relative">.IN</span>
                </span>
              </td>
              <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                <div className="flex items-center">
                 
                  <div className="ml-3">
                    <p className="text-gray-900 whitespace-no-wrap">1 YEAR		</p>
                  </div>
                </div>
              </td>
              <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                <p className="text-gray-900 whitespace-no-wrap">₹ 600</p>
              </td>
              <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                <p className="text-gray-900 whitespace-no-wrap">₹ 700	</p>
              </td>
              <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                <p className="text-gray-900 whitespace-no-wrap">₹ 600</p>
              </td>
            </tr>
            <tr>
              <td className="px-5 py-5 bg-white text-sm">
                <span className="relative inline-block px-3 py-1 font-semibold text-red-900 leading-tight">
                  <span aria-hidden className="absolute inset-0 bg-red-200

 opacity-50 rounded-full"></span>
                  <span className="relative">.CO.IN</span>
                </span>
              </td>
              <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                <div className="flex items-center">
                  
                  <div className="ml-3">
                    <p className="text-gray-900 whitespace-no-wrap">1 YEAR		</p>
                  </div>
                </div>
              </td>
              <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                <p className="text-gray-900 whitespace-no-wrap">₹ 500	</p>
              </td>
              <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                <p className="text-gray-900 whitespace-no-wrap">₹ 560</p>
              </td>
              <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                <p className="text-gray-900 whitespace-no-wrap">₹ 500</p>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</div>

<div className="feature-card">
    <DomainCardSection/>
</div>
<Footer/>

    </>
  )
}