import React, { useState } from 'react';
import Realityimg from '../Realityimg/Realityimg';
import { useDispatch } from 'react-redux';
import { postCompanyForm } from '../../slice/slice';

const Company = () => {
    const [formData, setFormData] = useState({
        getCompanyName: '',
        getBrandName: '',
        getName: '',
        getEmail: '',
        getMobile: '',
        getCity: '',
        getArea: '',
        getPincode: '',
        getAddress1: '',
        getAddress2: '',
        sector: '',
        getSector: false
    });

    const dispatch = useDispatch();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const {
            getCompanyName,
            getBrandName,
            getName,
            getEmail,
            getMobile,
            getCity,
            getArea,
            getPincode,
            getAddress1,
            getAddress2,
            sector,
            getSector
        } = formData;

        if (
            !getCompanyName.trim() ||
            !getBrandName.trim() ||
            !getName.trim() ||
            !getEmail.trim() ||
            !getMobile.trim() ||
            !getCity.trim() ||
            !getArea.trim() ||
            !getPincode.trim() ||
            !getAddress1.trim() ||
            !getAddress2.trim() ||
            !sector.trim() ||
            !getSector
        ) {
            alert("Please fill in all required fields and agree to the terms.");
            return;
        }

        console.log("Submitting formData:", formData);
        dispatch(postCompanyForm(formData));
    };


    return (
        <div className=" mt-3">
            <Realityimg />
            <h2>Sign Up for <span style={{ color: "#fab600" }}>Company Account</span></h2>

            <section className='mt-3 row'>
                <div className='mt-2 col-12 col-lg-8'>
                    <label>Company Name</label>
                    <input
                        type='text'
                        name="getCompanyName"
                        value={formData.getCompanyName}
                        onChange={handleChange}
                        className='form-control mt-2'
                    />
                </div>

                <div className='mt-2 col-12 col-lg-4'>
                    <label>Company Brand Name</label>
                    <input
                        type='text'
                        name="getBrandName"
                        value={formData.getBrandName}
                        onChange={handleChange}
                        className='form-control mt-2'
                    />
                </div>

                <div className='mt-2 col-12 col-lg-4'>
                    <label>Name</label>
                    <input
                        type='text'
                        name="getName"
                        value={formData.getName}
                        onChange={handleChange}
                        className='form-control mt-2'
                    />
                </div>

                <div className='mt-2 col-12 col-lg-4'>
                    <label>Email Id</label>
                    <input
                        type='email'
                        name="getEmail"
                        value={formData.getEmail}
                        onChange={handleChange}
                        className='form-control mt-2'
                    />
                </div>

                <div className='mt-2 col-12 col-lg-4'>
                    <label>Phone Number</label>
                    <input
                        type='text'
                        name="getMobile"
                        value={formData.getMobile}
                        onChange={handleChange}
                        className='form-control mt-2'
                    />
                </div>

                <div className='mt-2 col-12 col-lg-4'>
                    <label>City</label>
                    <input
                        type='text'
                        name="getCity"
                        value={formData.getCity}
                        onChange={handleChange}
                        className='form-control mt-2'
                    />
                </div>

                <div className='mt-2 col-12 col-lg-4'>
                    <label>Area</label>
                    <input
                        type='text'
                        name="getArea"
                        value={formData.getArea}
                        onChange={handleChange}
                        className='form-control mt-2'
                    />
                </div>

                <div className='mt-2 col-12 col-lg-4'>
                    <label>Pincode</label>
                    <input
                        type='text'
                        name="getPincode"
                        value={formData.getPincode}
                        onChange={handleChange}
                        className='form-control mt-2'
                    />
                </div>

                <div className='mt-2 col-12'>
                    <label>Address Line 1</label>
                    <input
                        type='text'
                        name="getAddress1"
                        value={formData.getAddress1}
                        onChange={handleChange}
                        className='form-control mt-2'
                    />
                </div>

                <div className='mt-2 col-12'>
                    <label>Address Line 2</label>
                    <input
                        type='text'
                        name="getAddress2"
                        value={formData.getAddress2}
                        onChange={handleChange}
                        className='form-control mt-2'
                    />
                </div>

                <div className='mt-2 col-12 col-lg-4'>
                    <label>Sector</label>
                    <input
                        type='text'
                        name="sector"
                        value={formData.sector}
                        onChange={handleChange}
                        className='form-control mt-2'
                    />
                </div>
                <div className='mt-4 col-12 '>
                    <input
                        type='checkbox'
                        name='getSector'
                        checked={formData.getSector}
                        onChange={(e) =>
                            setFormData((prev) => ({
                                ...prev,
                                getSector: e.target.checked,
                            }))
                        }
                    />
                    <span className='mx-2'>
                        By Signing Up, you agree to our Privacy Policy & Terms & Condition
                    </span>

                </div>

                <div className='mt-5'>
                    <button
                        type='button'
                        onClick={handleSubmit}
                        style={{
                            background: "#00517f",
                            color: "#fff",
                            padding: "7px 30px",
                            width: "150px",
                            border: "none",
                            borderRadius: "3px"
                        }}
                    >
                        Sign Up
                    </button>
                </div>
            </section>

        </div>
    );
};

export default Company;
