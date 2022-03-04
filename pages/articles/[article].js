import React from 'react';
import Head from "next/head";
import {documentToReactComponents} from "@contentful/rich-text-react-renderer";
import client from "../../contentful";
import PageArticle from "../../components/Article/Article";

const Article = ({article}) => {
    const {title, body, slug} = article.fields;
    return (
        <div>
            <Head>
                <title>
                    {title}
                </title>
            </Head>
            <main>
                <PageArticle article={article}/>
            </main>
        </div>
    );
};

export default Article;

export const getStaticPaths = async () => {
    const articleEntries = await client.getEntries({
        content_type: "article",
        select: 'fields.slug'
    })

    return {
        paths: articleEntries.items.map(item => {
            return {
                params: {
                    article: item.fields.slug,
                }
            }
        }),
        fallback: false,

    }
};

export const getStaticProps = async ({params}) => {
    const slug = params.article;
    const article = await client.getEntries({
        content_type: "article",
        limit: 1,
        'fields.slug' : slug,
    })

    return {
        props: {
            article: article.items[0],
        }
    }

}