'use client'

import Pagina from "../components/Pagina";

export default function Array() {

    const carros = ['corsa', 'celta', 'ferrari', 'fusca', 'lambo', 'virtus']
    const pessoas = ['joao', 'feijao', 'bartchelo', 'fernando', 'helena']
    return (
        <Pagina titulo="Array" navtitle="Fundamentos">
            
            <h1>Arrays</h1>
            <p>Arrays em JavaScript</p>
            {carros.map(item => (
                <p>{item[0]}</p>
            ))}
            {pessoas.map(item => (
                <p>{item}</p>
            ))}

    </Pagina>
    )
}