import React from 'react'
import logo from '../assets/logo.svg'
import './footer.css'
import facebookImg from '../assets/facebook.png'
import instgramImg from '../assets/instagram.png'
import twitterImg from '../assets/twitter.png'
import { Link } from 'react-router-dom'

function Footer(){
    return(
        <>
           <div className='bg-zinc-500  py-4 flex justify-around'>
               <div>
                 <img src={logo || null} alt="" className='w-14 ml-3' />
                 <h1 className=' '>Vedic Info</h1>
                 <p className='mt-10'> © Copyright 2024 
               </p>
               </div>
               <div className='flex lg:gap-32 gap-8'>
                <div>
                    <img src="https://img.icons8.com/?size=100&id=Ww1lcGqgduif&format=png&color=000000" alt="" className='w-10 m-auto img'/>
                    <p>email</p>
                </div>
                <ul className=''>
                    <img src={facebookImg || null} alt=""  className='img'/>
                    <img src={instgramImg || null} alt="" className='my-4 img' />
                    <img src={twitterImg || null} alt="" className='img' />
                    <img src={null} alt=""  />
                </ul>
                <ul className='text-center '>
                   <Link to={'/'}><li>Home</li></Link> 
                   <Link><li>Vedic Fact</li></Link>
                    <Link><li>Latest News</li></Link>
                    <Link><li>Top News</li></Link>
                    <Link><li>International News</li></Link>
                    
                </ul>
               </div>
           </div>
        </>
    )
}

export default Footer