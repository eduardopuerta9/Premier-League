import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import { disableReactDevTools } from '@fvilers/disable-react-devtools'

if (process.env.NODE_ENV === 'production') disableReactDevTools()

const root = createRoot(document.getElementById('root'))

root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
)
