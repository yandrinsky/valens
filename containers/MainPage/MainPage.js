import {documentToReactComponents} from "@contentful/rich-text-react-renderer";
import styles from "../../styles/Home.module.css";
import css from './MainPage.module.css';
import ArticlesList from "../../components/ArticlesList/ArticlesList";
import Background from "../../components/UI/Background/Background";

export function MainPage({home, articles}){
    const {title, description, background} = home.fields;
    return (
        <div>
            <Background description={description} url={background?.fields.file.url} title={title}/>
            <div  className={styles.container}>
                <ArticlesList articles={articles}/>
            </div>
        </div>
    )
}