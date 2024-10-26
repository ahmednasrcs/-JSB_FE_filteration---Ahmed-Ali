import React from 'react';
import styles from './Services.module.css'
import im1 from '../Images/(1).png'
import im2 from '../Images/(2).png'
import im3 from '../Images/(3).jpg'


const Services = () => {
    return (
        <>
            <div className="container text-center">

                <h1 className='text-primary'>Servicse</h1>
                <div className="row">
                    <div className=' col-4'>
                        <div className={`${styles.demo}`}>
                            <img src={im1} className={`${styles.im}`} alt="" />

                            <h5 className='m-3'>Lorem Ipsum</h5>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                Lorem Ipsum has been the industry's standard dummy
                                text ever since the 1500s,
                                when an unknown printer took a galley of type and scrambled</p>
                        </div>
                    </div>
                    <div className=' col-4'>
                        <div className={`${styles.demo}`}>
                            <img src={im3} className={`${styles.im}`} alt="" />

                            <h5 className='m-3'>Lorem Ipsum</h5>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                Lorem Ipsum has been the industry's standard dummy
                                text ever since the 1500s,
                                when an unknown printer took a galley of type and scrambled</p>
                        </div>
                    </div>
                    <div className=' col-4'>
                        <div className={`${styles.demo}`}>
                            <img src={im2} className={`${styles.im}`} alt="" />

                            <h5 className='m-3'>Lorem Ipsum</h5>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                Lorem Ipsum has been the industry's standard dummy
                                text ever since the 1500s,
                                when an unknown printer took a galley of type and scrambled</p>
                        </div>
                    
                    </div>

                </div>
                <button type="submit" className={`${styles.form} ${styles.btn} btn btn-primary m-5 w-25 `}> Help me </button>

            </div>

        </>
    );
}

export default Services;
