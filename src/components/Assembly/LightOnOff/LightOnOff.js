import React from 'react';
import styles from './LightOnOff.module.css';

const lightOnOff = (props) => {
    const style = [styles.light];
    if(!props.isLight) {
        style.push(styles.false);
    } else {
        style.push(styles.true);
    }
    return (<div onClick={props.click} className={style.join(' ')}>
                
           </div>
           );
}

export default lightOnOff;