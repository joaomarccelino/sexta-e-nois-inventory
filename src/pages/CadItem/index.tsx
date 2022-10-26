import { Button, Form, Container } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useForm, SubmitHandler } from "react-hook-form";
import api from "../../services/api";
import { useNavigate } from "react-router-dom";

export type ItemInputs = {
  description: string;
  curbal: number;
}

const CadItem = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    getValues,
    watch,
    reset,
    formState: { errors }
  } = useForm<ItemInputs>();

  const onSubmit: SubmitHandler<ItemInputs> = async data => {
    const newItem = {
      active: 1,
      description: data.description,
      curbal: data.curbal,
      lastPurchase: "2022-10-20 23:00:00"
    }

    const response = await api.post('http://localhost:3333/v1/inventory/item', JSON.stringify(newItem), {
      headers: {
        'Content-Type': 'application/json',
      }
    })
      .then(res => {
        alert("Item cadastrado!");
        reset();
      });
  };
  return (
    <Container className="p-5">
      <h1 className="title">Cadastro de item</h1>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Descrição</Form.Label>
          <Form.Control
            type="text"
            placeholder="Descrição..."
            {...register("description", { required: "Descrição do item é obrigatório" })}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Saldo atual</Form.Label>
          <Form.Control
            type="number"
            placeholder="Saldo do item..."
            {...register("curbal", { required: "Saldo do item é obrigatório" })}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Cadastrar
        </Button>
      </Form>
    </Container>
  )
}

export default CadItem;