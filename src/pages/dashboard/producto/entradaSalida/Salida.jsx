import axios from "axios";
import React, {useContext, useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import FormInputs from "../../../../components/control/FormInputs";
import TableForm from "../../../../components/control/TableForm";
import UserContext from "../../../../context/UserContext";
import "../../../../css/components/control/Form.css";
import { api } from "../../../../helpers/api";
import { cantidadUnidades } from "../../../../helpers/cantidadUnidades";
import { getHeaders } from "../../../../helpers/headers";



const Salida = () => {
    const {userData} = useContext(UserContext)
    const [entradas, setEntradas] = useState()
    const [salidas, setSalidas] = useState()
    const [counter, setCounter] = useState(0)
    const { id } = useParams();

    const newEntrada = async (e) => {
        const form = new FormData(e.target)
        const {data} = await axios.post(`${api}/producto/registersalida/${id}`, form, {headers: getHeaders(userData)})
        if(data.status == 200) {
            alert('se cargo correctamente la salida')
            setCounter(counter => counter+1)
        }
    }

    const getAllEntradas = async () => {
        const {data} = await axios.get(`${api}/producto/getentradas/${id}`, {headers: getHeaders(userData)})
        return data
    }

    const deleteRegister = async (id, action) => {
        const validator = confirm(`estas seguro de borrar este regisro?`)
        if(validator) {
            const {data} = await axios.delete(`${api}/producto/delete${action}/${id}`, {headers: getHeaders(userData)})
            if(data.status == 200) {
                setCounter(counter => counter+1)
            }else {
                alert('Ups! algo salio mal, intentalo más tarde')
            }
        }else {
            alert('El registro de mantuvo en la base de datos')
        }
    }

    useEffect(() => {
        getAllEntradas().then(({entradas, salidas, status}) => {
            if(status == 200) {
                setEntradas(entradas)
                setSalidas(salidas)
            }
        })
    }, [counter])
    console.log(salidas)

    const totalEntrada = entradas && cantidadUnidades(entradas)
    const totalSalida = salidas && cantidadUnidades(salidas)
  return (
    <div className="contentEntrada">
      <section className="createEntrada">
        <button
          type="button"
          className="btnAction"
          onClick={() => history.back()}
          style={{ margin: "10px 0"}}
        >
          <i className="bx bx-chevron-left"></i>
          <p>Regresar</p>
        </button>
        <FormInputs createNewAction={newEntrada} action='salida' entradas={totalEntrada} salidas={totalSalida}></FormInputs>
      </section>
      <section className="tablaDatos">
        <TableForm cantidad={salidas} action='salida' deleteRegister={deleteRegister}></TableForm>
      </section>
    </div>
  );
};

export default Salida;
