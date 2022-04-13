import React, {useMemo} from 'react';
import css from "./ProjectsList.module.css"
import ArticleCard from "../ActicleCard/ArticleCard";
import {useRouter} from "next/router";
import getLocale from "../../funcs/getLocale";
const ProjectsList = ({projects}) => {
    let router = useRouter();

    let currentProjects = useMemo(()=> {
        return projects.map(project => {
            if(project.fields.isCurrent){
                let title = getLocale('title', project.fields, router);
                let description = getLocale('desc', project.fields, router);

                let action = router.locale === "Ru"  ? "Подробнее" : router.locale === "En"
                    ? "More..." : router.locale === "Fr" ? "Détaillé" : router.locale === "Rw" ? "Amakuru arambuye" : ""

                const {slug, preview} = project.fields;
                return <ArticleCard key={slug} title={title} description={description}
                                    preview={preview?.fields.file.url} button={action}
                                    slug={slug} type={"PROJECT"}
                />
            }
        }).filter(item => item !== undefined);
    }, [projects])

    let permanentProjects = useMemo(()=> {
        return projects.map(project => {
            if(project.fields.isPermanent){
                let title = getLocale('title', project.fields, router);
                let description = getLocale('desc', project.fields, router);

                let action = router.locale === "Ru"  ? "Подробнее" : router.locale === "En"
                    ? "More..." : router.locale === "Fr" ? "Détaillé" : router.locale === "Rw" ? "Amakuru arambuye" : ""

                const {slug, preview} = project.fields;
                return <ArticleCard key={slug} title={title} description={description}
                                    preview={preview?.fields.file.url} button={action}
                                    slug={slug} type={"PROJECT"}
                />
            }
        }).filter(item => item !== undefined);
    }, [projects])

    let archiveProjects = useMemo(()=> {
        return projects.map(project => {
            if(!project.fields.isPermanent && !project.fields.isCurrent){
                let title = getLocale('title', project.fields, router);
                let description = getLocale('desc', project.fields, router);

                let action = router.locale === "Ru"  ? "Подробнее" : router.locale === "En"
                    ? "More..." : router.locale === "Fr" ? "Détaillé" : router.locale === "Rw" ? "Amakuru arambuye" : ""

                const {slug, preview} = project.fields;
                return <ArticleCard key={slug} title={title} description={description}
                                    preview={preview?.fields.file.url} button={action}
                                    slug={slug} type={"PROJECT"}
                />
            }
        }).filter(item => item !== undefined);
    }, [projects]);

    return (
        <div className={css.ProjectsList}>
            {
                currentProjects.length > 0 ? <>
                    <hr/>
                    <h2 className={css.project__title}>{router.locale === "Ru"  ? "Текущие проекты" : router.locale === "En"
                        ? "Current projects" : router.locale === "Fr" ? "Projets en cours" : router.locale === "Rw" ? "Imishinga iri gukorwa" : ""}</h2>
                    <hr/>
                    <div className={css.grid}>
                        {currentProjects}
                    </div>
                </> : null
            }
            {
                permanentProjects.length > 0 ? <>
                    <hr/>
                    <h2 className={css.project__title} >{router.locale === "Ru"  ? "Постоянные проекты" : router.locale === "En"
                        ? "Permanent projects" : router.locale === "Fr" ? "Projets permanents" : router.locale === "Rw" ? "Imishinga ihoraho" : ""}</h2>
                    <hr/>
                    <div className={css.grid}>
                        {permanentProjects}
                    </div>
                </> : null
            }
            {
                archiveProjects.length > 0 ? <>
                    <hr/>
                    <h2 className={css.project__title}>{router.locale === "Ru"  ? "Завершённые проекты" : router.locale === "En"
                        ? "Archival projects" : router.locale === "Fr" ? "Projets d'archives" : router.locale === "Rw" ? "Imishinga yarangiye" : ""}</h2>
                    <hr/>
                    <div className={css.grid}>
                        {archiveProjects}
                    </div>
                </> : null
            }
        </div>
    );
};

export default ProjectsList;