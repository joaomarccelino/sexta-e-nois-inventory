import { Container, Table } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useForm, SubmitHandler } from "react-hook-form";
import api from "../../services/api";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import DeleteModal from "../../components/DeleteModal";

export type Item = {
  active: number;
  iditem: string;
  description: string;
  curbal: number;
  lastPurchase: string;
}

type SearchInput = {
  search: string;
}

const SearchItem = () => {
  const navigate = useNavigate();
  const [items, setItems] = useState<Item[]>([]);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [selectedItem, setSelectedItem] = useState<string>('');
  async function getItems() {
    const response = await api.get('/v1/inventory/item');
    const data = response.data;
    setItems(data);
  }

  useEffect(() => {
    getItems();
  }, [])

  const {
    register,
    handleSubmit,
    getValues,
    watch,
    formState: { errors }
  } = useForm<SearchInput>();

  const onSubmit: SubmitHandler<SearchInput> = async data => {
    console.log("Values:::", data);
    console.log("Values:::", JSON.stringify(data));
  };

  function handleShowDeleteModal(id: string) {
    setSelectedItem(id);
    setShowDeleteModal(true);
  }

  return (
    <Container className="p-5">
      <h1 className="title">Buscar item</h1>
      <InputGroup className="mb-3">
        <Form.Control
          placeholder="Procure um item..."
          aria-label="Procure um item..."
          aria-describedby="basic-addon2"
        />
        <Button variant="outline-secondary" id="button-addon2">
          Buscar
        </Button>
      </InputGroup>
      <section>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th className="text-center">Código</th>
              <th className="text-center">Produto</th>
              <th className="text-center">Quantidade</th>
              <th className="text-center">Ações</th>
            </tr>
          </thead>
          <tbody>
            {
              items.filter(item => item.active === 1).map(item => {
                return (
                  <tr key={item.iditem}>
                    <td className="text-center">{item.iditem}</td>
                    <td>{item.description}</td>
                    <td className="text-center">{Math.round(item.curbal)}</td>
                    <td>
                      <div className="text-center">
                        <Button variant="success" onClick={() => navigate(`/produto/${item.iditem}`)} style={{ "marginRight": "20px" }}>Editar</Button>
                        <Button variant="danger" onClick={() => handleShowDeleteModal(item.iditem)}>Excluir</Button>
                      </div>
                    </td>
                  </tr>
                )
              })
            }
          </tbody>
        </Table>
      </section>
      <DeleteModal showModal={showDeleteModal} iditem={selectedItem}  />
    </Container>
  )
}

export default SearchItem;