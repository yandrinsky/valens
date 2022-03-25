import styles from "../../styles/Home.module.css";
import ArticlesList from "../../components/ArticlesList/ArticlesList";
import Background from "../../components/UI/Background/Background";
import {useRouter} from "next/router";
import getLocale from "../../funcs/getLocale";
import {getUrl} from "../../funcs/getUrl";
import ProjectsList from "../../components/ProjectsList/ProjectsList";

export function ProjectsPage({projectsPage, projects}){
    const router = useRouter();
    const title = getLocale("title", projectsPage.fields, router);
    const description = getLocale("desc", projectsPage.fields, router);
    const background = getUrl(projectsPage.fields.background);

    return (
        <div>
            <Background description={description} url={background} title={title}/>
            <div  className={styles.container}>
                <ProjectsList projects={projects}/>
            </div>
        </div>
    )
}