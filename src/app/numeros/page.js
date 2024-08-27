'use client'

import Pagina from "@/app/components/Pagina";
import { useState } from "react";
import { Button } from "react-bootstrap";

export default function page() {

    const [valor, setvalor] = useState(0)


    // function soma() {

    //     setvalor(Number(valor) + 1)
    // }

    // function sub() {

    //     setvalor(Number(valor) - 1)
    // }

    function calc(c){
        const num = valor

        let sinal = c == '+' ? +1 : -1

        setvalor(num + sinal)

    }


    return (
        <Pagina titulo="Numeros" navtitle="Fundamentos">
            <Button onClick={()=> calc('+')}> + </Button>
            <h1>{valor}</h1>
            <Button onClick={()=> calc('')}> - </Button>

        </Pagina>
    )
}