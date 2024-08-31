// import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from '../../../shadcn/components/ui/button'

const FirstHeader = () => {
  return (
    <div>
      <header className="bg-primary text-primary-foreground py-2 px-4 md:px-6">
        <div className="container flex items-center justify-between">
        <div className="flex items-center gap-4">
  <a href="tel:+02269710308" className="text-base flex items-center gap-2 hover:underline">
    <svg className="w-5 h-5 text-gray-800 dark:text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.92v1.68a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-1.68a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1zM4.11 7.68l.9-.88a1 1 0 0 1 1.42 0l2.59 2.59a1 1 0 0 1 0 1.42l-.88.9a1 1 0 0 1-1.42 0l-2.59-2.59a1 1 0 0 1 0-1.42zM20.88 7.68l-.88-.88a1 1 0 0 0-1.42 0l-2.59 2.59a1 1 0 0 0 0 1.42l.88.88a1 1 0 0 0 1.42 0l2.59-2.59a1 1 0 0 0 0-1.42z"/>
    </svg>
    <span>+022-697-10308</span>
  </a>
</div>

          <div className="flex items-center gap-4">
            <Link
              to="/help-and-support"
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
