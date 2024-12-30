import React from "react";
import { useParams } from "react-router-dom"
import Layout from "../Layout/Layout"
import { useDispatch, useSelector } from "react-redux";
import { fetchById } from "../Redux/Slices/inforSlices";
import { useEffect } from "react";
import './style.css'
import './page.css'


function InfoPage() {
    const {id} = useParams();
    const dispatch = useDispatch();
    const data = useSelector(state => state.info.data)
    async function fetchData (){
       const response = await dispatch(fetchById(id))
    }
    console.log(data)
    useEffect(()=>{
       fetchData()
    },[])
    return (
        <Layout>
            <div className="container text-black mx-10 mt-10 ">
           
                <h1 className="page">{data.title}</h1>
                {data.image1 && <img src={data.image1 || null} alt="" className="mx-auto my-6" />}
                <p className="page">{data.body1}</p>
                {data.image2 && <img src={data.image2 || null} alt="" className="mx-auto my-6" />}
                <p className="page">
                    {data.body2}
                </p>
                {data.image3 && <img src={data.image3 || null} alt="" className="mx-auto my-6"/>}
                <p className="page">{data.body3}</p>
                
            </div>
        </Layout>
    )
}

export default InfoPage