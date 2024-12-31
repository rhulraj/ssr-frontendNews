import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Layout from "../Layout/Layout";
import './style.css'
import { useNavigate } from "react-router-dom";
import { newsFetchById } from "../Redux/Slices/newsSlices";
import Left from '../assets/LeftArrow.png'
import Right from '../assets/RightArrow.png'
function TopNews(){


    
    const [initial, setIntial] = useState(0);
    const [end, setEnd] = useState(20);
    const [page, setPage] = useState(1);
    const dispatch = useDispatch();
    const navigate = useNavigate();

     const news = useSelector((state) => state.news)
     const data = news.top.slice(initial, end);

     async function handleNewsFetchId(id){
      await dispatch(newsFetchById(id))
           navigate(`/news/${id}`)
        }

     function next(){
        setEnd( end + 20 );
        setIntial( initial + 20 );
        setPage(page + 1)
     }
     function previous(){
        setEnd( end - 20 );
        setIntial( initial - 20 );
        setPage(page - 1)
     }

    return(<Layout>
      <div className="container font-serif shadow-lg p-2 mx-2">
         <h1 className="text-center ">TOP NEWS</h1>
         {data.map(el=>{
            return(
                <div className="flex m-10 shadow-lg" key={el._id} onClick={()=>{handleNewsFetchId(el?._id)}}>
                  <h1 className="mx-6  m-3">{el.title}</h1>
                  <img className="w-40 m-3" src={el.image1 || null} alt="" />
                </div>
            )
         })}
      </div>
      <div className=" text-center">
        {initial > 1 && <button className="w-8 mr-3 mt-3" onClick={previous}><img className="" src={Left || null} alt="" /></button>}

        <button className="text-xl" >{page}</button>

       {end < data.length && <button className="w-8 ml-3 " onClick={next}><img className=" " src={Right || null} alt="" /></button>}
       </div>
        </Layout>
    )
}

export default TopNews;