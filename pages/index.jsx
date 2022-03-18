import client from "../contentful";
import {MainPage} from "../containers/MainPage/MainPage";
import MainContainer from "../components/MainContainer/MainContainer";
import {useRouter} from "next/router";
import getLocale from "../functions/getLocale";

const Home = (props) => {
    let router = useRouter();
    let title = getLocale("title", props.home.fields, router);
    return (
        <MainContainer title={title}>
            <MainPage home={props.home} articles={props.articles}/>
        </MainContainer>
    )
}

export default Home;

export const getStaticProps = async ({locale}) => {
    const home = await client.getEntries({
        content_type: "home",
        limit: 1,
    })
    const articles = await client.getEntries({
        content_type: "article",
        select: `fields.title${locale},fields.slug,fields.desc${locale},fields.preview`
    })
    const [homePage] = home.items;
    return {
        props: {
            title: "Мой блог",
            home: homePage,
            articles: articles.items
        },
        revalidate: 3600,
    }
};

// export const getServerSideProps: GetServerSideProps = async () => {
//     return {
//         props: {
//             title: "Мой блог",
//         },
//     }
// };
