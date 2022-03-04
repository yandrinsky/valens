import React from 'react';
import css from "./ArticlesList.module.css"
import ArticleCard from "../ActicleCard/ArticleCard";
const ArticlesList = ({articles}) => {
    return (
        <div className={css.ArticlesList}>
            {
                articles.map(article => {
                    const {title, description, action, slug, preview} = article.fields;
                    return <ArticleCard key={slug} title={title} description={description}
                                        preview={preview?.fields.file.url} button={action}
                                        slug={slug}
                    />
                })
            }
        </div>
    );
};

export default ArticlesList;