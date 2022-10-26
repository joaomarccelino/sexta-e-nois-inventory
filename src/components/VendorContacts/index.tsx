import { Table } from "react-bootstrap";
import { testContacts } from "../../utils/testData";

const VendorContacts = () => {
  return (
    <Table striped bordered hover className="mb-5">
      <thead>
        <tr>
          <th>Código</th>
          <th>Nome</th>
          <th>Cargo</th>
          <th>Telefone</th>
          <th>Ações</th>
        </tr>
      </thead>
      <tbody>
        {
          testContacts.map(item => {
            return (
              <tr>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.role}</td>
                <td>{item.phone}</td>
                <td>
                  <div className="tableActions">
                    <a href={`/fornecedor/${item.id}`} style={{ "marginRight": "20px" }}>Editar</a>
                    <a href="/">Excluir</a>
                  </div>
                </td>
              </tr>
            )
          })
        }
      </tbody>
    </Table>
  )
}

export default VendorContacts;