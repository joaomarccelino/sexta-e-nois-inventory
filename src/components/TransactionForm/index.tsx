import { Form, Button } from "react-bootstrap";
import { useForm, SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import api from "../../services/api";

type TransactionInputs = {
  quantity: number;
  memo: string;
  type: string;
}

type TransactionFormProps = {
  iditem: string;
}

const TransactionForm = ({iditem}: TransactionFormProps) => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    getValues,
    reset,
    watch,
    formState: { errors }
  } = useForm<TransactionInputs>();

  const onSubmit: SubmitHandler<TransactionInputs> = async data => {
    const updateQt = data.type === 'entry' ? data.quantity : (0 - data.quantity);
    const newTransaction = {
      iditem: iditem,
      quantity: updateQt,
      user: 'Giovanni',
      memo: data.memo
    }

    const response = await api.post('http://localhost:3333/v1/inventory/transactions', JSON.stringify(newTransaction), {
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
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Quantidade</Form.Label>
        <Form.Control
          type="number"
          {...register("quantity", { required: "Descrição do item é obrigatório" })}
        />
      </Form.Group>
      <Form.Label>Tipo de movimentação</Form.Label>
      <div className="mb-3">
        <Form.Check
          {...register("type", { required: "Opção obrigatória" })}
          name="type"
          inline
          type='radio'
          label={`Entrada`}
          value={'entry'}
        />
        <Form.Check
          {...register("type", { required: "Opção obrigatória" })}
          name="type"
          inline
          type='radio'
          label={`Saída`}
          value={'exit'}
        />
      </div>
      <Form.Group className="mb-3">
        <Form.Label>Memorando</Form.Label>
        <Form.Control
          type="text"
          placeholder="Doação de Empresa X..."
          {...register("memo", { required: "Saldo do item é obrigatório" })}
        />
      </Form.Group>
      <Button variant="primary" type="submit">
        Cadastrar
      </Button>
    </Form>
  );
}

export default TransactionForm;