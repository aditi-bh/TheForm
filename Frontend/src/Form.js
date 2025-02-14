import React, { useState } from "react";
import axios from "axios";
import './Form.css';

function Form() {
    const [getdata, setgetdata] = useState({
        studentname: "",
        studentemail: "",
        studentcontact: "",
        Coursename: "",
        Branchname: "",
        studentaddress: "",
        studentcountry: "",
        studentcity: "",
        Zipcode: "",
        FeeAmount: ""
    });

    const [message, setMessage] = useState('');

    function onchangetextfunc(e) {
        setgetdata({
            ...getdata, [e.target.name]: e.target.value
        });
    }

    async function onformsubmit(e) {
        e.preventDefault();
        try {
            const getpostresult = await axios.post("http://localhost:5000/api", getdata);
            setMessage(getpostresult.data.message);
            console.log(getpostresult);
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className="container">
            
            <div className="form-container">
                <h2 className="form-title">Online Registration Form</h2>
                <form className="form" onSubmit={onformsubmit}>
                    <div className="form-row">
                        <input type="text" placeholder="Enter Your Name :" className='form-input' name="studentname" onChange={(e) => onchangetextfunc(e)} />
                    </div>
                    <div className="form-row">
                        <input type="email" placeholder="Enter Email Address" className='form-input' name="studentemail" onChange={(e) => onchangetextfunc(e)} />
                        <input type="tel" placeholder="Enter Phone Number" className='form-input' name="studentcontact" onChange={(e) => onchangetextfunc(e)} />
                    </div>
                    <div className="form-row">
                        <select className="form-input" name="Coursename" onChange={(e) => onchangetextfunc(e)}>
                            <option value="">Select Course</option>
                            <option value="Java Full Stack">Java Full Stack</option>
                            <option value="MERN Full Stack">MERN Full Stack</option>
                        </select>
                        <select className="form-input" name="Branchname" onChange={(e) => onchangetextfunc(e)}>
                            <option value="">Select Branch</option>
                            <option value="CS">CS</option>
                            <option value="IT">IT</option>
                        </select>
                    </div>
                    <div className="form-row">
                        <textarea placeholder="Enter Address" className="form-input textarea" name="studentaddress" onChange={(e) => onchangetextfunc(e)}></textarea>
                    </div>
                    <div className="form-row">
                        <input type="text" placeholder="Enter City Name" className="form-input" name="studentcity" onChange={(e) => onchangetextfunc(e)} />
                        <input type="text" placeholder="Enter Country Name" className="form-input" name="studentcountry" onChange={(e) => onchangetextfunc(e)} />
                    </div>
                    <div className="form-row">
                        <input type="text" placeholder="Enter ZIP Code" className="form-input" name="Zipcode" onChange={(e) => onchangetextfunc(e)} />
                        <input type="number" placeholder="Enter Amount" className="form-input" name="FeeAmount" onChange={(e) => onchangetextfunc(e)} />
                    </div>
                    <div className="form-row">
                        <button type="submit" className="form-button">Submit</button>
                    </div>
                </form>
               
                
            </div>
            <div className="Success-Message"> {message && <p>{message}</p>}</div>
        </div>
    );
}

export default Form;
