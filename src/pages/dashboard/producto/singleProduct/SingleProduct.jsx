import axios from "axios";
import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import UserContext from "../../../../context/UserContext";
import { api } from "../../../../helpers/api";
import '../../../../css/components/SingleProduct.css';
import Accesorio from "../../../../components/typeProduct/Accesorio";
import { getHeaders } from "../../../../helpers/headers";
import { cantidadUnidades } from "../../../../helpers/cantidadUnidades";



const SingleProduct = () => {
        const { id } = useParams();
    const [singleProduct, setSingleProduct] = useState();
    const [entrada, setEntrada] = useState();
    const [salida, setSalida] = useState();
    const { userData } = useContext(UserContext);

    const requesPost = async () => {
        const { data } = await axios.get(`${api}/producto/getsingleproduct/${id}`, {headers: getHeaders(userData)});
        return data;
    };

    const requesEntrada = async () => {
        const { data } = await axios.get(`${api}/producto/getentradas/${id}`, {headers: getHeaders(userData)});
        return data;
    };

    const deleteProduct = async (id) => {
        const validator = confirm(`estas seguro de borrar este regisro?`)
        if(validator) {
            const {data} = await axios.delete(`${api}/producto/producto/${id}`, {headers: getHeaders(userData)})
            if(data.status == 200) {
                history.back()
            }else {
                alert('Ups! algo salio mal, intentalo más tarde')
            }
        }else {
            alert('El registro de mantuvo en la base de datos')
        }
    }

    useEffect(() => {
        requesPost().then(res => {setSingleProduct(res)})
        requesEntrada().then(({entradas, salidas, status}) => {
            if(status == 200) {
                setEntrada(entradas)
                setSalida(salidas)
            }
        })
    }, [])

    const totalEntrada = entrada && cantidadUnidades(entrada)
    const totalSalida = salida && cantidadUnidades(salida)

    return (
    <div className="singleProduct">
        <h2 className="titleProduct">{singleProduct ? singleProduct.nombreProducto : null}</h2>
        {
            singleProduct && <Accesorio accesorio={singleProduct} entradas={totalEntrada} salidas={totalSalida} action={deleteProduct}/>
        }
    </div>
    );
};

export default SingleProduct;
