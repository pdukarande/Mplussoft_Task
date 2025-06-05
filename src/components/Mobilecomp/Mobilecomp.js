import React from 'react'
import styles from "./Mobilecomp.module.css"

const Mobilecomp = () => {
    return (
        <div className={`${styles.background} text-center p-3`}>
            <div className='mt-5' style={{color:"#fff"}}>
                <h2>The New Way To </h2>
                <h1>Market Your <span style={{color:"#fab600"}}>Brand</span></h1>
            </div>
            <img
                src="/images/illustration/mobile.png"
                alt="mobile"
                className="w-75 mobile-img"
            />
        </div>

    )
}

export default Mobilecomp


//  const signInForm = {
//             society_name: getSocietyName,
//             name: getName,
//             mobile_number:getMobile,
//             email: getEmail,
//             city_id:getCity,
//             area_id:getArea,
//             pincode:getPincode,
//             address:getLocation

//         }
//         axios.post("https://test-api.m-staging.in/api/society-register", signInForm).then((response) => {
//             console.log("Post response",response.data)
//         }).catch((error) => {
//             console.log("Error Found",error)
//         })