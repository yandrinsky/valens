import Head from 'next/head'
import styles from '../styles/Home.module.css'
import client from "../contentful";
import AboutPage from "../containers/AboutPage/AboutPage";
const About = props => {
    return (
        <div>
            <Head>
                <title>My blog</title>
            </Head>
            <AboutPage about={props.about}/>
        </div>
    )
}

export const getStaticProps = async () => {
    const about = await client.getEntries({
        content_type: "page_about",
        limit: 1,
    })
    const [aboutPage] = about.items;
    return {
        props: {
            about: aboutPage,
        },
        revalidate: 3600,
    }
};

export default About
