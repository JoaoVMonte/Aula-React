import Link from "next/link";
import Header from "../components/Header";
import { Container, Table } from "react-bootstrap";

export default function Clientes() {
  return (
    <main>
      <Container>

        <Header title="Clientes" subtitle="Pagina clientes usando cabeçalho" />
        <Link href="/fundamentos" className="btn btn-primary">Página Inicial</Link>
        <Link href="/" className="btn btn-secondary">Página Inicial</Link>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Username</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
            </tr>
            <tr>
              <td>3</td>
              <td colSpan={2}>Larry the Bird</td>
              <td>@twitter</td>
            </tr>
          </tbody>
        </Table>
      </Container>
    </main>
  )
}