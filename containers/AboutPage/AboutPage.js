import React from 'react';
import Background from "../../components/UI/Background/Background";
import css from "./AboutPage.module.css"
import {documentToReactComponents} from "@contentful/rich-text-react-renderer";
import getLocale from "../../funcs/getLocale";
import {useRouter} from "next/router";
import {getUrl} from "../../funcs/getUrl";
const AboutPage = ({about}) => {
    const router = useRouter();
    const title = getLocale("title", about.fields, router);
    const body = getLocale("body", about.fields, router)
    const description = getLocale("desc", about.fields, router);
    const background = getUrl(about.fields.background);
    return (
        <main>
            <Background description={description} url={background} title={title}/>
            <div className={css.content}>
                {documentToReactComponents(body)}
            </div>
        </main>
    );
};

export default AboutPage;