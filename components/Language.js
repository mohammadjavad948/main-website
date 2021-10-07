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
                      top: '-100px'
                  }}
            />
        </div>
    )
}