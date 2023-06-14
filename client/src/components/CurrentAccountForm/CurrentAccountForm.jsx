import React, { useState, useEffect } from 'react'
import './Style.css';
import TextField from '@mui/material/TextField';
import data from '../../data/data.json';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import {entities,states,districts} from '../../data/data'
import { Form,Field,Formik } from 'formik';
const CurrentAccountForm = () => {
  const[inputValues, setInputValues] = useState({
    nameOfEntity: '',
    mobileCode: '',
    mobileNumber:'',
    email: '',
    entityConstitutionType: '',
    state: '',
    district: '',
    pincode: '',
    branchName: '',
    creditFacility: false,
    sendSmsRequest:true
  })

  useEffect(() => {
    console.log(inputValues)
  },[inputValues])

  const handleInputChange = (e) => {
    setInputValues({...inputValues,[e.target.name]:e.target.value})
  }

  const handleFormSubmit = (e) => {
    e.preventDefault()
    console.log(inputValues)
  }

  return (
    <div className='form-component'>
      <h2 className='form-component-subheading'>Please help us know more about you</h2>
      <form onSubmit={handleFormSubmit}>
        <div className='form-control'>
          <div className='title'>
            <label htmlFor="nameOftheEntity">Name of the Entity</label>
            <span>(As per PAN/CIN/GSTIN)</span>
          </div>
          <TextField
            name='nameOfEntity'
            id='nameOfEntity'
            variant='standard'
            label=''
            className='inputField'
            type='text'
            value={inputValues.nameOfEntity}
            onChange={handleInputChange}
          />
        </div>
        {/*----------------------------------------------------------------- */}
        <div className='form-control'>
          <label className='title' htmlFor="mobileNumber">Mobile Number</label>
          <div className='inputFields'>
            <Select
              className='selectCountry select'
              value={inputValues.mobileCode}
              variant='standard'
              name='mobileCode'
              onChange={handleInputChange}
            >
              {/* <div className='dropdown-scroll'> */}
              <MenuItem value='' className='please-select'>Please Select</MenuItem>
              {data.countries.map((country,index) => {
                return <MenuItem key={index} value={country.code}>{`(${country.code}) ${country.name}`}</MenuItem>
              })}
                {/* </div> */}
            </Select>
            <TextField
              variant='standard'
              name='mobileNumber'
              label=''
              className='inputField mobile'
              type='text'
              value={inputValues.mobileNumber}
              onChange={handleInputChange}
            />
          </div>
          {/* ---------------------------------------------------------------- */}
        </div>
        <div className='form-control'>
          <label className='title' htmlFor="email">Email</label>
          <TextField
            variant='standard'
            label=''
            name='email'
            id='email'
            className='inputField'
            type='email'
            value={inputValues.email}
            onChange={handleInputChange}
          />
        </div>
        {/* ------------------------------------------------------------------ */}
        <div className='form-control'>
          <label className='title' htmlFor="entityType">Entity Constitution Type</label>
          <Select
            variant='standard'
            className='singleInputSelect select'
            name='entityConstitutionType'
            id='entityConstitutionType'
             value={inputValues.entityConstitutionType}
            onChange={handleInputChange}
          >

            {/* <div className='dropdown-scroll'> */}
            <MenuItem value='' className='please-select'>Please Select</MenuItem>
            {entities.map((type) => {
              return <MenuItem key={type}  value={type}>{ type.toUpperCase()}</MenuItem>
            })}
              {/* </div> */}
          </Select>
        </div>
        {/* ----------------------------------------------------------------- */}
        <h3 className='location-title'>Preferred Branch Location</h3>
        <div className='form-control'>
        <label className='title' htmlFor="state">State</label>
          <Select
            variant='standard'
            className='singleInputSelect select'
            name='state'
            id='state'
             value={inputValues.state}
            onChange={handleInputChange}
          >
            {/* <div className='dropdown-scroll'> */}
            <MenuItem value='' className='please-select'>Please Select</MenuItem>
            {states.map((type) => {
              return <MenuItem key={type}  value={type}>{ type.toUpperCase()}</MenuItem>
            })}
              {/* </div> */}
          </Select>
        </div>
        {/* ----------------------------------------------------------------- */}
        <div className='form-control'>
        <label className='title' htmlFor="districts">Districts</label>
          <Select
            variant='standard'
            className='singleInputSelect select'
            name='district'
            id='district'
            value={inputValues.district}
            onChange={handleInputChange}
          >
            {/* <div className='dropdown-scroll'> */}
            <MenuItem value='' className='please-select'>Please Select</MenuItem>
            {districts.map((type) => {
              return <MenuItem key={type}  value={type}>{ type.toUpperCase()}</MenuItem>
            })}
              {/* </div> */}
          </Select>
        </div>
        {/* ----------------------------------------------------------------- */}
        <div className='form-control'>
          <label className='title' htmlFor="pincode">Pincode</label>
          <TextField
            variant='standard'
            label=''
            name='pincode'
            id='pincode'
            className='inputField'
            type='text'
             value={inputValues.pincode}
            onChange={handleInputChange}
          />
        </div>
        {/* ------------------------------------------------------------------ */}
        <div className='form-control'>
          <label className='title' htmlFor="branchName">Branch Name</label>
          <TextField
            variant='standard'
            label=''
            name='branchName'
            id='branchName'
            className='inputField'
            type='text'
             value={inputValues.branchName}
            onChange={handleInputChange}
          />
        </div>
        {/* ------------------------------------------------------------------ */}
        <div className='form-control-radio'>
          <label className='title' htmlFor="branchName">Do you have any credit facility?</label>
          
          <RadioGroup
            row
            defaultValue={false}
            className='radio-group'
             value={inputValues.creditFacility}
            onChange={handleInputChange}
            name='creditFacility'
          >
            <div className='radio-buttons'>
            <FormControlLabel value="true" control={<Radio />} label="Yes" />
              <FormControlLabel value="false" control={<Radio />} label="No" />
              </div>
          </RadioGroup>
        </div>
        {/* ------------------------------------------------------------------- */}
        <div className='form-checkbox'>
          <Checkbox
            defaultChecked
            name='sendSmsRequest'
             value={inputValues.sendSmsRequest}
            onChange={handleInputChange}
          /> I allow SBI's correspondence to call/SMS me with reference to my application

        </div>
        {/* ----------------------------------------------------------------- */}
        <button   className='submit'type='submit'>Register</button>
      </form>
    </div>
  )
}

export default CurrentAccountForm