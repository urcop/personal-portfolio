import React from 'react';
import styles from "./nav_btn.module.css";
import {Link} from "react-router-dom";

const NavigationButton = ({name, link}) => {

    return (
        <Link to={link} className={styles.button}>{name}</Link>
    );
};

export default NavigationButton;
