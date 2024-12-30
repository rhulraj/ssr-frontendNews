import React from "react";
import { Helmet } from "react-helmet";

function MetaTag(title,description,){

return(
    <Helmet>
         <Helmet>
            <title>Vedic facts</title>
            <meta property="og:title" content="Vedic Fact" />
            <meta property="og:description" content="vedic Kshatriya"/>
            <meta property="og:image" content={logo}/>
            <meta property="og:url" content="https://vedicinfos.in"/>
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content="vedic History" />
            <meta name="twitter:description" content="" />
            <meta name="twitter:image" content={logo} />
         </Helmet>
    </Helmet>
)
}