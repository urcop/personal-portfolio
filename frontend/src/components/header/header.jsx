import React from 'react';
import styles from './header.module.css'
import NavigationButton from "../buttons/nav_btn";

const Header = () => {
    return (
        <div className={styles.header}>
            <div className={styles.logo}>URCOP</div>
            <div className={styles.navigation}>
                <NavigationButton name={'ABOUT'} link={'/'}/>
                <NavigationButton name={'REVIEW'} link={'/reviews'}/>
                <NavigationButton name={'PROJECTS'} link={'/projects'}/>
                <NavigationButton name={'CONTACTS'} link={'/contacts'}/>
            </div>
        </div>);
};

export default Header;
