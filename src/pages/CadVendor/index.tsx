import { useState } from "react";
import { Form, Button, Container } from "react-bootstrap";
import { SubmitHandler, useForm } from "react-hook-form";
import ContactForm from "../../components/ContactForm";
import VendorContacts from "../../components/VendorContacts";

type VendorInputs = {
  name: string;
  description: string;
  email: string;
  phone: string;
  whatsapp: boolean;
}

const CadVendor = () => {
  const [newContact, setNewContact] = useState<boolean>(false);

  function handleNewContact() {
    setNewContact(!newContact);
  }

  const {
    register,
    handleSubmit,
    getValues,
    watch,
    formState: { errors }
  } = useForm<VendorInputs>();

  const onSubmit: SubmitHandler<VendorInputs> = async data => {
    console.log("Values:::", data);
    console.log("Values:::", JSON.stringify(data));
  };

  return (
    <Container className="p-5">
      <h1 className="title mb-3">Cadastro de Fornecedor</h1>
      <Form onSubmit={handleSubmit(onSubmit)} className="mb-5">
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
            label={`Sim`}
            value={'true'}
          />
          <Form.Check
            {...register("whatsapp", { required: "Opção obrigatória" })}
            name="whatsapp"
            inline
            type='radio'
            label={`Não`}
            value={'false'}
          />
        </div>
        <Button variant="primary" type="submit">
          Cadastrar
        </Button>
      </Form>
      <h2 className="title">Cadastro de Contatos</h2>
      <VendorContacts />
      <Button variant="primary" onClick={handleNewContact} className="mb-5">
        Adicionar contato
      </Button>
      {newContact &&
      <ContactForm />
      }
    </Container>
  )
}

export default CadVendor;