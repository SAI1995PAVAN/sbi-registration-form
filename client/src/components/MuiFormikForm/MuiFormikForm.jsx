import React, { useState, useEffect } from 'react'

import TextField from '@mui/material/TextField';
import data from '../../data/data.json';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
import {entities,states,districts} from '../../data/data'
import { Form,Field,Formik,ErrorMessage} from 'formik';
import './MuiFormikForm.css';
import * as Yup from 'yup';
import { InputLabel } from '@mui/material';
import { styled } from '@mui/system';


const CustomButton = styled(Button)(({ theme }) => ({
    padding:'0.5em 2.5em',
  textAlign: 'center',
  textTransform: 'uppercase',
  margin:'1em 0',
  borderRadius:' 4px',
  cursor: 'pointer',
  color:'#fff',
  backgroundColor:'#A71A59',
    borderColor: '#A71A59',
    display: 'block',
  margin:'auto',
    fontWeight: 'bold',
    '&:hover': {
        backgroundColor: '#531333',
        borderColor: '#531333',
  }
}))

const validationSchema = Yup.object({
    nameOfEntity: Yup.string()
        .required('Name is required')
        .min(5, 'Name must be at least five letters')
        .max(30, 'Name cannot exceed 30 charecters'),
    mobileCode: Yup.string().required('Select the mobile code'),
    mobileNumber: Yup.string()
        .matches(/^[0-9]{10}$/, 'Invalid mobile number')
        .required('Mobile number is required'),
    email: Yup.string()
        .email('Invalid email address')
        .required('Email is required'),
    entityConstitutionType: Yup.string()
        .required('Please select the type of entity'),
    state: Yup.string()
        .required('Please select the state'),
    district: Yup.string()
        .required('Please select the district'),
    pincode: Yup.string().matches(/^\d{6}$/,'Invalid pincode')
        .required('provide the pincode'),
    branchName: Yup.string()
        .required('Please enter the name of the branch'),
    creditFacility: Yup.boolean()
        .oneOf([true, false], 'Provide information regarding credit facility').default([false]),
    sendSmsRequest:Yup.boolean().oneOf([true], 'You must agree to the terms'),
})


    
const MuiFormikForm = () => {
  return (
    <div className='form-component'>
          <Formik
            initialValues={{
                nameOfEntity: '',
                mobileCode: '',
                mobileNumber:'',
                email: '',
                entityConstitutionType: '',
                state: '',
                district: '',
                pincode:'',
                branchName: '',
                creditFacility: false,
                sendSmsRequest:true
            }}
            validationSchema={validationSchema}
            onSubmit={(values,formikHelpers) => {
               
                console.log(values);
                formikHelpers.resetForm()
            }}  
          >
            {
                ({errors,isValid,touched,dirty}) => (
                    <Form>
                    <div className='form-control'>
                        <InputLabel className='title' htmlFor='nameOfEntity'>Name of the Entity</InputLabel>
                        <Field
                            id='nameOfEntity'
                            name='nameOfEntity'
                            type='text'
                            as={TextField}
                            variant='standard'
                            className='inputField'
                            error={Boolean(errors.nameOfEntity) && Boolean(touched.nameOfEntity)}
                            // helperText={Boolean(touched.nameOfEntity) && errors.nameOfEntity}
                        />  
                        </div>  
                        {touched.nameOfEntity && errors.nameOfEntity && (
                        <span className='error-message'>{errors.nameOfEntity}</span>
                        )}
                        {/* --------------------------------------------------------------------- */}
                    <div className='form-control'>
                            <InputLabel className='title' htmlFor='mobileNumber'>Mobile Number</InputLabel>
                            <div className='inputFields'>
                            <Field
                            name='mobileCode'
                            type='text'
                            as={Select}
                            variant='standard'
                            className='selectCountry select'
                            error={Boolean(errors.mobileCode) && Boolean(touched.mobileCode)}
                            // helperText={Boolean(touched.mobileCode) && errors.mobileCode}
                            >
                            <MenuItem value='' className='please-select'>Please Select</MenuItem>
                            {data.countries.map((country,index) => {
                                return <MenuItem key={index} value={country.code}>{`(${country.code}) ${country.name}`}</MenuItem>
                            })}
                                </Field>
                            
                        <Field
                            // id='mobileNumber'
                            name='mobileNumber'
                            type='text'
                            as={TextField}
                            variant='standard'
                            className='mobile'
                            error={Boolean(errors.mobileNumber) && Boolean(touched.mobileNumber)}
                            // helperText={Boolean(touched.mobileNumber) && errors.mobileNumber}
                        />   
                        </div>
                       
                    </div> 
                        <div className='mobile-errors'>
                        {touched.mobileCode && errors.mobileCode && (
                        <span className='error-message'>{errors.mobileCode}</span>
                        )}
                        {touched.mobileNumber && errors.mobileNumber && (
                        <span className='error-message'>{errors.mobileNumber}</span>
                            )}
                        </div>
                    {/* ---------------------------------------------------------------------- */}
                        <div className='form-control'>
                        <InputLabel className='title' htmlFor='email'>Email</InputLabel>
                        <Field
                            id='email'
                            name='email'
                            type='email'
                            as={TextField}
                            variant='standard'
                            className='inputField'
                        />  
                        </div>
                        {touched.email && errors.email && (
                        <span className='error-message'>{errors.email}</span>
                        )}
                        {/* ------------------------------------------------------------ */}
                        <div className='form-control'>
                            <InputLabel className='title' htmlFor='entityConstitutionType'>Entity constitution type</InputLabel>
                            <Field
                               id='entityConstitutionType'
                               name='entityConstitutionType'
                               type='text'
                               as={Select}
                               variant='standard'
                               className='singleInputSelect select'
                            >
                                 <MenuItem value='' className='please-select'>Please Select</MenuItem>
                                {entities.map((type) => {
                                return <MenuItem key={type}  value={type}>{ type.toUpperCase()}</MenuItem>
                                })}
                            </Field>
                        </div>
                        {touched.entityConstitutionType && errors.entityConstitutionType && (
                        <span className='error-message'>{errors.entityConstitutionType}</span>
                        )}
                        {/* --------------------------------------------------------- */}
                        <h3 className='location-title'>Preferred Branch Location</h3>
                        <div className='form-control'>
                            <InputLabel className='title' htmlFor='state'>State</InputLabel>
                            <Field
                               id='state'
                               name='state'
                               type='text'
                               as={Select}
                               variant='standard'
                               className='singleInputSelect select'
                            >
                                 <MenuItem value='' className='please-select'>Please Select</MenuItem>
                                {states.map((type) => {
                                return <MenuItem key={type}  value={type}>{ type.toUpperCase()}</MenuItem>
                                })}
                            </Field>
                        </div>
                        {touched.state && errors.state && (
                        <span className='error-message'>{errors.state}</span>
                        )}
                        {/* ----------------------------------------------------------------- */}
                        <div className='form-control'>
                            <InputLabel className='title' htmlFor='district'>District</InputLabel>
                            <Field
                               id='district'
                               name='district'
                               type='text'
                               as={Select}
                               variant='standard'
                               className='singleInputSelect select'
                            >
                                 <MenuItem value='' className='please-select'>Please Select</MenuItem>
                                {districts.map((type) => {
                                return <MenuItem key={type}  value={type}>{ type.toUpperCase()}</MenuItem>
                                })}
                            </Field>
                        </div>
                        {touched.district && errors.district && (
                        <span className='error-message'>{errors.district}</span>
                        )}
                        {/* ----------------------------------------------------------------- */}
                        <div className='form-control'>
                        <InputLabel className='title' htmlFor='pincode'>Pincode</InputLabel>
                        <Field
                            id='pincode'
                            name='pincode'
                            type='text'
                            as={TextField}
                            variant='standard'
                            className='inputField'
                        />  
                        </div> 
                        {touched.pincode && errors.pincode && (
                        <span className='error-message'>{errors.pincode}</span>
                        )}
                        {/* ------------------------------------------------------------------- */}
                        <div className='form-control'>
                        <InputLabel className='title' htmlFor='branchName'>Branch Name</InputLabel>
                        <Field
                            id='branchName'
                            name='branchName'
                            type='text'
                            as={TextField}
                            variant='standard'
                            className='inputField'
                        />  
                        </div> 
                        {touched.branchName && errors.branchName && (
                        <span className='error-message'>{errors.branchName}</span>
                        )}
                        {/* ------------------------------------------------------------------------- */}
                        <div className='form-control-radio'>
                            <InputLabel className='title' htmlFor='creditFacility'>Do you have any credit facility?</InputLabel>
                            <Field
                                id='creditFacility'
                                name='creditFacility'
                                type='radio'
                                as={RadioGroup}
                                className='radio-group'
                            >
                            <div className='radio-buttons'>
                                <FormControlLabel value="true" control={<Radio />} label="Yes" />
                                <FormControlLabel value="false" control={<Radio />} label="No" />
                                </div>
                            </Field>   
                        </div>
                        {touched.creditFacility && errors.creditFacility && (
                        <span className='error-message'>{errors.creditFacility}</span>
                        )}
                        {/* ----------------------------------------------------------- */}
                         <div className='form-checkbox'>
                            <Field
                                name='sendSmsRequest'
                                type='checkbox'
                                as={Checkbox}
                                className='radio-group'
                            />
                            I allow SBI's correspondence to call/SMS me with reference to my application.
                            
                        </div>
                        {touched.sendSmsRequest && errors.sendSmsRequest && (
                        <span className='error-message'>{errors.sendSmsRequest}</span>
                        )}
                        {/* ----------------------------------------------------------------- */}
                        <CustomButton
                            type='submit'
                            variant='contained'
                            className='submit'
                            disabled={!dirty || !isValid}
                        >
                            Register
                        </CustomButton>
                        {/* <button className='submit' type='submit'>Register</button> */}
                    </Form>
                )
            }
            
        </Formik>              
      </div>
      
  )
}

export default MuiFormikForm