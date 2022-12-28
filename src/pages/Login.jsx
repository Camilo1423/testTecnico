import React, { useState, useContext } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form, FormGroup, Input, Label, Button } from 'reactstrap';
import '../css/pages/Login.css';
import { Link, Navigate } from "react-router-dom";
import axios from "axios";
import { api } from "../helpers/api";
import UserContext from "../context/UserContext";

const Login = () => {
    const [redirectApp, setRedirectApp] = useState(null)
    const { setUserData } = useContext(UserContext)
    if(redirectApp == 'admin') {
        return <Navigate to="/dashboard"/>
    } else if(redirectApp == 'user'){
        return <Navigate to="/userpanel"/>
    }

    const requestLogin = async (e) => {
        await axios.post(`${api}/user/login`, {
            username: e.target.username.value,
            password: e.target.password.value
        }).then(({data}) => {
            if(data.response) {
                localStorage.setItem('login', JSON.stringify(data))
                setUserData(data)
                setRedirectApp(data.role)
            } else {
                alert('credenciales incorrectas')
            }
        })
    }
  return (
    <main className="contentLogin">
        <div className="contentForm">
            <section className="title">
                <h2>Acceder a la tienda</h2>
                <Link to="/">Regresar</Link>
            </section>
            <section className="register">
                <p>¿No tienes cuenta? </p>
                <Link to='/register'>Obtener una cuenta</Link>
            </section>
            <Form onSubmit={e => {
                e.preventDefault()
                requestLogin(e)
                }}>
                <FormGroup floating>
                <Input
                    name="username"
                    placeholder="username"
                    type="text"
                />
                <Label for="exampleEmail">Usuario</Label>
                </FormGroup>{" "}
                <FormGroup floating>
                <Input
                    name="password"
                    placeholder="Password"
                    type="password"
                />
                <Label for="examplePassword">Password</Label>
                </FormGroup>{" "}
                <Button>Iniciar Sesión</Button>
            </Form>
        </div>
    </main>
  );
};

export { Login };
