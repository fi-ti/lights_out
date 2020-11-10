import React from 'react';
import styles from './HowToPlay.module.css';

const howToPlay = (props) => {
    return (<div className={styles.container}>
                <div className={styles.rulesDiv}>
                    <ul><h2>How To Play?</h2>
                        <li>Some of the lights are off while some are on.</li>
                        <li>When a light is pressed or clicked, it changes its parity. 
                            This also changes the parity of all the lights which share a 
                            boundary with the pressed light.
                        </li>
                        <li>Turn off all the lights to win.</li>
                    </ul>
                    <div>
                        <button onClick={props.close}>Close</button>
                    </div>
                </div>
            </div>);
}

export default howToPlay;