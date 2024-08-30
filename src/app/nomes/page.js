'use client'

import Pagina from "@/app/components/Pagina";
import { useState } from "react";
import { Button } from "react-bootstrap";
export default function Nomes() {
    const [nome, setNome]= useState("Joao")
    const [valor, setvalor] = useState(0)

    function alterarnome(){
        const novonome = nome == 'Joao' ? 'Joao Victor Monteiro Dantas' : 'Joao'

        setNome(novonome)
    }
    function soma (){

        setvalor(Number(valor) + 1)
    }

    function sub (){

        setvalor(Number(valor) - 1)
    }

    return (
        <Pagina titulo={"Nome: " + nome} navtitle="Fundamentos">
            <h1>{nome}</h1>
            <Button onClick={alterarnome}> Ver Nome </Button>
            <br></br>
            <br></br>
            <Button onClick={soma}> + </Button>
            <h1>{valor}</h1>
            <Button onClick={sub}> - </Button>

        </Pagina>
    )
}