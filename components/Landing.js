import styles from "../styles/Home.module.css";
import Image from "next/image";
import {useEffect, useState} from "react";
import TextTransition, {presets} from "react-text-transition";

export default function Landing(){

    return (
        <div className={styles.container}>
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
    "Nodejs",
    "NextJs",
    "NestJs"
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
