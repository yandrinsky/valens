import React, {useEffect} from 'react';
import {documentToReactComponents} from "@contentful/rich-text-react-renderer";
import css from "./Article.module.css"
import MainContainer from "../MainContainer/MainContainer";
import {useRouter} from "next/router";
import getLocale from "../../funcs/getLocale";
import {getUrl} from "../../funcs/getUrl";

const Article = ({article}) => {
    const router = useRouter();
    if(article){
        const {photo, date} = article.fields;
        const title = getLocale("title", article.fields, router);
        const body = getLocale("body", article.fields, router);


        return (
            <MainContainer title={title}>
                <div className={css.Article}>
                    <div className={css.Article__container}>
                        <hr/>
                        <h1 className={css.title}>{title}</h1>
                        <hr/>
                        <div className={css[`Article__img-container`]}>
                            <img src={getUrl(photo)} alt="" className={css.Article__img}/>
                            <span className={css.Article__date}>{date}</span>
                        </div>
                        <div>{documentToReactComponents(body)}</div>
                    </div>
                </div>
            </MainContainer>
        );
    } else {
        return (<>
            <h1>Запись отсутвует</h1>
        </>)
    }

};

export default Article;