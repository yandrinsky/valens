import React from 'react';
import Head from "next/head";
import {documentToReactComponents} from "@contentful/rich-text-react-renderer";
import client from "../../contentful";
import PageArticle from "../../components/Article/Article";
import {useRouter} from "next/router";

const Project = ({project}) => {
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
                <PageArticle article={project}/>
            </main>
        </div>
    );
};


export default Project;

export const getStaticPaths = async ({ locales }) => {
    const projectEntries = await client.getEntries({
        content_type: "project",
        select: 'fields.slug'
    })

    const projectsPaths = projectEntries.items.map(item => {
            return {
                params: {
                    project: item.fields.slug,
                }
            }
        })

    const projectsAndLocalesPaths = [];

    for (const locale of locales) {
        projectsPaths.forEach(item => {
            projectsAndLocalesPaths.push({ params: item.params, locale })
        })
    }

    return {
        paths: projectsAndLocalesPaths,
        fallback: true,
    }
};

export const getStaticProps = async ({params}) => {
    const slug = params.project;
    const project = await client.getEntries({
        content_type: "project",
        limit: 1,
        'fields.slug' : slug,
    })

    return {
        props: {
            project: project.items[0],
        },
        revalidate: 600,
    }

}