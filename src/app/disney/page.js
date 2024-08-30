'use client'

import Pagina from "@/app/components/Pagina";
import apidisney from "@/services/apiDisney";
import axios from "axios";
import { useEffect, useState } from "react";
import { Button, Card, Col, Row } from "react-bootstrap";

export default function page() {
    axios.get('https://api.disneyapi.dev/character').then(res => {
        console.log(res.data.data);
    })

    const [personagens, setPersonagens] = useState([])

    useEffect(() => {
        apidisney.get('character').then(res => {
            setPersonagens(res.data.data)
        })
    }, []) // array vazio é a condição para executar a função, declarada como nenhuma assim quando a pagina terminar de ser carregada

    useEffect(()=>{},[])

    // const personagens = [
    //     {id: 1, name: 'Mickey Mouse'},
    //     {id: 2, name: 'Minnie Mouse'},
        
    // ]
    return (
        <Pagina titulo="Disney">   

            <Row className="row row-cols-sm-2 row-cols-xl-4 row-cols-md-3 row-cols-1">
                {personagens.map(item => (
                    <Col key={item.id} className="mb-4" style={{ padding: '10px' }}>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={item.imageUrl} />
                            <Card.Body>
                                <Card.Title>{`${item.name} - ${item.modelo}`}</Card.Title>
                                <Row>
                                    <Col>
                                        <Card.Text>{`Ano: ${item.ano}`}</Card.Text>
                                    </Col>
                                    <Col>
                                        <Button variant="secondary"href={item.sourceUrl}>Detalhes</Button>
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Pagina>
    )
}