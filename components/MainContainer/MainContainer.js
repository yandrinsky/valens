import React from 'react';
import Header from "../Navigation/Header/Header";
import Head from "next/head";
import client from "../../contentful";

const MainContainer = ({children, keywords, title}) => {
    return (
        <>
            <Head>
                <meta keywords={"ICUMBI, ucumbi, HUMANITARIAN ORGANISATION, Манирагена Валенс" + keywords}/>
                <title>{title}</title>
            </Head>
            <Header/>
            <div>
                {children}
            </div>
        </>
    );
};

export default MainContainer;