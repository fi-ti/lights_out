import React from 'react';
import styles from './Assembly.module.css';
import LightOnOff from './LightOnOff/LightOnOff';

const assembly = (props) => {
    return <div className={styles.assembly}>
                {   props.lightsArr.map((light) => <LightOnOff isLight={light.isLight} 
                                                               
                                                               click={(event) => props.clicked(event, light.id, light.coordinates)}/>)}
           </div>
}

export default assembly;
