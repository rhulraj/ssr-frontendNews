import React from "react";
import { useParams } from "react-router-dom"
import Layout from "../Layout/Layout"
import { useDispatch, useSelector } from "react-redux";
import { newsFetchById } from "../Redux/Slices/newsSlices";
import { useEffect } from "react";
import './style.css'
import './page.css'
import HemlmetMeta from "../meta/HelmetMeta";


function NewsPage(){



    const {id} = useParams();
    const dispatch = useDispatch();
    const data = useSelector(state => state.news.data)


    useEffect(()=>{
        const fetchData = async () =>{
            try{
                await dispatch(newsFetchById(id))
            }catch(error){
                 console.log(error)
            }
        }
       fetchData()
    },[dispatch,id])
    return (
        <Layout>
            <div className="container text-black mx-10 mt-10 ">
            <HemlmetMeta url={`https://vedicinfos.in/news${data._id}`} image={data.image1} title={data.title} description={data.body1}/>

            
               {data.title && <h1 className="page">{data.title}</h1> }
                {data.image1 && <img src={data.image1 || null} alt="" className="mx-auto my-6" />}
                <p className="page">{data.body1}</p>
                {data.image2 && <img src={data.image2} alt="" className="mx-auto my-6" />}
                <p className="page">{data.body2}</p>
                {data.image3 && <img src={data.image3} alt="" className="mx-auto my-6"/>}
                <p className="page">{data.body3}</p>
                
            </div>
        </Layout>
    )
}

export default NewsPage