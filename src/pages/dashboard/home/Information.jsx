import axios from "axios";
import React, { useEffect, useState, useContext } from "react";
import UserContext from "../../../context/UserContext";
import { api } from "../../../helpers/api";
import { token } from "../../../helpers/dataUser";
import '../../../css/components/Information.css'

const Information = () => {
  const { userData } = useContext(UserContext);
  let headers = "";
  if (!userData) {
    headers = { Authorization: `Bearer ${token}` };
  } else {
    headers = { Authorization: `Bearer ${userData.token}` };
  }

  const [loadProduct, setLoadProduct] = useState();
  const [loadUser, setLoadUser] = useState();

  const requesProduct = async () => {
    const { data } = await axios.get(`${api}/producto/getproduct`, {
      headers: headers,
    });
    return data;
  };

  const requesUser = async () => {
    const { data } = await axios.get(`${api}/user/getusers`, {
      headers: headers,
    });
    return data;
  };

  useEffect(() => {
    requesUser().then((res) => setLoadUser(res));
    requesProduct().then((res) => setLoadProduct(res));
  }, []);
  return (
    <div className="contentInforamtion">
      <section className="box">
            <i className='bx bx-package'></i>
            <div className="text-box">
                <h3>Cantidad de productos</h3>
                Cantidad de productos: <strong>{loadProduct ? loadProduct.length : null}</strong>
            </div>
        </section>
      <section className="box">
        <i className='bx bxs-user' ></i>
        <div className="text-box">
          <h3>Usuarios registrados</h3>
          Cantidad de productos: <strong>{loadUser ? loadUser.length : null}</strong>
        </div>
      </section>
    </div>
  );
};

export default Information;
