import React,  { useState, useEffect } from 'react';
import { Modal, Button  } from 'react-bootstrap';

function Documents() {
  const [showAddMenbro, setShowAddMenbro] = useState(false);
  const handleCloseAddMenbro = () => setShowAddMenbro(false);
  const handleShowAddMenbro = () => setShowAddMenbro(true);
  return (
    <>
    <div><Button variant="primary" onClick={handleShowAddMenbro}>
        Launch demo modal
      </Button></div>
      <Modal show={showAddMenbro} onHide={handleCloseAddMenbro}>
        <Modal.Header closeButton>
          <Modal.Title>Adicionar usuario</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="card-form-modal border">
          <div className='label'>Nome</div>
          <input type="email" class="form-control" placeholder="name@example.com"/>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="light" onClick={handleCloseAddMenbro}>
            <b>Cancelar</b>
          </Button>
          <Button variant="dark" onClick={handleCloseAddMenbro}>
            Adicionar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
export default Documents;