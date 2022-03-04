import React from 'react';
import css from "./Background.module.css";
import {documentToReactComponents} from "@contentful/rich-text-react-renderer";

const Background = ({url, title, description}) => {
    return (
        <div style={{background: `url(http:${url}) no-repeat center / cover`}}
             className={css.background}
        >
            <div className={css.dark}/>
            <div className={css.content}>
                <h1>{title}</h1>
                {documentToReactComponents(description)}
            </div>

        </div>
    );
};

export default Background;