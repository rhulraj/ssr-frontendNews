import reportWebVitals from './reportWebVitals'
import { hydrateRoot } from 'react-dom/client'
import './index.css'
import App from './App.js'
import {BrowserRouter} from 'react-router-dom'
import {Toaster} from 'react-hot-toast';
import {Provider} from 'react-redux';
import { store } from './Redux/store.js'



// createRoot(document.getElementById('root')).render(
  // <Provider store={store}>
  //   <BrowserRouter>
  //     <App />
  //     <Toaster />
  //   </BrowserRouter>
  // </Provider>
// )
const container = document.getElementById('root')
hydrateRoot(container, 
  <Provider store={store}>
  <BrowserRouter>
    <App />
    <Toaster />
  </BrowserRouter>
</Provider>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
