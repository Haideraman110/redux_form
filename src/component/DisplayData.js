import React from 'react'
import { useSelector } from 'react-redux'

const DisplayData = () => {
    const data = useSelector(state => state.formdata.datas)
    return (
        <>
            <table className='table' style={{color:"white"}}>
                <thead style={{textAlign:'center'}}>
                    <tr>
                        <th>Name</th>
                        <th>Address</th>
                        <th>Postal</th>
                        <th>Phone Number</th>
                        <th>Education</th>
                        <th>Passing Year</th>
                    </tr>
                </thead>
                <tbody>
                    {

                       data && data.map((val, i) => (
                            <tr key={i} style={{textAlign:'center'}}>
                                <td>{val.fullname}</td>
                                <td>{val.address}</td>
                                <td>{val.postal}</td>
                                <td>{val.phone}</td>
                                <td>{val.education}</td>
                                <td>{val.passing}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>


        </>

    )
}

export default DisplayData