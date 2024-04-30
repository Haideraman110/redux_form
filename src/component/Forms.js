import React, { useState } from 'react'
import InputsField from './InputsField'
import { useDispatch } from 'react-redux'
import { addData } from '../redux/slices/formslice'


const Forms = () => {
    const initaldata = {
        fullname: '',
        address: '',
        postal: '',
        phone: '',
        education: '',
        passing: ''
    }
    const [formdata, setFormData] = useState(initaldata)
    const dispatch = useDispatch()

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData(prev => {
            return {
                ...prev,
                [name]: value
            }
        })

    }

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(addData(formdata))
        setFormData(initaldata)

    }
    return (
        <>
            <form onSubmit={handleSubmit}>

                <InputsField label='Full Name' type='text' name='fullname' formdata={formdata.fullname} placeholder='Full Name' labelclass='form-label mb-2' className='form-control mb-3' onChange={(e) => handleChange(e)} />
                <InputsField label='Address' type='text' name='address' formdata={formdata.address} placeholder='Address' labelclass='form-label mb-2' className='form-control mb-3' onChange={(e) => handleChange(e)} />
                <InputsField label='Postal Code' type='text' name='postal' formdata={formdata.postal} placeholder='Postal Code' labelclass='form-label mb-2' className='form-control mb-3' onChange={(e) => handleChange(e)} />
                <InputsField label='Phone Number' type='number' name='phone' formdata={formdata.phone} placeholder='Phone Number' labelclass='form-label mb-2' className='form-control mb-3' onChange={(e) => handleChange(e)} />
                <InputsField label='Education' type='text' name='education' formdata={formdata.education} placeholder='Education' labelclass='form-label mb-2' className='form-control mb-3' onChange={(e) => handleChange(e)} />
                <div className='select-size'>
                    <InputsField label='Passing Year' name='passing' formdata={formdata.passing} labelclass='form-label mb-2' className='form-select mb-3' onChange={(e) => handleChange(e)} />

                </div>
                <button className='btn btn-danger w-100'>Submit</button>

            </form>


        </>
    )
}

export default Forms