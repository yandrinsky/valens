import Head from 'next/head'
import styles from '../styles/Home.module.css'
import client from "../contentful";
import AboutPage from "../containers/AboutPage/AboutPage";
import MainContainer from "../components/MainContainer/MainContainer";
const About = props => {
    return (
        <MainContainer title="About">
            <AboutPage about={props.about}/>
        </MainContainer>
    )
}

export const getStaticProps = async () => {
    const about = await client.getEntries({
        content_type: "aboutPage",
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
