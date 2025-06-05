import React from 'react'
import styles from "./Registration.module.css"
import { useNavigate } from 'react-router-dom';
import Realityimg from '../Realityimg/Realityimg';

const Registration = () => {

    const navigate = useNavigate();
    const data = [
        {
            imgPath: "/images/illustration/Society.png",
            name: "Society",
            desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
            alt: "Society"
        },
        {
            imgPath: "/images/illustration/company.png",
            name: "Company",
            desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
            alt: "Company"
        },


    ]

    const handleClick = (item) => {
        if (item.name === "Society") {
            navigate('/society');
        } else if (item.name === "Company") {
            navigate('/company');
        }

    };

    const navigateToSociety = () => {
        navigate('/society')
    }

    return (
        <div className={`${styles.alignContent} mt-3`}>
            <Realityimg />
            <div>
                <h2>New Registration</h2>
                <p style={{ color: "#585858" }}>Please Select account type for registraion with Reality Roof</p>

                {
                    data.map((newData) => {
                        return (
                            <>
                                <div className={`${styles.content} d-flex p-3 mt-4`}
                                    onClick={() => handleClick(newData)}>
                                    <div >
                                        <img src={newData.imgPath} className={styles.setImgwidth} alt={newData.alt}></img>
                                    </div>
                                    <div className='mx-4'>
                                        <h6>{newData.name}</h6>
                                        <p className={`${styles.setDesc} mb-0`}>{newData.desc}</p>
                                    </div>
                                </div>
                            </>
                        )
                    })

                }

                <div className='text-center text-lg-start'>
                    <button className='border-0 mt-5' onClick={navigateToSociety} style={{ background: "#08a28c", padding: "5px 10px", color: "#fff", fontSize: "12px" }}>GO TO SIGN UP</button>
                    <p className='mt-5'>Already have an account? <span>Log in</span></p>
                </div>

            </div>
        </div>
    )
}

export default Registration
