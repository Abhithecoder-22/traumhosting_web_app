// import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from '../../../shadcn/components/ui/button'

const FirstHeader = () => {
  return (
    <div>
      <header className="bg-primary text-primary-foreground py-2 px-4 md:px-6">
        <div className="container flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link to="#" className="text-base hover:underline" >
              traumhosting@gmail.com
            </Link>
          </div>
          <div className="flex items-center gap-4">
            <Link
              to="/wordpres-hosting"
              className="inline-flex h-8 items-center justify-center rounded-md bg-primary-foreground px-4 text-sm font-medium text-black shadow transition-colors hover:bg-primary/90 hover:text-white focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
          
            >
              Support
            </Link>
            {/* <Button
            variant={'default'}
          
            className='login_btn rounded-[5px] bg-[#ff0066] text-[#fff] px-[20px] py-[10px]'
          >
            Client Login
          </Button> */}
            {/* <Link
              to="#"
              className="inline-flex h-8 items-center justify-center rounded-md border border-input bg-background px-4 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
             
            >
              Login
            </Link> */}
            <Button
            variant='default'
          
            className='login_btn rounded-[5px] bg-[#ff0066] text-[#fff] px-[20px] py-[10px]'
          >
            Mailing System
          </Button>
          </div>
        </div>
      </header>
    </div>
  )
}

export default FirstHeader
