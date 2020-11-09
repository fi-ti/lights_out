import React from 'react';
import styles from './Cockpit.module.css';

const cockpit = (props) => {
    return <div className={styles.cockpit}>
                <div>
                    <button className={styles.playRulesBtn}>How to play ?</button> 
                </div>
                <div>
                    <p className={styles.title}>{props.title}</p>
                </div>
                <div>
                    <button className={styles.restartBtn}>Restart</button>
                </div>
           </div>
}

export default cockpit;
