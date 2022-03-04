import React from 'react';
import Background from "../../components/UI/Background/Background";
import css from "./AboutPage.module.css"
import {documentToReactComponents} from "@contentful/rich-text-react-renderer";
const AboutPage = ({about}) => {
    const {title, description, background, body} = about.fields;
    return (
        <main>
            <Background description={description} url={background?.fields.file.url} title={title}/>
            <div className={css.content}>
                {documentToReactComponents(body)}
            </div>
        </main>
    );
};

export default AboutPage;