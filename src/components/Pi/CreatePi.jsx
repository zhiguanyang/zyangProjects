import { useState } from 'react'
import { useNavigate } from "react-router-dom";
import axios from "axios";
import './Pi.css';

const createPi = () => {
    const navigate = useNavigate()
    const [pi, setPi] = useState({
        rawMaterial: "",
        product: "",
        scientist: ""
    });
    const handleChange = (e) => {
        const value = e.target.value;
        setPi({
            ...pi,
            [e.target.name]: value
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const newPi = {
            rawMaterial: pi.rawMaterial,
            product: pi.product,
            scientist: pi.scientist
        };
        axios.post("https://zyangpi.onrender.com/pis", newPi)
        navigate("/");
    };

    return (
        <div className='user-form'>
            <div className='heading'>
                <p>Create Row</p>
            </div>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="rawMaterial" className="form-label">raw material</label>
                    <input type="text" className="form-control" id="rawMaterial" name="rawMaterial" value={pi.rawMaterial} onChange={handleChange} />
                </div>
                <div className="mb-3 mt-3">
                    <label htmlFor="product" className="form-label">product</label>
                    <input type="text" className="form-control" id="product" name="product" value={pi.product} onChange={handleChange} />
                </div>
                <div className="mb-3">
                    <label htmlFor="scientist" className="form-label">scientist</label>
                    <input type="text" className="form-control" id="scientist" name="scientist" value={pi.scientist} onChange={handleChange} />
                </div>
                <button type="submit" className="btn btn-primary submit-btn">Submit</button>
            </form>
        </div>
    )
}
export default createPi