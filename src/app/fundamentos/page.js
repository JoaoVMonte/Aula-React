'use client'

import { Alert, Container } from "react-bootstrap"
import Header from "../components/Header"
import Link from "next/link"
import Pagina from "../components/Pagina"
export default function Fundamentos() {

    return (
        <Pagina titulo="Fundamentos" navtitle="Fundamentos">


            <Header title="FUNDAMENTOS" subtitle="SUBTITULO DE FUNDAMENTOS" />
            <Container>
                <Link href="/" className="btn btn-secondary"> PAGINA INICIAL</Link>

                <Alert>
                    AAAAAAAAAAAAAAAAAAAAAAAAAAAAA
                </Alert>
                <h1>Fundamentos</h1>
                <p>teste</p>
            </Container>
        </Pagina>
    )
}