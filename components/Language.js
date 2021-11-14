import styles from "../styles/Home.module.css";
import Wave from "react-wavify";
import {useEffect, useState} from 'react';
import {useTransition, animated} from 'react-spring';
import {randomNumber} from "./randomPicker";
import sampleSize from 'lodash/sampleSize';

const MAIN_ITEMS = [
    'Typescript',
    'Javascript',
    'Python',
    'PHP',
    'C',
]

export default function Language(){

    const [items, setItems] = useState([])
    const animation = useTransition(items, {
        from: {
            opacity: 0,
            height: 0,
            innerHeight: 0,
            transform: 'perspective(600px) rotateX(0deg)',
            color: '#8fa5b6',
        },
        enter: [
            { opacity: 1, height: 80, innerHeight: 80, },
            { color: '#28d79f' },
            {delay: 500}
        ],
        leave: [{delay: 500}, { height: 0, innerHeight: 0, }, { opacity: 0 }],
        trail: 300,
    });

    useEffect(() => {
        setInterval(() => {
            setItems(sampleSize(MAIN_ITEMS, randomNumber(7)))
        }, 3000);
    }, [])

    return (
        <div className={styles.language}>
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
                      top: '-150px'
                  }}
            />
            <h2>Languages</h2>
            <hr
                style={{
                    width: '70%'
                }}
            />
            <div className={styles.animContainer}>
                {animation(({ innerHeight, ...rest }, item) => (
                    <animated.div className={styles.transitionsItem} style={rest}>
                        <animated.div style={{ overflow: 'hidden', height: innerHeight }}>{item}</animated.div>
                    </animated.div>
                ))}
            </div>
        </div>
    )
}