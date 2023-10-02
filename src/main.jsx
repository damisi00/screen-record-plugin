import React from 'react'
import ReactDOM from 'react-dom/client'
import { library } from '@fortawesome/fontawesome-svg-core'
// import { fas, faPause, faStop } from '@fortawesome/free-solid-svg-icons'
// import { far, faVideo} from '@fortawesome/free-regular-svg-icons'

import App from './App.jsx'
import './index.css'

// library.add(fas, faPause, far, faStop, faVideo );
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
