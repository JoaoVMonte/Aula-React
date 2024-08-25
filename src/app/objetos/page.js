'use client'

import { Button, Card, Col } from "react-bootstrap";
import Pagina from "../components/Pagina";

export default function Objetos() {

    const carros = [
        { marca: 'GM', modelo: 'corsa', cor: 'Azul', foto: '' },
        { marca: 'GM', modelo: 'celta', cor: 'Amarelo', foto: '' },
        { marca: 'Ferrari', modelo: 'Ferrari 488', cor: 'Vermelho', foto: '' },
        { marca: 'VW', modelo: 'fusca ', cor: 'ROxo', foto: '' },
        { marca: 'Lamborghini', modelo: 'Veneno', cor: 'Verde', foto: '' },
        { marca: 'VW', modelo: 'virtus', cor: 'Preto', foto: '' },
    ]

    const pessoas = ['joao', 'feijao', 'bartchelo', 'fernando', 'helena']

    return (
        <main>
            
            <Col>
                {carros.map(item => (
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="holder.js/100px180" />
                        <Card.Body>
                            <Card.Title>{item.modelo}</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>


                ))}
            </Col>


        </main >
    )
}