import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Language from "../components/Language";
import Landing from "../components/Landing";

export default function Home() {
  return (
      <div className={styles.mainContainer}>
          <Head>
              <title>mohammad javad</title>
              <meta name="description" content="mohammad javad also known as big javad is a fullstack developer who loves react"/>
              <meta name="google-site-verification" content="qIv3dvbPg6ynoFWWLeUQloW0G_1EFXfxsZXIAso_7lI" />
          </Head>
          <Landing />
          <Language />
      </div>
  )
}

export async function getStaticProps(context) {
    return {
        props: {}, // will be passed to the page component as props
    }
}
