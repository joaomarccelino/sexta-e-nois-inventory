import { useEffect, useState } from "react";
import { Form, Button, Container } from "react-bootstrap";
import { useForm, SubmitHandler } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import ListTransactions from "../../components/ListTransactions";
import TransactionForm from "../../components/TransactionForm";
import api from "../../services/api";
import { ItemInputs } from "../CadItem";
import { Item } from "../SearchItem";

const UpdateItem = () => {
  const navigate = useNavigate();
  const [item, setItem] = useState<Item>({} as Item);
  const [newTransaction, setNewTransaction] = useState<boolean>(false);
  const { id } = useParams();
  async function getItem() {
    const response = await api.get(`v1/inventory/item/${id}`);
    const data = response.data;
    console.log(data);
    setItem(data);
  }

  useEffect(() => {
    getItem();
  }, []);

  const {
    register,
    handleSubmit,
    getValues,
    watch,
    formState: { errors }
  } = useForm<ItemInputs>();

  const onSubmit: SubmitHandler<ItemInputs> = async data => {
    const newItem = {
      active: 1,
      description: data.description,
      curbal: item.curbal,
      lastPurchase: item.lastPurchase
    }

    const response = await api.patch(`http://localhost:3333/v1/inventory/item/${item.iditem}`, JSON.stringify(newItem), {
      headers: {
        'Content-Type': 'application/json',
      }
    })
      .then(res => {
        alert("Item atualizado!");
        navigate('/');
      });
  };

  function handleNewTransaction() {
    setNewTransaction(!newTransaction);
  }

  return (
    <Container className="p-5">
      <h1 className="title">Atualizar Produto</h1>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Descrição</Form.Label>
          <Form.Control
            type="text"
            defaultValue={item.description}
            placeholder="Descrição..."
            {...register("description", { required: "Descrição do item é obrigatório" })}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Quantidade</Form.Label>
          <Form.Control
            type="text"
            defaultValue={item.curbal}
            readOnly
          />
        </Form.Group>
        <Button variant="primary" type="submit" className="mb-3">
          Atualizar
        </Button>
      </Form>
      <h2 className="title">Transações do produto</h2>
      {item.iditem && <ListTransactions iditem={item.iditem} />}
      <Button  variant="secondary" type="submit" onClick={handleNewTransaction}>
        {newTransaction ? 'Cancelar transação' : 'Nova transação'}
      </Button>
      {newTransaction && <TransactionForm iditem={item.iditem} />}
    </Container>
  )
}

export default UpdateItem;