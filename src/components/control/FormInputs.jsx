import React from 'react'
import { Form, Row, Col, FormGroup, Label, Input, Button } from "reactstrap";

const FormInputs = ({createNewAction, action, entradas, salidas}) => {
  return (
    <>
    <h3>Crear nueva {action}</h3>
      <Form onSubmit={(e) => {
        e.preventDefault();
        if(action == 'entrada') {
            createNewAction(e)
        } else {
            if(entradas - salidas > 0) {
                if((entradas - salidas - e.target.cantidad.value) >= 0) {
                    createNewAction(e)
                } else {
                    alert('Lo siento, no tienes suficientes unidades para este retiro')
                }
            } else {
                alert('Lo siento, no tienes suficiente stock')
            }
        }
        }}>
          <Row>
            <Col md={6}>
              <FormGroup floating>
                <Input id="exampleEmail" name="fecha" type="date" required/>
                <Label for="exampleEmail">Fecha</Label>
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup floating>
                <Input id="examplePassword" name="cantidad" type="number" required/>
                <Label for="examplePassword">Cantidad</Label>
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col md={6}>
              <FormGroup floating>
                <Input id="exampleEmail" name="bodegaAlmacen" type="text" required/>
                <Label for="exampleEmail">Bodega de almacenamiento</Label>
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup floating>
                <Input id="examplePassword" name="valorUnidad" type="text" required/>
                <Label for="examplePassword">Valor por unidad</Label>
              </FormGroup>
            </Col>
          </Row>
          <Button color='dark'>Crear {action}</Button>
        </Form>
    </>
  )
}

export default FormInputs
