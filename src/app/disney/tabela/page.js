
'use client'

import Pagina from "@/app/components/Pagina";
import apidisney from "@/services/apiDisney";
import { useEffect, useState } from "react";
import { Table } from "react-bootstrap";

export default function page() {

    const [personagens, setPersonagens] = useState([])
    useEffect(() => {
        apidisney.get('character').then(res => {
            setPersonagens(res.data.data)
        })
    }, []) // array vazio é a condição para executar a função, declarada como nenhuma assim quando a pagina terminar de ser carregada

    return (
        <Pagina titulo="Disney Tabela">


    <Table striped bordered hover>
      <thead>
        <tr>
          <th>ID</th>
          <th>Nome</th>
          <th>Foto</th>
        </tr>
      </thead>
      <tbody>
      {personagens.map(item=>(
        <tr>
            <td>{item._id}</td>
            <td>{item.name}</td>
            <td><img src={item.imageUrl} width={50}/></td>
        </tr>,
            ))}

      </tbody>
    </Table>
            
        </Pagina>
    )
}