import { Form, Button } from "react-bootstrap";
import { useForm, SubmitHandler } from "react-hook-form";
type ContactInputs = {
  name: string;
  description: string;
  email: string;
  phone: string;
  whatsapp: boolean;
}

const ContactForm = () => {

  const {
    register,
    handleSubmit,
    getValues,
    watch,
    formState: { errors }
  } = useForm<ContactInputs>();

  const onSubmit: SubmitHandler<ContactInputs> = async data => {
    console.log("Values:::", data);
    console.log("Values:::", JSON.stringify(data));
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Nome</Form.Label>
        <Form.Control
          type="text"
          placeholder="Razão Social..."
          {...register("name", { required: "Nome do fornecedor é obrigatório" })}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Descrição</Form.Label>
        <Form.Control
          type="text"
          placeholder="Descrição..."
          {...register("description", { required: "Descrição do fornecedor é obrigatório" })}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>E-mail</Form.Label>
        <Form.Control
          type="email"
          placeholder="empresa@empresa.com..."
          {...register("email", { required: "E-mail do fornecedor é obrigatório" })}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Telefone</Form.Label>
        <Form.Control
          type="text"
          placeholder="(XX) XXXXX-XXXX..."
          {...register("phone", { required: "Telefone do fornecedor é obrigatório" })}
        />
      </Form.Group>
      <Form.Label>Whatsapp?</Form.Label>
      <div className="mb-3">
        <Form.Check
          {...register("whatsapp", { required: "Opção obrigatória" })}
          name="whatsapp"
          inline
          type='radio'
          label={'Sim'}
          value={'true'}
        />
        <Form.Check
          {...register("whatsapp", { required: "Opção obrigatória" })}
          name="whatsapp"
          inline
          type='radio'
          label={'Não'}
          value={'false'}
        />
      </div>
      <Button variant="primary" type="submit">
        Cadastrar
      </Button>
    </Form>
  )
}

export default ContactForm;