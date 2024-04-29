import React from 'react'


const InputsField = ({ label, type, name, formdata, labelclass, ...props }) => {

    let passingyear = <select name={name} value={formdata} {...props}>
        <option>select passing year</option>
        <option value='2020'>2020</option>
        <option value='2021'>2021</option>
        <option value='2022'>2022</option>
        <option value='2023'>2023</option>
    </select>
    return (
        <>
            <label htmlFor={label} className={labelclass}>{label}</label>
            {
                label === 'Passing Year' ? passingyear : <input type={type} name={name} value={formdata} {...props} />
            }



        </>
    )
}

export default InputsField