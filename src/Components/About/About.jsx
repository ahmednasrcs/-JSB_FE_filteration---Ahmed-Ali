import React from 'react';
import styles from "./About.module.css"
import mg from'../Images/3.png'
const About = () => {
    return (
        <>
            <div className={` p-5 container  d-flex justify-content-between ${styles.imgbac}  text-center`}>
                <div className={`${styles.left} ${styles.imgbac2} .bg-info `}>
                    <h1 className='m-5 '>About Us</h1>
                    <p>Lorem Ipsum is simply dummy text of the
                         printing and typesetting industry.
                         Lorem Ipsum has been the industry's
                          standard dummy text ever since the 1500s,
                           when an
                           <img src={mg} className={`${styles.img}`}></img>
                           </p>
                           
                </div>
                <div className={`${styles.right }`}>
                <h1 className={` primary m-5`}>Where</h1>
                    <p className='primary'>Lorem Ipsum is simply dummy text of the printing and
                         typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever
                          since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                          It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
                          It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software
                         like Aldus PageMaker including versions of Lorem Ipsum.</p>
                </div>
                

            </div>

        </>
    );
}

export default About;
