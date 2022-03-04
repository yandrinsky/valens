import React from 'react';
import {documentToReactComponents} from "@contentful/rich-text-react-renderer";
import css from "./Article.module.css"
const Article = ({article}) => {
    const {title, body, slug} = article.fields;
    return (
        <div className={css.Article}>
            <h1 className={css.title}>{title}</h1>
            <div>{documentToReactComponents(body)}</div>
        </div>
    );
};

export default Article;