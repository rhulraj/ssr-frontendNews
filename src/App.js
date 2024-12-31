
import React from 'react';
import Home from './Pages/Home';
import { Route , Routes} from 'react-router-dom';
import CreateInfo from './Pages/CreateInfo';
import Info from './Pages/Info';
import CreateNews from './Pages/CreateNews';
import LatestNews from './Pages/LatestNews';
import TopNews from './Pages/TopNews';
import InternationalNews from './Pages/International';
import SignUp from './Pages/Auth/SignUp';
import VerifyOtp from './Pages/Auth/VerifyOtp';
import Login from './Pages/Auth/Login';
import CreatePage from './Pages/CreatePage';
import InfoPage from './Pages/InfoPage';
import NewsPage from './Pages/NewsPage';
import { HelmetProvider } from 'react-helmet-async';



function App() {
   
  return (
    <HelmetProvider>
    <Routes>
      <Route path='/' element = {<Home/>}/>
      <Route path='/admin/createInfo' element = { <CreateInfo/>} />
      <Route path='/info' element = {<Info/>}/>
      <Route path='/admin/createNews' element = {<CreateNews />} />
      <Route path='/news/latest' element = {<LatestNews/>} />
      <Route path='/news/top' element = {<TopNews/>} />
      <Route path='/news/international' element = {<InternationalNews/>} />
      <Route path='/user/createAccount' element ={<SignUp/>} />
      <Route path='/user/verifyOtp' element = {<VerifyOtp/>} />
      <Route path='/createPost' element = {<CreatePage/>} />
      <Route path='/auth/login' element = {<Login />} />
      <Route path='/infos/:id' element= {<InfoPage/>} />
      <Route path='/news/:id' element={<NewsPage/>} />
    </Routes>
    </HelmetProvider>
    
  )
}

export default App;
