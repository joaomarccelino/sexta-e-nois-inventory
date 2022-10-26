import { Modal, Button } from "react-bootstrap";
import api from "../../services/api";
import { useNavigate } from "react-router-dom";
type DeleteModalProps = {
  showModal: boolean;
  iditem: string;
}

const DeleteModal = ({ showModal, iditem }: DeleteModalProps) => {
  const navigate = useNavigate();
  async function handleDeleteItem() {
    const response = await api.delete(`http://localhost:3333/v1/inventory/item/${iditem}`)
      .then(res => {
        alert("Item excluído com sucesso!");
        navigate('/buscar-item');
      });
  }

  return (
    <Modal show={showModal}>
      <Modal.Header closeButton>
        <Modal.Title>Atenção!</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Deseja mesmo excluir o item?</h4>
        <Button variant="success"onClick={handleDeleteItem}>Sim</Button>
        <Button variant="danger">Não</Button>
      </Modal.Body>
    </Modal>
  );
}

export default DeleteModal;