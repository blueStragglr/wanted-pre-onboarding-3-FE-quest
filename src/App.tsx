import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { IntlProvider } from 'react-intl'
import AppRouter from './AppRouter'
import { locales } from '@/locales'
import BaseStyle from './components/BaseStyle'
const locale = locales.ko

const App = () => {
  return (
    <IntlProvider locale={locale.locale} messages={locale.messages as any}>
      <BaseStyle />
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </IntlProvider>
  )
}

export default App
