import React from 'react';
import styles from './Header.module.css';
const Header = ()=>{
    return(
        <div className={`p-2 ${styles.layoutHeader}`}>
            <div className="container">
                <h1 className="text-white text-center">Post List</h1>
            </div>
        </div>
    )
}

export default Header;