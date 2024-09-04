
'use client'

import Pagina from "@/app/components/Pagina";
import apidisney from "@/services/apiDisney";
import { useEffect, useState } from "react";
import { Carousel } from "react-bootstrap";

export default function page() {

    const [personagens, setPersonagens] = useState([])
    useEffect(() => {
        apidisney.get('character').then(res => {
            setPersonagens(res.data.data)
        })
    }, []) // array vazio é a condição para executar a função, declarada como nenhuma assim quando a pagina terminar de ser carregada

    return (
        <Pagina titulo="Disney carrossel">
            <Carousel>
                {personagens.map((item, index) => (
                    <Carousel.Item key={index} interval={1000}>
                        <img className="d-block w-100" src={item.imageUrl}alt={item.name}/>

                    </Carousel.Item>
                ))}
            </Carousel>
        </Pagina>
    )
}