import React from 'react';
import styles from './Footer.module.css';
const Footer = ()=>{
    return(
        <div className={`p-2 ${styles.footer}`}>
            <div className="small text-center">&copy; 2019</div>
        </div>
    )
}

export default Footer;