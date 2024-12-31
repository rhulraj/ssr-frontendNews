import { useDispatch, useSelector } from 'react-redux';
import React from 'react';
import logo from '../assets/logo.svg';
import menu from '../assets/menu.png'
import { useEffect, useState } from 'react';
import { fetchAllInfo} from '../Redux/Slices/inforSlices';
import { fetchInternationalNews, fetchLatestNews, fetchTopNews } from '../Redux/Slices/newsSlices';
import { Link } from 'react-router-dom';
import { logOUt } from '../Redux/Slices/authSlice';
import './layout.css'
import Footer from './Footer';


function Layout({children}){
    const [showNavbar,  setShowNavbar] =useState(false)
    const [isOpen, setOpen ]= useState(false)
    const [lastScroll, setLastScroll] =
    useState(0)
  
    const dispatch = useDispatch()
    const isLogged = useSelector(state => state.auth.isLoggedIn)
   
    
    async function logOut (){
       await dispatch(logOUt())
      
    }
    
    async function fetchInfo(){
      dispatch({type: 'LOADING_START'})
      try{
         await dispatch(fetchAllInfo());
        await dispatch(fetchLatestNews())
         await dispatch(fetchTopNews());
        await dispatch(fetchInternationalNews())
      }catch(error){

      }finally{
           dispatch({type:"LOADING_END"})
      }
        
    }
    function handleMenu (){
        setOpen(
          !isOpen
        )
    }
    const controlNavbar =() =>{
        const currentscroll = window.scrollY
      if(typeof window !== 'undefined'){
        if(currentscroll > lastScroll && showNavbar){
          setShowNavbar(false)
        }else if(currentscroll < lastScroll && !showNavbar){
          setShowNavbar(true)
        }
        
        setLastScroll(currentscroll)
      }
    }
    
    function body(){
      setOpen(false)
    }
    
    useEffect(()=>{
       fetchInfo()
    },)
    useEffect(()=>{
      
      if(typeof window !== "undefined"){
          window.addEventListener('scroll', controlNavbar)
          return () =>{
              window.removeEventListener('scroll', controlNavbar);
          }
      }
      },[lastScroll,isOpen])

    return(
        <>
        <nav className={`navbar bg-yellow-100 pb-6 ${showNavbar ? 'fixed-navbar' : ''}`}>
           <div >
             <img src={logo || null} alt="" className='w-20 h-20 m-auto logo'/>
             <h1 className='heading ml-1 text-xl text-center '>Vedic Info</h1>
           </div>
           <button className='menu-toggle' onClick={handleMenu}><img src={menu} alt="" /></button>
           <div className='flex justify-between px-7'>
            <div className='flex justify-between'>
              <ul className={` ${isOpen ? 'open' :''} nav-links flex  text-lg lg:mx-60 sm:text-base`}>
              <Link to={'/'}><li className='-'>Home</li> </Link>
                <Link to={'/info'}><li className=''>Vedic facts</li></Link>
                <Link to={'/news/latest'}><li className=''>Latest news</li></Link>
                <Link to={'/news/top'}>
                <li className=''>Top news</li></Link>
                <Link to={'/news/international'}>
                <li className=''>International news</li></Link>
                <ul className='flex'>
                {isLogged && <Link to={'/createPost'}> <li className='lg:ml-40'>Create Post</li></Link>} 
               {!isLogged && <Link to={'/auth/login'}> <li> Login</li></Link>}
               {isLogged &&  <button className='log ml-4 sm:ml-6 lg:ml-44' onClick={logOut}> Logout</button>}
                </ul>
              </ul>
            </div>
            
              
               
              
              
           </div>
        </nav>
        <div className='mt-28' onClick={body}>
           {children}
        </div>
        <Footer />
        </>
    )
}

export default Layout;