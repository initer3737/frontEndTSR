import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {BrowserRouter} from 'react-router-dom'
import { RecoilRoot } from 'recoil'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <RecoilRoot>
   <Suspense fallback={<>loading...</>}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Suspense> 
  </RecoilRoot>
)
