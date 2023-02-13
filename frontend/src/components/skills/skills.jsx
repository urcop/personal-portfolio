import React from 'react';
import styles from "./skills.module.css";

const Skills = ({name, points}) => {
    const pointColors = {
        0: "#E0CCFF",
        1: "#C299FF",
        2: "#A366FF",
        3: "#8533FF",
        4: "#8533FF",
    }

    let getPointByLength = points => {
        let content = []
        for (let i = 0; i < points; i++){
            content.push(
                <div className={styles.point} style={{'backgroundColor': pointColors[i]}}></div>
            )
        }
        return content
    }

    return (
        <div className={styles.skill}>
            <div className={styles.name}>{name}</div>
            <div className={styles.points}>
                {getPointByLength(points)}
            </div>
        </div>
    );
};

export default Skills;
