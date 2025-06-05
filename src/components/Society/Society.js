import React, { useEffect, useState } from 'react';
import Realityimg from '../Realityimg/Realityimg';
import { useDispatch } from 'react-redux';
import { postSignupLogin } from '../../slice/slice';
import { GoogleMap, Marker, useJsApiLoader } from '@react-google-maps/api';
import Modal from 'react-bootstrap/Modal';
import axios from 'axios';

const SocietyPage = () => {
    const [formData, setFormData] = useState({
        getSocietyName: '',
        getName: '',
        getMobile: '',
        getEmail: '',
        getCity: '',
        getArea: '',
        getPincode: '',
        getLocation: ''
    });

    const dispatch = useDispatch();
    const [cities, setCities] = useState([]);
    const [areas, setAreas] = useState([]);
    const [isAreaAvailable, setIsAreaAvailable] = useState(true);



    useEffect(() => {
        axios.get("https://test-api.m-staging.in/api/all-cities")
            .then(response => {
                const cityList = response?.data?.data;
                if (Array.isArray(cityList)) {
                    setCities(cityList);
                } else {
                    console.error('Unexpected response format:', response);
                    setCities([]);
                }
            })
            .catch((error) => {
                console.error('Error fetching cities:', error);
                setCities([]);
            });
    }, []);


    const [showMap, setShowMap] = useState(false);
    const [selectedLocation, setSelectedLocation] = useState({ lat: 19.0760, lng: 72.8777 });

    const { isLoaded } = useJsApiLoader({
        googleMapsApiKey: 'AIzaSyDBi4K0VpayUn94H3QO_hDEu2nxgApYkEQ'
    });

    const handleChange = async (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));

        if (name === 'getCity') {
            try {
                const city = cities.find(c => c.city_name === value);
                if (city?.id) {
                    const res = await axios.get(`https://test-api.m-staging.in/api/areas/${city.id}`);
                    const areaList = res?.data?.data || [];
                    setAreas(areaList);
                    setIsAreaAvailable(areaList.length > 0);
                    setFormData(prev => ({ ...prev, getArea: '' })); 
                } else {
                    setAreas([]);
                    setIsAreaAvailable(false);
                }
            } catch (err) {
                console.error('Error fetching areas:', err);
                setAreas([]);
                setIsAreaAvailable(false);
            }
        }

    };


    // const handleChange = (e) => {
    //     const { name, value } = e.target;
    //     setFormData(prev => ({ ...prev, [name]: value }));
    // };

    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     console.log("Submitting formData:", formData);
    //     dispatch(postSignupLogin(formData));
    // };

    const handleSubmit = (e) => {
        e.preventDefault();
        const {
            getSocietyName,
            getName,
            getMobile,
            getEmail,
            getCity,
            getPincode,
            getLocation
        } = formData;

        if (!getSocietyName || !getName || !getMobile || !getEmail || !getCity || !getPincode || !getLocation) {
            alert('Please fill in all required fields.');
            return;
        }

        console.log("Submitting formData:", formData);
        dispatch(postSignupLogin(formData));
    };


    const handleMapClick = (e) => {
        const lat = e.latLng.lat();
        const lng = e.latLng.lng();
        setSelectedLocation({ lat, lng });
        setFormData(prev => ({ ...prev, getLocation: `${lat},${lng}` }));
        setShowMap(false);
    };

    return (
        <div className="mt-3">
            <Realityimg />
            <h2>Sign Up for <span style={{ color: "#fab600" }}>Society Account</span></h2>

            <form onSubmit={handleSubmit} className='mt-5 row'>
                <div className='mt-2 col-12 col-lg-9'>
                    <label>Society Name</label>
                    <input
                        type='text'
                        name="getSocietyName"
                        value={formData.getSocietyName}
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
                    <label>Mobile No.</label>
                    <input
                        type='number'
                        name="getMobile"
                        value={formData.getMobile}
                        onChange={handleChange}
                        className='form-control mt-2'
                    />
                </div>
                <div className='mt-2 col-12 col-lg-4'>
                    <label>Email</label>
                    <input
                        type='email'
                        name="getEmail"
                        value={formData.getEmail}
                        onChange={handleChange}
                        className='form-control mt-2'
                    />
                </div>
                <div className='mt-2 col-12 col-lg-4'>
                    <label>City</label>
                    {/* <input
                        type='text'
                        name="getCity"
                        value={formData.getCity}
                        onChange={handleChange}
                        className='form-control mt-2'
                    /> */}
                    <select
                        id="city"
                        name="getCity"
                        className="form-control mt-2"
                        value={formData.getCity}
                        onChange={handleChange}
                    >
                        <option value="">-- Select a City --</option>
                        {cities.map((city) => (
                            <option key={city.id} value={city.city_name}>
                                {city.city_name}
                            </option>
                        ))}
                    </select>


                </div>
                <div className='mt-2 col-12 col-lg-4'>
                    <label>Area</label>
                    {isAreaAvailable ? (
                        <select
                            name="getArea"
                            value={formData.getArea}
                            onChange={handleChange}
                            className='form-control mt-2'
                        >
                            <option value="">-- Select Area --</option>
                            {areas.map(area => (
                                <option key={area.id} value={area.id}>{area.area_name}</option>
                            ))}
                        </select>
                    ) : (
                        <input
                            type='text'
                            name="getArea"
                            value={formData.getArea}
                            onChange={handleChange}
                            className='form-control mt-2'
                            placeholder="Enter Area Name"
                        />
                    )}
                </div>



                {/* <div className='mt-2 col-12 col-lg-4'>
                    <label>Area</label>
                    <input
                        type='text'
                        name="getArea"
                        value={formData.getArea}
                        onChange={handleChange}
                        className='form-control mt-2'
                    />
                </div> */}
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
                    <label>Society Location On Google Map</label>
                    <div className="d-flex">
                        {/* <input
                            type='text'
                            name="getLocation"
                            value={formData.getLocation}
                            readOnly
                            className='form-control mt-2 me-2'
                        />
                        <Button variant="primary" className='mt-2' onClick={() => setShowMap(true)}>
                            Pick on Map
                        </Button> */}

                        <input
                            type='text'
                            name="getLocation"
                            value={formData.getLocation}
                            readOnly
                            className='form-control mt-2 me-2'
                            onClick={() => setShowMap(true)}
                        />

                    </div>
                </div>

                <div className='mt-2 col-12 '>
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

                <div className='mt-4'>
                    <button
                        type='submit'
                        style={{
                            background: "#00517f",
                            color: "#fff",
                            padding: "7px 30px",
                            width: "150px",
                            border: "none",
                            borderRadius: "3px"
                        }}>
                        Sign Up
                    </button>
                </div>
            </form>

            <Modal show={showMap} onHide={() => setShowMap(false)} size="lg">
                <Modal.Header closeButton>
                    <Modal.Title>Select Location on Map</Modal.Title>
                </Modal.Header>
                <Modal.Body style={{ height: '400px' }}>
                    {isLoaded && (
                        <GoogleMap
                            center={selectedLocation}
                            zoom={12}
                            mapContainerStyle={{ width: '100%', height: '100%' }}
                            onClick={handleMapClick}
                        >
                            <Marker position={selectedLocation} />
                        </GoogleMap>
                    )}
                </Modal.Body>
            </Modal>
        </div>
    );
};

export default SocietyPage;
