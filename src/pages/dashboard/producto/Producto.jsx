import React, { useEffect, useContext, useState } from "react";
import Loader001 from "../../../components/loader/Loader001";
import axios from "axios";
import { api } from "../../../helpers/api";
import UserContext from "../../../context/UserContext";
import { token } from "../../../helpers/dataUser";
import { FormGroup, Label, Input } from "reactstrap";
import "../../../css/components/Product.css";
import Card from "../../../components/Card";

const Producto = () => {
  let headers = "";
  const [loaderActive, setLoaderActive] = useState(true);
  const [dataServer, setDataServer] = useState();
  const [search, setSearch] = useState("");
  const [backUp, setBackUp] = useState();
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

  const searcher = (busqueda) => {
    setSearch(busqueda);
    busqueda == '' ? setBackUp(dataServer) : null
    let results = !search ? dataServer : dataServer.filter((dato)=> dato.nombreProducto.toLowerCase().includes(search.toLocaleLowerCase()) || dato.idProducto.toLowerCase().includes(search.toLocaleLowerCase()))
    setBackUp(results);
    console.log(backUp);
  };


  const filterAction = (name) => {
    if (name == "Todos") {
      setBackUp(dataServer);
      return;
    }
    const filtro = dataServer.filter(
      (product) => product.universoFilm == name || product.tipoProducto == name
    );
    setBackUp(filtro)
  };

  useEffect(() => {
    requesPost().then((res) => {
      setBackUp(res);
      setDataServer(res);
      setLoaderActive(false);
    });
  }, []);

  return (
    <div className="contentProduct">
      <h2>Productos en la base de datos</h2>
      <div className="filterContent">
        <FormGroup>
          <Label for="examplePassword">
            <h4>Filtrar los productos por:</h4>
          </Label>
          <Input
            name="universoFilm"
            type="select"
            onChange={(e) => filterAction(e.target.value)}
          >
            <option>Todos</option>
            <option>Marvel</option>
            <option>DC</option>
            <option>accesorios</option>
            <option>camisetas</option>
            <option>comic</option>
            <option>Juguetes</option>
            <option>Vasos</option>
          </Input>
        </FormGroup>
        <FormGroup>
          <Input
            value={search}
            placeholder="Buscar por Nombre o ID"
            name="universoFilm"
            type="text"
            onChange={(e) => searcher(e.target.value)}
          />
        </FormGroup>
      </div>
      <div className="contentCards">
        {loaderActive ? (
          <Loader001 />
        ) : backUp ? (
          backUp.map((element) => {
            return <Card datosCard={element} key={element._id} />;
          })
        ) : null}
      </div>
    </div>
  );
};

export default Producto;
