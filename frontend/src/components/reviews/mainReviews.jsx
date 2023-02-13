import React, {useState} from 'react';
import styles from './reviews.module.css'
import axios from "axios";

const MainReviews = () => {

    const [reviews, setReviews] = useState()

    async function fetchReviews() {
        const response = await axios.get('http://localhost:8000/api/reviews/?format=json')
        setReviews(response.data)
    }

    console.log(reviews)

    return (
        <div className={styles.reviews}>
            <button onClick={fetchReviews}>GET REVIEWS</button>
        </div>
    );
};

export default MainReviews;
