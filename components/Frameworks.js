import styles from "../styles/Home.module.css";
import Wave from "react-wavify";

export default function Frameworks(){
    return (
        <div className={styles.frameworks}>
            <Wave fill='#210047'
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
            <h2>Frameworks</h2>
            <hr
                style={{
                    width: '70%'
                }}
            />
            <h3>ReactJs</h3>
            <h3>React Native</h3>
            <h3>Angular 2+</h3>
            <h3>VueJs</h3>
            <h3>NextJs</h3>
            <h3>Laravel</h3>
            <h3>NestJs</h3>
        </div>
    )
}