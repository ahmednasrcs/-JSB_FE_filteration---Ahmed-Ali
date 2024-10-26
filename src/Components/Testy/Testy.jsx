import React from 'react';
import styles from './Testy.modules.css'
import mg from '../Images/girle.png'
const Testy = () => {
    return (
        <>
            <div className=' container p-2'>

                <h1 className={`${styles} text-center m-2 p-4${styles} `}>Testymonials</h1>

                <div className='row m-2'>
                    <div className=' col-6 rounded border border-primary '>
                        <div className={`  d-flex justify-content-between p-4 `}>
                            <img src={mg} className={`rounded-circle p-2`} alt="" />
                            <div className={` d-block p-3`}>
                            <h3>
                                Courtney Henry
                            </h3>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</p>
                            <i class="fa-solid fa-star p-2"></i>
                            <i class="fa-solid fa-star p-2"></i>
                            <i class="fa-solid fa-star p-2"></i>
                            <i class="fa-solid fa-star p-2"></i>
                            </div>
                            </div>

                        </div>
                        <div className=' col-6 rounded border border-primary '>
                        <div className={` ${styles }  d-flex justify-content-between p-4 `}>
                            <img src={mg} className={`  rounded-circle p-2`} alt="" />
                            <div className={` d-block p-3`}>
                            <h3>
                                Courtney Henry
                            </h3>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</p>
                            <i className={` fa-solid fa-star p-2 `}></i>
                            <i className={`fa-solid fa-star p-2`}></i>
                            <i className={`fa-solid fa-star p-2`}></i>
                            <i className={`fa-solid fa-star p-2`}></i>
                            </div>
                            </div>

                        </div>
                        <div className=' col-6 rounded border border-primary'>
                        <div className={`  d-flex justify-content-between p-4 `}>
                            <img src={mg} className={`rounded-circle p-2 `} alt="" />
                            <div className={` d-block p-3`}>
                            <h3>
                                Courtney Henry
                            </h3>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</p>
                            <i class="fa-solid fa-star p-2"></i>
                            <i class="fa-solid fa-star p-2"></i>
                            <i class="fa-solid fa-star p-2"></i>
                            <i class="fa-solid fa-star p-2"></i>
                            </div>
                            </div>

                        </div>
                        <div className=' col-6 rounded border border-primary'>
                        <div className={`  d-flex justify-content-between p-4 `}>
                            <img src={mg} className={`rounded-circle p-2`} alt="" />
                            <div className={` d-block p-3`}>
                            <h3>
                                Courtney Henry
                            </h3>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</p>
                            <i class="fa-solid fa-star p-2"></i>
                            <i class="fa-solid fa-star p-2"></i>
                            <i class="fa-solid fa-star p-2"></i>
                            <i class="fa-solid fa-star p-2"></i>
                            </div>
                            </div>

                        </div>

                    </div>
                    

                </div>
                
            

        </>
    );
}

export default Testy;
