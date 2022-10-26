import { Table } from "react-bootstrap";
import { testContacts } from "../../utils/testData";

const VendorContacts = () => {
  return (
    <Table striped bordered hover className="mb-5">
      <thead>
        <tr>
          <th className="text-center">Código</th>
          <th className="text-center">Nome</th>
          <th className="text-center">Cargo</th>
          <th className="text-center">Telefone</th>
          <th className="text-center">Ações</th>
        </tr>
      </thead>
      <tbody>
        {
          testContacts.map(item => {
            return (
              <tr>
                <td className="text-center">{item.id}</td>
                <td>{item.name}</td>
                <td>{item.role}</td>
                <td className="text-center">{item.phone}</td>
                <td>
                  <div className="text-center">
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