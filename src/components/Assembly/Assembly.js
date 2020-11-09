import React from 'react';
import styles from './Assembly.module.css';
import LightOnOff from './LightOnOff/LightOnOff';

const assembly = (props) => {
    return <div className={styles.assembly}>
                {props.lightsArr.map(() => <LightOnOff />)}
           </div>
}

export default assembly;
