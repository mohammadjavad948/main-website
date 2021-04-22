import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
      <div className={styles.container}>
        <Head>
          <title>big javad</title>
        </Head>
        <div className={styles.main}>
            <div>
                <h1>'mohammad javad' also known as 'big javad'</h1>
            </div>
            <Image
                src={"/prof.png"}
                width={150}
                height={150}
                className={styles.image}
            />
        </div>
      </div>
  )
}
