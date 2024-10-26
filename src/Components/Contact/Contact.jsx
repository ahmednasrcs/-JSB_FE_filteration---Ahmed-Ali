import React, { useState } from 'react';
import styles from './Contact.module.css'
import axios from 'axios';

const Contact = () => {

    let [user, setUser] = useState({
        email: "",
        phone: "",
        name: ""
    })
            ///////           ملاحظه مش شات جبتي ده من كورس البرمجه روت  و كلام باشمهندسه ناديه ده علشان بس متحسبش اني بغش :D
    const submitFromData = async(e)=> {
        e.preventDefault(); // لعدم اظاهر الدادت الي العنوان + مبتعملش تحديث للصفحه
        let { data } = await axios.post('http://upskilling-egypt.com:3001/contact', user)
        console.log(data.message)
        alert(data.message + " by Ahmed Nasr Aswan :D")
    }



    const getFromvalue = (e) => {
        let myUser = { ...user } //deep copy
        myUser[e.target.name] = e.target.value// اخد الفقيمه بتاعت كل مدخل و بعدين سواها باسمها و رماها في الاوبجيكت
        setUser(myUser) // طلما هعمل تحديث لل يوزر يبقي سيت يوزر
        console.log(user)
        console.log(e.target.value)
    }
    return (
        <>
            <div className=' container   p-5 '>
                <div className='text-center '>
                  



                    <h1 className='text-primary'>Contact Us </h1>
                    <div className="row">
                        <div className="col-6">
                            <form onSubmit={submitFromData}>
                                <div class="form-group">

                                    <input onChange={getFromvalue} type="name" className={`form-control ${styles.form} bg-info-subtle  m-2`} name="name" aria-describedby="emailHelp" placeholder="Name" />
                                </div>
                                <div class="form-group">
                                    <input onChange={getFromvalue} type="email" className={`form-control ${styles.form} bg-info-subtle  m-2`} name="email" placeholder="Email" />
                                </div>
                                <div class="form-group">
                                    <input onChange={getFromvalue} type="text" className={`form-control ${styles.form} bg-info-subtle  m-2`} name="phone" placeholder="phone" />
                                </div>

                                <button type="submit" className={`${styles.form} btn btn-outline-primary `}> Send </button>
                            </form>



                        </div>
                        <div className=" col-6">
                        <p><i class={`fa-regular fa-envelope fa-lg m-3 ${styles.font_email} `} ></i>      upskilling.eg1@gmail.com</p>
                        <p className=''> <i class={`fa-solid fa-phone fa-lg   ${styles.font_email}`}></i>   +20 115 493 2137     </p>
                        </div>
                    </div>
                </div>


            </div>

        </>
    );
}

export default Contact;
