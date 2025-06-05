import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const slice = createSlice({
    name: "Registration",
    initialState: {
        signupData: []
    },
    reducers: {
        getSignupApi: (state, action) => {
            state.signupData = [action.payload];
        },
    },
});

export const rdAction = slice.actions;

export const postSignupLogin = (formData) => {
    return (dispatch) => {
        axios.post("https://test-api.m-staging.in/api/society-register", {
            society_name: formData.getSocietyName,
            name: formData.getName,
            mobile_number: formData.getMobile,
            email: formData.getEmail,
            city_id: formData.getCity,
            pincode: formData.getPincode,
            address: formData.getLocation,
            is_agree_terms_condition: formData.getSector,
            ...(isNaN(formData.getArea)
                ? { area_name: formData.getArea }
                : { area_id: formData.getArea })
        })

            .then((response) => {
                console.log("Post Success:", response.data);
                dispatch(rdAction.getSignupApi(response.data));
            })
            .catch((error) => {
                console.error("Signup error:", error);
            });
    };
};


export const postCompanyForm = (formData) => {
    return (dispatch) => {
        axios.post("https://test-api.m-staging.in/api/company-register", {
            company_name: formData.getCompanyName,
            company_brand_name: formData.getBrandName,
            name: formData.getName,
            email: formData.getEmail,
            mobile_number: formData.getMobile,
            city_id: formData.getCity,
            area_id: formData.getArea,
            pincode: formData.getPincode,
            address_line_1: formData.getAddress1,
            address_line_2: formData.getAddress2,
            sector: formData.sector,
            is_agree_terms_condition: formData.getSector
        })
            .then((response) => {
                console.log("Company Registered:", response.data);
                dispatch(rdAction.getSignupApi(response.data));
            })
            // .catch((error) => {
            //     console.error("Company Signup error:", error);
            // });

            .catch((error) => {
                console.error("Company Signup error:", error);
                if (error.response && error.response.data && error.response.data.message) {
                    alert(error.response.data.message);
                } else {
                    alert("An unexpected error occurred. Please try again.");
                }
            });
    };
};


