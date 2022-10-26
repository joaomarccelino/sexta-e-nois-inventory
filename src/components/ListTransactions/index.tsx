import { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import api from "../../services/api";

type ListTransactionsProps = {
  iditem: string;
}

type Transaction = {
  user: string;
  quantity: number;
  memo: string;
  transdate: string;
}

const ListTransactions = ({ iditem }: ListTransactionsProps) => {
  const [transactions, setTransactions] = useState<Transaction[]>();
  async function getTransactions() {
    const response = await api.get(`v1/inventory/transactions/${iditem}`);
    const data = response.data;
    setTransactions(data.transactions);
  }

  useEffect(() => {
    getTransactions();
  }, []);


  return (
    <>
      {
        transactions ?
          <Table striped bordered hover>
            < thead >
              <tr>
                <th className="text-center">Usuário</th>
                <th className="text-center">Quantidade</th>
                <th className="text-center">Memorando</th>
                <th className="text-center">Data da Transação</th>
              </tr>
            </thead >
            <tbody>
              {
                transactions.map((item, index) => {
                  return (
                    <tr key={index}>
                      <td>{item.user}</td>
                      <td className={`${(item.quantity >= 0 ? 'text-success': 'text-danger')} text-center`}>{Math.round(item.quantity)}</td>
                      <td>{item.memo}</td>
                      <td>{item.transdate}</td>
                    </tr>
                  )
                })
              }
            </tbody>
          </Table > : <p>Nenhuma Transação cadastrada!</p>
      }
    </>

  )
}

export default ListTransactions;