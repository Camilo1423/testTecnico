import React, { useEffect, useContext, useState } from "react";
import Loader002 from "../../../components/loader/Loader002";
import axios from "axios";
import { api } from "../../../helpers/api";
import UserContext from "../../../context/UserContext";
import { token } from "../../../helpers/dataUser";
import {Card, CardBody, CardTitle, CardSubtitle, CardText, Button} from 'reactstrap'
import { Link, Routes, Route } from "react-router-dom";
import SingleProduct from "./singleProduct/SingleProduct";

import '../../../css/components/SingleProduct.css'

const Producto = () => {
  let headers = "";
  const [loaderActive, setLoaderActive] = useState(true);
  const [dataServer, setDataServer] = useState();
  const { userData } = useContext(UserContext);
  if (!userData) {
    headers = { Authorization: `Bearer ${token}` };
  } else {
    headers = { Authorization: `Bearer ${userData.token}` };
  }
  const requesPost = async () => {
    const { data } = await axios.get(`${api}/producto/getproduct`, {
      headers: headers,
    });
    return data;
  };

  useEffect(() => {
    requesPost().then((res) => setDataServer(res), setLoaderActive(false));
  }, []);

  return (
    <div className="contentProduct">
        <h2>Productos en la base de datos</h2>
        <div className="contentCards">
            {loaderActive ? (
                <Loader002 />
            ) : dataServer ? (
                dataServer.map((element) => {
                return (
                    <Card style={{ width: "auto" }} key={element._id}>
                        <img alt="Sample" src={element.imagenProducto}/>
                    <CardBody>
                        <CardTitle tag="h3">{element.nombreProducto}</CardTitle>
                        <CardSubtitle className="mb-2 text-muted" tag="h6">
                            ID del producto: {element.idProducto}
                        </CardSubtitle>
                        <CardText style={{ marginBottom: "3px" }}>
                            Universo cinematografico <strong>{element.universoFilm}</strong>
                        </CardText>
                        <CardText style={{ width: "18rem" }}>
                            Tipo de producto <strong>{element.tipoProducto}</strong>
                        </CardText>
                        <Button color="dark"><Link to={`/dashboard/singleproduct/${element._id}`} className="seeProduct">Ver producto</Link></Button>
                    </CardBody>
                    </Card>
                );
                })
            ) : null}
        </div>
    </div>
  );
};

export default Producto;
