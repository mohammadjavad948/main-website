import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import TextTransition, {presets} from "react-text-transition";
import {useEffect, useState} from "react";
import Wave from 'react-wavify'

export default function Home() {
  return (
      <div className={styles.mainContainer}>
          <div className={styles.container}>
              <Head>
                  <title>mohammad javad</title>
                  <meta name="description" content="mohammad javad also known as big javad is a fullstack developer who loves react"/>
                  <meta name="google-site-verification" content="qIv3dvbPg6ynoFWWLeUQloW0G_1EFXfxsZXIAso_7lI" />
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
          <div className={styles.frameworks}>
              <Wave fill='#ffffff'
                    paused={false}
                    options={{
                        height: 20,
                        amplitude: 40,
                        speed: 0.2,
                        points: 5
                    }}
                    style={{
                        position: 'absolute',
                        top: '-100px'
                    }}
              />
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
