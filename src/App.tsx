import { useTranslations } from 'use-intl'
import './App.css'

import { LanguageToggle } from './modules/core/components/language-switch'
import { ModeToggle } from './modules/core/components/mode-switch'
import Home from './modules/core/components/home'

function App() {
  const t = useTranslations()

  return (
    <>
      {/* {t('title')} */}
      {/* <ModeToggle />
      <LanguageToggle /> */}
      <Home/>
    </>
  )
}

export default App
