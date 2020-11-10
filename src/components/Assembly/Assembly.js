import React from 'react';
import styles from './Assembly.module.css';
import LightOnOff from './LightOnOff/LightOnOff';

const assembly = (props) => {

    const style = [styles.assembly];
    
    if(props.squareLen === 3) {
        style.push(styles.three);
    } else if(props.squareLen === 4) {
            style.push(styles.four);
    } else if(props.squareLen === 5) {
        style.push(styles.five);
    }
    
    return <div className={style.join(' ')} id="four">
                {   props.lightsArr.map((light) => <LightOnOff isLight={light.isLight} 
                                                               click={(event) => props.clicked(event, light.id, light.coordinates)}/>) }
           </div>
}

export default assembly;
