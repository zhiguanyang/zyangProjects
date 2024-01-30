import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./Pi.css";

const ShowPi = () => {
  const [pi, setPi] = useState({
    id: 0,
    rawMaterial: "",
    product: "",
    scientist: ""
  });
  const { id } = useParams();
  const url = "https://zyangpi.onrender.com/pis";

  useEffect(() => {
    getPi();
  }, []);

  const getPi = () => {
    axios
      .get(url.concat("/") + id)
      .then((response) => {
        setPi(response.data.data);
      })
  };

  return (
    <div className="user mt-5">
      <table className="table table-bordered">
        <thead>
        </thead>
        <tbody>
          <tr>
            <td><b>Raw material</b></td>
            <td>{pi.rawMaterial}</td>
          </tr>
          <tr>
            <td><b>Product</b></td>
            <td>{pi.product}</td>
          </tr>
          <tr>
            <td><b>Scientist</b></td>
            <td>{pi.scientist}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
export default ShowPi;
