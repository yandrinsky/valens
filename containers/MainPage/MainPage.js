import {documentToReactComponents} from "@contentful/rich-text-react-renderer";
import styles from "../../styles/Home.module.css";
import css from './MainPage.module.css';
import ArticlesList from "../../components/ArticlesList/ArticlesList";
import Background from "../../components/UI/Background/Background";
import {useRouter} from "next/router";
import getLocale from "../../funcs/getLocale";
import {getUrl} from "../../funcs/getUrl";

export function MainPage({home, articles}){
    const router = useRouter();
    const title = getLocale("title", home.fields, router);
    const description = getLocale("desc", home.fields, router);
    const background = getUrl(home.fields.background);

    return (
        <div className={css.MainPage}>
            <Background description={description} url={background} title={title}/>
            <div  className={styles.container}>
                <ArticlesList articles={articles}/>
            </div>
        </div>
    )
}