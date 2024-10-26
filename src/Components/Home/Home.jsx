import React from 'react';
import styles from './Home.module.css'
const Home = () => {

    return (
        <>
            <div className={` p-2 container ${styles.imgbac} text-center  `} >
                <div className='head m-4'>
                    <p className={`h1 ${styles.color} `}>   <i class="fa-solid fa-cart-shopping h1 p-3 "></i><ins>Round Rock</ins>
                        <p className={` h5 ${styles.color}  ${styles.Trush}`}><ins>Trush Hauling</ins></p>
                    </p>
                </div>

                <button type="submit" className={`${styles.form} btn btn-outline-primary  center`}> Send </button>

                <div className={` ${styles.color}`}>
                    <h1>Lorem</h1>
                    <h1>Lorem Lorem</h1>
                        <p>Lorem Ipsum is simply dummy text of the printing and<br/>
                            typesetting industry. Lorem Ipsum has been the industry's<br/>
                             standard dummy text ever since the</p>
                    </div>
            </div>
        </>
    );
}

export default Home;
