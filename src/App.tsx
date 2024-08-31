// import { useTranslations } from 'use-intl'
import './App.css'

// import { LanguageToggle } from './modules/core/components/language-switch'
// import { ModeToggle } from './modules/core/components/mode-switch'
import Home from './modules/core/components/home'
import CloudIS from './modules/core/pages/cloud-server/indian-server'
import CloudNIS from './modules/core/pages/cloud-server/non-indian-server'
import DomainRegistrations from './modules/core/pages/domain-register'
import PageComingSoon from './modules/core/pages/page-coming-soon'
import Reseller from './modules/core/pages/reseller-hosting'
import Suport from './modules/core/pages/support-page'
import VpsIS from './modules/core/pages/vps-server/indian-server'
import VpsNIS from './modules/core/pages/vps-server/non-indian-server'
import Wordpress from './modules/core/pages/wordpress-hosting'

import { Routes,Route, BrowserRouter } from 'react-router-dom'

function App() {
  // const t = useTranslations()

  return (
    <BrowserRouter>
   
     
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route  path='/wordpress-hosting' element={<Wordpress/>}/>
        <Route  path='/reseller-hosting' element={<Reseller/>}/>
        <Route  path='/indian-vps-server' element={<VpsIS/>}/>
        <Route  path='/indian-cloud-server' element={<CloudIS/>}/>
        <Route  path='/non-indian-vps-server' element={<VpsNIS/>}/>
        <Route  path='/non-indian-cloud-server' element={<CloudNIS/>}/>
        <Route  path='/domain' element={<DomainRegistrations  />}/>
        <Route  path='/page-coming-soon' element={<PageComingSoon  />}/>
        <Route  path='/help-and-support' element={<Suport  />}/>

      </Routes>
  
    
    </BrowserRouter>
  )
}

export default App
