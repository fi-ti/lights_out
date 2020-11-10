import React from 'react';
import styles from './Cockpit.module.css';

const cockpit = (props) => {
    return <div className={styles.cockpit}>
                <div className={styles.playRules}>
                    <button className={styles.playRulesBtn} onClick={props.howToPlay}>How to play ?</button> 
                </div>
                <div className={styles.title}>
                    <p className={styles.titleBtn}>{props.title}</p>
                </div>
                <div className={styles.restart}>
                    <button className={styles.restartBtn} onClick={props.restart}>Restart</button>
                </div>
           </div>
}

export default cockpit;
