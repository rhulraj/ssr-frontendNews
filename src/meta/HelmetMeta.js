import React from "react";
import { Helmet } from "react-helmet-async";

function HemlmetMeta({title, url,description,image}){

    return(

             <Helmet>
                <title>{title}</title>
                <meta property="og:title" content={title} />
                <meta property="og:description" content={description}/>
                <meta property="og:image" content={image || null}/>
                <meta property="og:url" content={url}/>
                <meta name="twitter:card" content={title} />
                <meta name="twitter:title" content={title}/>
                <meta name="twitter:description" content={description}/>
                <meta name="twitter:image" content={image || null} />
             </Helmet>
    )
    }

    export default HemlmetMeta