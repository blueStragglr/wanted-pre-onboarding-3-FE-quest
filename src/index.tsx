import ReactDOM from 'react-dom/client'
import reset from 'styled-reset'
import {createGlobalStyle} from 'styled-components'
import {store} from './store/store'
import {Provider as ReduxProvider} from 'react-redux'
import './index.css'
import App from './App'

const GlobalStyle = createGlobalStyle`${reset}`

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <ReduxProvider store={store}>
    <GlobalStyle />
    <App />
  </ReduxProvider>
)
