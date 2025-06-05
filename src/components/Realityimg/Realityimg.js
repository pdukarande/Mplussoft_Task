import React from 'react'
import styles from "./Realityimg.module.css"

const Realityimg = () => {
    return (
        <div  className='text-center text-lg-start pb-5'>
            <img src="/images/illustration/real.png"
                alt="real" className={`${styles.realimg}`}></img>
        </div>
    )
}

export default Realityimg
