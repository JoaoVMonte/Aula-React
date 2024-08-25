import { Alert, Container } from "react-bootstrap"
import Header from "../components/Header"
import Link from "next/link"
export default  function Fundamentos(){

    return(
        <>

        <Header title="FUNDAMENTOS" subtitle="SUBTITULO DE FUNDAMENTOS"/>
        <Container>
        <Link href="/" className="btn btn-secondary"> PAGINA INICIAL</Link>

        <Alert>
            AAAAAAAAAAAAAAAAAAAAAAAAAAAAA
        </Alert>
            <h1>Fundamentos</h1>
            <p>teste</p>
        </Container>
        </>
    )
}