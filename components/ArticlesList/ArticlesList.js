import React from 'react';
import css from "./ArticlesList.module.css"
import ArticleCard from "../ActicleCard/ArticleCard";
import {useRouter} from "next/router";
import getLocale from "../../funcs/getLocale";
const ArticlesList = ({articles}) => {
    let router = useRouter();
    return (
        <div className={css.ArticlesList}>
            {
                articles.map(article => {
                    //let title = article.fields["title_" + router.locale];
                    let title = getLocale('title', article.fields, router);
                    let description = getLocale('desc', article.fields, router);
                    let action = router.locale === "Ru"  ? "Читать" : router.locale === "En"
                        ? "Read" : router.locale === "Fr" ? "Lire" : ""
                    const {slug, preview} = article.fields;
                    return <ArticleCard key={slug} title={title} description={description}
                                        preview={preview?.fields.file.url} button={action}
                                        slug={slug} className={css.ArticleCard}
                    />
                })
            }
        </div>
    );
};

export default ArticlesList;