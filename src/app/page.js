'use client'

import { Button, Container } from "react-bootstrap";
import Header from "./components/Header";
import Link from "next/link";
import Pagina from "./components/Pagina";

export default function Home() {
  return (
    <Pagina titulo="HOME" navtitle="Home">
            
      <Container>
        <Header title="HOME" susubtitle="SUBTITULO DE HOME" />

        <Button variant="primary">
          <Link href="/fundamentos" className="text-light">Página Fundamentos</Link>
        </Button>{' '}

        <Link className="btn btn-secondary" href="/clientes" >Página Clientes</Link>      <br></br>
        <br></br>
        <Link className="btn btn-secondary" href="/fundamentos" >Página Fundamentos</Link>
      </Container>
      </Pagina>
  );
}
