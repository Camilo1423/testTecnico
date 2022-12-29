import React, { useState } from "react";
import {
  Form,
  Row,
  FormGroup,
  FormText,
  Col,
  Label,
  Input,
  Button,
} from "reactstrap";
import Loader001 from "../../../components/loader/loader001";
import axios from "axios";
import { api } from "../../../helpers/api";
import { headers } from "../../../helpers/headers";
import "../../../css/pages/CreateProduct.css";

const CreateComic = () => {
  const [loadImage, setLoadImage] = useState(false)
  const [loaderActive, setLoaderActive] = useState(false)

  const cargarImagen = (e) => {
    const file = e.target.files;
    if (!file) {
      printImg.innerHTML = "";
      return;
    }
    const archivo = file[0];
    const imgUri = URL.createObjectURL(archivo);
    setLoadImage({
      url: imgUri,
      size: archivo.size,
    });
  };

  const registerComic = (e) => {
    setLoaderActive(true);
    return new FormData(e.target);
  };

  const requesPost = async (datosSend) => {
    console.log(headers)
    const { data } = await axios.post(`${api}/producto/register`, datosSend, {headers: headers});
    return data;
  };

  return (
    <div className="contentAccesorio">
      {loaderActive ? (
        <>
          <Loader001 />
        </>
      ) : (
        <>
          <section className="printImg">
            {loadImage ? (
              <>
                <h3>Previsualización de la imagen</h3>
                <p>
                  Peso de la imagen:{" "}
                  {(loadImage.size / 1000000).toFixed(2) > 6 ? (
                    <strong className="redSize">
                      {(loadImage.size / 1000000).toFixed(2)}MB
                    </strong>
                  ) : (
                    <strong className="greenSize">
                      {(loadImage.size / 1000000).toFixed(2)}MB
                    </strong>
                  )}
                </p>
                <div className="contentImagen">
                  <img src={loadImage.url} alt="previsualizacion de imagen" />
                </div>
              </>
            ) : (
              <>
                <div className="previsualizacion">
                  <i className="bx bx-purchase-tag-alt"></i>
                  <p>
                    Cuando selecciones la fotografía, se imprimirá en este lugar
                  </p>
                </div>
              </>
            )}
          </section>
          <section className="formAccesorio">
            <h3>Crear nuevo comic</h3>
            <Form
              onSubmit={async (e) => {
                e.preventDefault();
                const data = registerComic(e)
                await requesPost(data).then(res => {
                  setLoadImage(false)
                  setLoaderActive(false)
                  console.log(res)
                })
                .catch(() => {
                  setLoadImage(false)
                  setLoaderActive(false);
                });
              }}
            >
              <FormGroup>
                <Label for="exampleFile">Carga la imagen del producto</Label>
                <Input
                  name="image"
                  type="file"
                  onChange={(e) => cargarImagen(e)}
                />
                <FormText>
                  Por favor, seleccionar un archivo que no pese más de 5mb
                </FormText>
              </FormGroup>
              <Row>
                <Col md={6}>
                  <FormGroup>
                    <Label for="exampleEmail">Id del producto</Label>
                    <Input
                      name="idProducto"
                      placeholder="Escribe un id unico para este producto"
                      type="text"
                    />
                  </FormGroup>
                </Col>
                <Col md={6}>
                  <FormGroup>
                    <Label for="examplePassword">Nombre del producto</Label>
                    <Input
                      name="nombreProducto"
                      placeholder="Ingresa el nombre del producto"
                      type="text"
                    />
                  </FormGroup>
                </Col>
              </Row>
              <FormGroup row>
                <Label for="exampleSelect" sm={2}>
                  Universo cinematografico
                </Label>
                <Col sm={10}>
                  <Input name="universoFilm" type="select">
                    <option>Marvel</option>
                    <option>DC</option>
                  </Input>
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label for="exampleSelect" sm={2}>
                  Tipo de producto
                </Label>
                <Col sm={10}>
                  <Input name="tipoProducto" type="select">
                    <option>accesorios</option>
                    <option>camisetas</option>
                    <option>comic</option>
                    <option>Juguetes</option>
                    <option>Vasos</option>
                  </Input>
                </Col>
              </FormGroup>
              <Row>
                <Col md={6}>
                  <FormGroup>
                    <Label for="exampleEmail">Cantidad de paginas</Label>
                    <Input
                      name="cantidadPaginas"
                      placeholder="50, 129 o el numero de paginas"
                      type="number"
                    />
                  </FormGroup>
                </Col>
                <Col md={6}>
                  <FormGroup>
                    <Label for="examplePassword">
                      Escribe el genero del comic
                    </Label>
                    <Input
                      name="generoComic"
                      placeholder="Acción, terror, superHeroes etc..."
                      type="text"
                    />
                  </FormGroup>
                </Col>
              </Row>
              <FormGroup>
                <Label for="examplePassword">
                  Cual es la editorial del Comic
                </Label>
                <Input
                  name="editorial"
                  placeholder="Ingresa la editorial del Comic"
                  type="text"
                />
              </FormGroup>
              <Button color="dark">Crear producto</Button>
            </Form>
          </section>
        </>
      )}
    </div>
  );
};

export { CreateComic };
