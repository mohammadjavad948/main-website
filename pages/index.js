import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import TextTransition, {presets} from "react-text-transition";
import {useEffect, useState} from "react";

export default function Home() {
  return (
      <div className={styles.container}>
        <Head>
            <title>big javad</title>
            <meta name="description" content="mohammad javad also known as big javad is a fullstack developer who loves react"/>
        </Head>
        <div className={styles.main}>
            <Image
                src={"/prof.png"}
                width={150}
                height={150}
                alt={"profile image"}
                className={styles.image}
            />
            <div>
                <h1 className={styles.title}>mohammad javad</h1>
                <Technology />
            </div>
        </div>
      </div>
  )
}

const TEXTS = [
    "React",
    "Angular",
    "Laravel",
    "Nodejs"
];

function Technology(){
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() =>
                setIndex(index => index + 1),
            1500 // every 3 seconds
        );
        return () => clearTimeout(intervalId);
    }, []);

    return (
        <span className={styles.description}>
            <TextTransition
                springConfig={presets.wobbly}
                text={ TEXTS[index % TEXTS.length] }
                inline
            />
            &nbsp; developer
        </span>
    )
}

export async function getStaticProps(context) {
    return {
        props: {}, // will be passed to the page component as props
    }
}
