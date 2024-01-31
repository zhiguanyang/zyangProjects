import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.min.js"

const ShowPis = () => {

  const [pis, setPis] = useState([]);

  useEffect(() => {
    axios.get("https://zyangpi.onrender.com/pis").then((response) => {
      setPis(response.data.data);
    })
  }, [])

  const deletePi = async (id) => {
    await axios.delete(`https://zyangpi.onrender.com/pis/${id}`);
    setPis(pis.filter((pi) => pi.id !== id))
  }


  return (
    <div className="mt-5">
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Raw Material</th>
            <th>Product</th>
            <th>Scientist</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {pis.map((pi) => {
            return (
              <tr key={pi.id}>
                <td>{pi.rawMaterial}</td>
                <td>{pi.product}</td>
                <td>{pi.scientist}</td>
                <td>
                  <Link to={`/edit-pi/${pi.id}`}>
                    <i className="fa fa-pencil" aria-hidden="true">Edit</i>
                  </Link>
                  <Link to={`/show-pi/${pi.id}`}>
                    <i className="fa fa-eye" aria-hidden="true">Show</i>
                  </Link>

                  <i
                    className="fa fa-trash-o"
                    aria-hidden="true"
                    onClick={() => deletePi(pi.id)}
                  >Delete</i>

                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );

}

export default ShowPis;
