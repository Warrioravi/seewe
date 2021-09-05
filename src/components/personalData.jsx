import React from 'react'
import { useSelector } from 'react-redux';

let  PersonalData = () => {
    let state=useSelector(state=>state);
    console.log(state);
    return (
        <div>
            personal data
        </div>
    )
}
export default PersonalData;
