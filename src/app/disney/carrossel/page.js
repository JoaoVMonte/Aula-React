
'use client'

import Pagina from "@/app/components/Pagina";
import apidisney from "@/services/apiDisney";
import { useEffect, useState } from "react";

export default function page() {

    const [personagens, setPersonagens] = useState([])
    useEffect(() => {
        apidisney.get('character').then(res => {
            setPersonagens(res.data.data)
        })
    }, []) // array vazio é a condição para executar a função, declarada como nenhuma assim quando a pagina terminar de ser carregada

    return (
        <Pagina titulo="Disney corrossel">
            {personagens.map(item=>(
                <p>{item.name}</p>
            ))}

            
            
        </Pagina>
    )
}