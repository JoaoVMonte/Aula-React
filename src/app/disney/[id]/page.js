'use client'

import Pagina from "@/app/components/Pagina";
import apidisney from "@/services/apiDisney";
import { useEffect, useState } from "react";
import { Card, Col, ListGroup, Row, Spinner } from "react-bootstrap";

export default function page({ params }) {

    const [personagem, setPersonagem] = useState({})

    useEffect(() => {
        apidisney.get(`character/${params.id}`).then(res => {
            setPersonagem(res.data.data)
        })
    }, []) // array vazio é a condição para executar a função, declarada como nenhuma assim quando a pagina terminar de ser carregada

    return (
        <Pagina titulo="Disney ">

            {
                !personagem._id &&

                <Spinner animation="border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </Spinner>
            }
            {
                personagem._id &&
                <div>
                    <Row>
                        <Col md={4}>
                            <img src={personagem.imageUrl} />
                        </Col>
                        <Col>
                            <p><b>Nome: </b>{personagem.name}</p>
                            <p><b>Data de Criação: </b>{personagem.createdAt}</p>
                            <p><a className="btn btn-primary" target="_blank" href={personagem.sourceUrl}>Ver Pagina  </a></p>
                        </Col>
                    </Row>

                    <Card border="primary">
                        <Card.Header className="bg-primary text-white">Filmes</Card.Header>
                        <Card.Body>
                            <ListGroup>
                                {personagem.films.map(item => (
                                    <ListGroup.Item key={item}>
                                        {item}
                                    </ListGroup.Item>
                                ))}
                            </ListGroup>
                        </Card.Body>
                    </Card>
                </div>

            }

        </Pagina>
    )
}