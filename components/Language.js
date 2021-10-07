import styles from "../styles/Home.module.css";
import Wave from "react-wavify";

export default function Language(){

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
            <h3>Typescript</h3>
            <h3>Javascript</h3>
            <h3>Python</h3>
            <h3>PHP</h3>
            <h3>C</h3>
        </div>
    )
}