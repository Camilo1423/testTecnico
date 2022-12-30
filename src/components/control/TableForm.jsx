import React from 'react'
import { Table } from "reactstrap";

const TableForm = ({cantidad, action, deleteRegister}) => {
  let counter = 1
  return (
    <>
    <h3>Historico de {action}s</h3>
      <Table>
          <thead>
            <tr>
              <th>#</th>
              <th>Fecha</th>
              <th>Cantidad</th>
              <th>Bodega de almacenamiento</th>
              <th>Valor Unitario</th>
              <th>Valor Total</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {cantidad ? (
              <>
                {cantidad.map(({ _id, cantidad, fecha, valorUnidad, bodegaAlmacen}) => {
                  return (
                    <tr key={_id}>
                      <th>{counter++}</th>
                      <td>{fecha}</td>
                      <td>{cantidad}</td>
                      <td>{bodegaAlmacen}</td>
                      <td>${valorUnidad}</td>
                      <td>${valorUnidad * cantidad}</td>
                      <td>
                        <button className='btnDelete' onClick={() => deleteRegister(_id, action)}>
                          <i className='bx bx-trash' ></i>
                          <p>Borrar</p>
                        </button>
                      </td>
                    </tr>
                  )
                })}
              </>
            ) : null}
          </tbody>
        </Table>
    </>
  )
}

export default TableForm
