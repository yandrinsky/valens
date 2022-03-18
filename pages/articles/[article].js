import React from 'react';
import Head from "next/head";
import {documentToReactComponents} from "@contentful/rich-text-react-renderer";
import client from "../../contentful";
import PageArticle from "../../components/Article/Article";
import {useRouter} from "next/router";

const Article = ({article}) => {
    const router = useRouter();

    return (
        <div>
            <Head>
                <title>
                    asd
                    {/*{article.fields['title_' + router.locale]}*/}
                </title>
            </Head>
            <main>
                <PageArticle article={article}/>
            </main>
        </div>
    );
};


export default Article;

export const getStaticPaths = async ({ locales }) => {
    const articleEntries = await client.getEntries({
        content_type: "article",
        select: 'fields.slug'
    })

    const articlesPaths = articleEntries.items.map(item => {
            return {
                params: {
                    article: item.fields.slug,
                }
            }
        })

    const articlesAndLocalesPaths = [];

    for (const locale of locales) {
        articlesPaths.forEach(item => {
            articlesAndLocalesPaths.push({ params: item.params, locale })
        })
    }

    return {
        paths: articlesAndLocalesPaths,
        fallback: true,
    }

    // return {
    //     paths: articleEntries.items.map(item => {
    //         return {
    //             params: {
    //                 article: item.fields.slug,
    //             }
    //         }
    //     }),
    //     fallback: false,
    //
    // }
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