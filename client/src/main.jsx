import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './store/store.js'
import {Toaster} from "./components/ui/toaster.jsx"

createRoot(document.getElementById('root')).render(
  // browser Router is to wrap our App.jsx 
  <BrowserRouter> 
  {/* Through Provider component store property is taken and  then wrap the app inside it */}
  <Provider store={store} >
    <App />
    <Toaster/>
    </Provider>
    </BrowserRouter>
);
