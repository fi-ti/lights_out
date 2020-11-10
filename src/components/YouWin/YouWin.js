import React from 'react';
import styles from './YouWin.module.css';

const youWin = (props) => {

    return <div className={styles.youwin}>
                <div>
                    <h1>You Win</h1>
                    <button onClick={props.closed}>Play again</button>        
                </div>
                        
           </div>
}

export default youWin;