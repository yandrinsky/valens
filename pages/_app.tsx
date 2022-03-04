import '../styles/globals.css'
import type { AppProps } from 'next/app'
import "bootstrap/dist/css/bootstrap.min.css"
import Header from "../components/Navigation/Header/Header"
import client from "../contentful";

function MyApp({ Component, pageProps }: AppProps) {
  return (
      <>
        <Header/>
        <Component {...pageProps} />=
      </>

  )
}

export const getStaticProps = async () => {
    const main = await client.getEntries({
        content_type: "main_info",
        limit: 1,
    })
    console.log("main", main);
    const [homePage] = main.items;
    return {
        props: {
            title: "Мой блог",
            home: homePage,
        },
        revalidate: 3600,
    }
};



export default MyApp
