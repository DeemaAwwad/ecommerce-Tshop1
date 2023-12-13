import React from 'react'
import ReactDOM from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.js'
import App from './App.jsx'
import {UserContextProvider} from './components/web/context/User';
import {CartContextprovider } from './components/web/context/Cart';
import { ToastContainer } from 'react-toastify';
import { QueryClient, QueryClientProvider } from 'react-query'
import 'react-toastify/dist/ReactToastify.css';
import './index.css'
const queryClient = new QueryClient()
ReactDOM.createRoot(document.getElementById('root')).render(
  <>
  <UserContextProvider>
    <CartContextprovider>
    <QueryClientProvider client={queryClient}>
    <ToastContainer/>
      <App />
    </QueryClientProvider>
    </CartContextprovider>
  </UserContextProvider>
  </>

)
