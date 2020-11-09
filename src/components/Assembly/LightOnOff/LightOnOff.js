import React from 'react';
import styles from './LightOnOff.module.css';

const lightOnOff = (props) => {
    return (<div className={styles.light}>
                <button onClick={props.click}></button>
           </div>
           );
}

export default lightOnOff;