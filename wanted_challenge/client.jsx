import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './pages/App'

const wrap = document.querySelector('#root')
const root = createRoot(wrap)
root.render(<App />)
