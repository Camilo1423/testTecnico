import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form, FormGroup, Input, Label, Button } from 'reactstrap';
import '../css/pages/Login.css';
import { Link, Navigate } from "react-router-dom";
import axios from "axios";
import { api } from "../helpers/api";

const Register = () => {
    const [redirectApp, setRedirectApp] = useState(false)
    if(redirectApp) {
        return <Navigate to="/login"/>
    }
  return (
    <main className="contentLogin">
        <div className="contentForm">
            <section className="title">
                <h2>Registrarme en la tienda</h2>
                <Link to="/">Regresar</Link>
            </section>
            <section className="register">
                <p>¿Ya tienes una cuenta? </p>
                <Link to='/login'>Iniciar sesion</Link>
            </section>
            <Form onSubmit={async (e) => {
                e.preventDefault()
                const {password, password2, email, username, fullName} = {
                    password: e.target.password.value,
                    password2: e.target.password2.value,
                    email: e.target.email.value,
                    username: e.target.username.value,
                    fullName: e.target.name.value
                }
                if( password === password2 ) {
                    await axios.post(`${api}/user/resgisterpublic`, {password, email, username, fullName})
                    .then(({data}) => {
                        if(data.success) {
                            alert('Usuario registrado con exito')
                            setRedirectApp(true)
                        } else {
                            alert('el usuario ya se encuentra registradio en la base de datos')
                        }
                    })
                }
                }}>
                <FormGroup floating>
                <Input
                    name="name"
                    placeholder="name"
                    type="text"
                />
                <Label for="name">Nombre</Label>
                </FormGroup>{" "}
                <FormGroup floating>
                <Input
                    name="username"
                    placeholder="username"
                    type="text"
                />
                <Label for="username">Usuario</Label>
                </FormGroup>{" "}
                <FormGroup floating>
                <Input
                    name="email"
                    placeholder="email"
                    type="email"
                />
                <Label for="exampleEmail">Correo Electronico</Label>
                </FormGroup>{" "}
                <FormGroup floating>
                <Input
                    name="password"
                    placeholder="Password"
                    type="password"
                />
                <Label for="examplePassword">Password</Label>
                </FormGroup>{" "}
                <FormGroup floating>
                <Input
                    name="password2"
                    placeholder="Password"
                    type="password"
                />
                <Label for="examplePassword">Confirmacion de contraseña</Label>
                </FormGroup>{" "}
                <Button color="dark">Obtener cuenta</Button>
            </Form>
        </div>
    </main>
  );
};
export {Register}
