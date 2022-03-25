import client from "../contentful";
import MainContainer from "../components/MainContainer/MainContainer";
import {useRouter} from "next/router";
import getLocale from "../funcs/getLocale";
import {ProjectsPage} from "../containers/ProjectsPage/ProjectPage";

const Projects = (props) => {
    let router = useRouter();
    let title = getLocale("title", props.projectsPage.fields, router);
    return (
        <MainContainer title={title}>
            <ProjectsPage projectsPage={props.projectsPage} projects={props.projects}/>
        </MainContainer>
    )
}

export default Projects;

export const getStaticProps = async ({locale}) => {
    const home = await client.getEntries({
        content_type: "projectsPage",
        limit: 1,
    })
    const projects = await client.getEntries({
        content_type: "project",
        select: `fields.title${locale},fields.slug,fields.desc${locale},fields.preview,fields.isCurrent,fields.isPermanent`
    })
    const [projectsPage] = home.items;
    console.log("projects", projects.items);
    return {
        props: {
            title: "Projects",
            projectsPage,
            projects: projects.items
        },
        revalidate: 600,
    }
};

// export const getServerSideProps: GetServerSideProps = async () => {
//     return {
//         props: {
//             title: "Мой блог",
//         },
//     }
// };
