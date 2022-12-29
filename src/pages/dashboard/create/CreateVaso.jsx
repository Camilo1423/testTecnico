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
import { Vaso } from "../../../poo/Vaso";
import "../../../css/pages/CreateProduct.css";

const CreateVaso = () => {
  const [loadImage, setLoadImage] = useState(false);

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

  const registerAccesorio = async (e) => {
    const vaso = new Vaso(
      e.target.idProducto.value,
      e.target.universoFilm.value,
      e.target.nombreProducto.name,
      e.target.tipoProducto.value,
      e.target.image.value,
      e.target.tamano.value,
      e.target.color.value,
      e.target.marca.value
    );
    console.log(vaso);
  };
  return (
    <div className="contentAccesorio">
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
        <h3>Crear nuevo vaso</h3>
        <Form
          onSubmit={(e) => {
            e.preventDefault();
            registerAccesorio(e);
          }}
        >
          <FormGroup>
            <Label for="exampleFile">Carga la imagen del producto</Label>
            <Input name="image" type="file" onChange={(e) => cargarImagen(e)} />
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
                <Label for="examplePassword">Tamaño del vaso</Label>
                <Input
                  name="tamano"
                  placeholder="Ingresa el tamaño del vaso"
                  type="text"
                />
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup>
                <Label for="exampleAddress2">Color del vaso</Label>
                <Input
                  name="color"
                  placeholder="Ingresa el color del vaso"
                  type="text"
                />
              </FormGroup>
            </Col>
          </Row>
          <Button>Crear producto</Button>
        </Form>
      </section>
    </div>
  );
};

export {CreateVaso}
