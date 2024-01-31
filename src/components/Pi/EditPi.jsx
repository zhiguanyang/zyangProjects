import { useState, useEffect } from 'react'
import { useNavigate } from "react-router-dom";
import axios from "axios";
import './Pi.css';
import { useParams } from "react-router-dom";


const EditPi = () => {
    const url = "https://zyangpi.onrender.com/pis";
    const { id } = useParams();
    const navigate = useNavigate()
    const [pi, setPi] = useState({
        id: 0,
        rawMaterial: "",
        product: "",
        scientist: ""
    });
    useEffect(() => {
        getPi();
    }, []);

    const getPi = async () => {
        await axios
            .get(url.concat("/") + id)
            .then((response) => {
                setPi(response.data.data);
            })
    };
    const handleChange = async (e) => {
        const value = e.target.value;
        setPi({
            ...pi,
            [e.target.name]: value
        });
    }

    const handleEdit = async (e) => {
        e.preventDefault();
        const newPi = {
            id: parseInt(id),
            rawMaterial: pi.rawMaterial,
            product: pi.product,
            scientist: pi.scientist
        };

        await axios.put(url, newPi, {
            headers: {
                "Content-Type": "application/json",
            },
        })
        navigate("/");
    }



    return (
        <div className='user-form'>
            <div className='heading'>
                <p>Edit</p>
            </div>
            <form onSubmit={handleEdit}>
                <div className="mb-3">
                    <label htmlFor="rawMaterial" className="form-label">Raw material</label>
                    <input type="text" className="form-control" id="rawMaterial" name="rawMaterial" value={pi.rawMaterial} onChange={handleChange} />
                </div>
                <div className="mb-3 mt-3">
                    <label htmlFor="product" className="form-label">Product</label>
                    <input type="text" className="form-control" id="product" name="product" value={pi.product} onChange={handleChange} />
                </div>
                <div className="mb-3">
                    <label htmlFor="scientist" className="form-label">Scientist</label>
                    <input type="text" className="form-control" id="scientist" name="scientist" value={pi.scientist} onChange={handleChange} />
                </div>
                <button type="submit" className="btn btn-primary submit-btn">Edit</button>
            </form>
        </div>
    )
}
export default EditPi
