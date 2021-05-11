import React from 'react';

import { useFormik } from 'formik';

export function RegisterForm () {

    const formik = useFormik({

        initialValues: {
          name: '',
          email: '',
          phone: '',
          addressLineOne: '',
          addressLineTwo: '',
          pincode: '',
          city: '',
          state: '',
          longitude: '',
          latitude: ''
        },
        validate,
        onSubmit: values => {
          alert(JSON.stringify(values, null, 2))
        }
    
      })
        return (<div>
        <h1>Vendor Creation</h1>
         
        <form onSubmit={formik.handleSubmit}>        
        <label htmlFor="name">Name</label>
        <input onChange={formik.handleChange} value={formik.values.name} id='name' name='name'/>

        <label htmlFor="email">Email Address</label>
        <input onChange={formik.handleChange} value={formik.values.email} id='email' name='email'/>

        <label htmlFor="phone">Phone Number</label>
        <input onChange={formik.handleChange} value={formik.values.phone} id='phone' name='phone'/>

        <label htmlFor="addressLineOne">Address 1</label>
        <input onChange={formik.handleChange} value={formik.values.addressLineOne} id='addressLineOne' name='addressLineOne'/>

        <label htmlFor="addressLineTwo">Address 2</label>
        <input onChange={formik.handleChange} value={formik.values.addressLineTwo} id='addressLineTwo' name='addressLineTwo'/>

        <label htmlFor="pincode">Pincode</label>
        <input onChange={formik.handleChange} value={formik.values.pincode} id='pincode' name='pincode'/>

        <label htmlFor="city">City</label>
        <input onChange={formik.handleChange} value={formik.values.city} id='city' name='city'/>

        <label htmlFor="state">State</label>
        <input onChange={formik.handleChange} value={formik.values.state} id='state' name='state'/>

        <label htmlFor="longitude">Longitude</label>
        <input onChange={formik.handleChange} value={formik.values.longitude} id='longitude' name='longitude'/>

        <label htmlFor="latitude">Latitude</label>
        <input onChange={formik.handleChange} value={formik.values.latitude} id='latitude' name='latitude'/>

        <button type="submit">Create Vendor</button>

        </form>
    </div>

    )
}