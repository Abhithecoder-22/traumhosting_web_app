// import { useTranslations } from 'use-intl'
import './App.css'

// import { LanguageToggle } from './modules/core/components/language-switch'
// import { ModeToggle } from './modules/core/components/mode-switch'
import Home from './modules/core/components/home'
import Wordpress from './modules/core/components/wordpress'

import { Routes,Route, BrowserRouter } from 'react-router-dom'

function App() {
  // const t = useTranslations()

  return (
    <BrowserRouter>
   

      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/wordpres-hosting' element={<Wordpress/>}/>

      </Routes>
  
    
    </BrowserRouter>
  )
}

export default App
