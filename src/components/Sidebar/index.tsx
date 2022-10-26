import { Container, Dropdown, Nav, Navbar, } from "react-bootstrap";
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";
import styles from './sidebar.module.css';
const Sidebar = () => {
  return (
    <div className={styles.sidebar}>
      {/* <Container className="flex-column">
        <Navbar.Brand as={Dropdown} bg={'dark'} href="/" >Gestão de estoque</Navbar.Brand>
        <Nav className="flex-column">
          <Navbar.Brand href="/">Inventário</Navbar.Brand>
          <Nav.Link href="/">Cadastrar item</Nav.Link>
          <Nav.Link href="/buscar-item">Buscar item</Nav.Link>
          <Nav.Link href="/consultar-estoque">Estoque</Nav.Link>
          <Navbar.Brand>Fornecedores</Navbar.Brand>
          <Nav.Link href="/fornecedor">Cadastrar fornecedor</Nav.Link>
          <Nav.Link href="/buscar-fornecedor">Buscar fornecedor</Nav.Link>
          <Navbar.Brand>Relatórios</Navbar.Brand>
          <Nav.Link href="/estoque">Movimentação de estoque</Nav.Link>
          <Nav.Link href="/saldo-inventario">Saldo do inventário</Nav.Link>
        </Nav>
        <NavDropdown title="Inventário">
          <NavDropdown.Item href="/">Cadastrar item</NavDropdown.Item>
        </NavDropdown>
      </Container> */}
      <h2 className={styles.title}>Gestão de estoque</h2>
      <ul className={styles.sidebarMenu}>
        <li>
          <h3 className={styles.subtitle}>Inventário</h3>
          <ul>
            <li>
              <Link to='/'>Cadastrar item</Link>
            </li>
            <li>
              <Link to='/buscar-item'>Buscar item</Link>
            </li>
            <li>
              <Link to='/consultar-estoque'>Estoque</Link>
            </li>
          </ul>
        </li>
        <li>
          <h3 className={styles.subtitle}>Fornecedores</h3>
          <ul>
            <li>
              <Link to='/fornecedor'>Cadastrar fornecedor</Link>
            </li>
            <li>
              <Link to='/buscar-fornecedor'>Buscar fornecedor</Link>
            </li>
          </ul>
        </li>
        <li>
          <h3 className={styles.subtitle}>Relatórios</h3>
          <ul>
            <li>
              <Link to='/lista-transacoes'>Movimentação de estoque</Link>
            </li>
            <li>
              <Link to='/saldo-inventario'>Saldo do inventário</Link>
            </li>
          </ul>
        </li>
      </ul>
    </div>

  )
}

export default Sidebar;