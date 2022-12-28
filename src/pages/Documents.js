import React,  { useState, useEffect } from 'react';
import { Modal, Button  } from 'react-bootstrap';

function Documents() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
    <div><Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button></div>
      <Modal show={show} onHide={handleClose}>
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
          <Button variant="light" onClick={handleClose}>
            <b>Cancelar</b>
          </Button>
          <Button variant="dark" onClick={handleClose}>
            Adicionar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
export default Documents;