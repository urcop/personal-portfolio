import React from 'react';
import styles from './main.module.css'
import skillStyles from '../skills/skills.module.css'
import me from '../../assets/imgs/me.jpg'
import Skills from "../skills/skills";
import {BsGeoAlt} from 'react-icons/bs'

const Main = () => {
    return (
        <div className={styles.main}>
            <div className={styles.about}>ABOUT</div>
            <div className={styles.text}>
                Hi all, I'm Kirill and I'm a python developer. <br/>
                I solve both simple and complex tasks, such as complex
                telegram bot, turnkey website or parser script
            </div>
            <div className={styles.card}>
                <div className={styles.outline}>
                    <img src={me} alt="Мое фото" className={styles.photo}/>
                </div>
                <p className={styles.name}><span>KIRILL ZAGREBIN </span> <br/> Python Developer</p>
                <div className={skillStyles.skills}>
                    <Skills name={'Python'} points={5}/>
                    <Skills name={'Django'} points={4}/>
                    <Skills name={'Javascript'} points={3}/>
                </div>
                <div className={styles.geo}>
                    <BsGeoAlt size={36}/>
                    <p className={styles.title}>Sochi</p>
                </div>
            </div>
        </div>
    );
};

export default Main;
