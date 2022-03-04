import Head from 'next/head'
import styles from '../styles/Home.module.css'
import client from "../contentful";
import {documentToReactComponents} from "@contentful/rich-text-react-renderer";
import {Container, Col, Row} from "reactstrap";
import {MainPage} from "../containers/MainPage/MainPage";

const Home = (props) => {

    return (
    <div>
      <Head>
        <title>{props.home.title}</title>
      </Head>

        <MainPage home={props.home} articles={props.articles}/>

    </div>
    )
}

export default Home;

export const getStaticProps = async () => {
    const home = await client.getEntries({
        content_type: "home",
        limit: 1,
    })
    const articles = await client.getEntries({
        content_type: "article",
        select: 'fields.title,fields.slug,fields.description,fields.action,fields.preview'
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
