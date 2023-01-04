import React, { useState, useEffect } from 'react';
import { 
  HiChevronLeft,
  HiChevronRight,
  HiOutlineDotsVertical,
  HiOutlineNewspaper,
  HiOutlineBookmark,
  HiOutlineUser,
  HiOutlineUserGroup
} from 'react-icons/hi';
import { 
  Container,
  Card,
  Dropdown,
  Row,
  Col,
  Button,
  Form,
  Modal
} from 'react-bootstrap';
import { NavLink, Link } from 'react-router-dom';
import  Menu  from '../../../components/Menu'
function Departamento() {
  const [showAddMenbro, setShowAddMenbro] = useState(false);
  const handleCloseAddMenbro = () => setShowAddMenbro(false);
  const handleShowAddMenbro = () => setShowAddMenbro(true);
  return<main className='dashbord h-100 w-100'>
  <section className='d-flex'>
  <Menu/>
    <Container className='p-4'>  
    <div  className='d-flex justify-content-between'>
    <h5 className='mb-4'><b>Departamento</b></h5>
    <div>
      <Button variant="dark" className='btn-add-modal-link mb-3' onClick={handleShowAddMenbro}>
        Adicional Departamento
      </Button>
    </div>
    </div>    
      <Row>
      <Col md={3} className='mb-4'>
            <Card>
              <Card.Body className='d-flex justify-content-between align-items-center'>
                <div>
                  <h6><b>Departamento</b></h6>
                 <b>00</b>
                </div>
                <HiOutlineBookmark className='icon-card text-primary'/>
              </Card.Body>
            </Card>
          </Col>
          <Col md={3} className='mb-4'>
            <Card>
              <Card.Body className='d-flex justify-content-between align-items-center'>
                <div>
                  <h6><b>Lider</b></h6>
                 <b>00</b>
                </div>
                <HiOutlineUserGroup className='icon-card text-danger'/>
              </Card.Body>
            </Card>
          </Col>
          <Col md={3} className='mb-4'>
            <Card>
              <Card.Body className='d-flex justify-content-between align-items-center'>
                <div>
                  <h6><b>Vice Lider</b></h6>
                 <b>00</b>
                </div>
                <HiOutlineUserGroup className='icon-card text-warning'/>
              </Card.Body>
            </Card>
          </Col>
      </Row>
      <div className="btn-group btn-group-sm NavLink-tabl-tag">
        <NavLink to='/eclisiastico' className="btn btn-tab-navLink border-0 ps-4 pe-4 btn-dark btnRbl">Eclisiastico</NavLink>
        <NavLink to='/celulas' className="btn btn-tab-navLink border-0 ps-4 pe-4 btn-dark">Celulas</NavLink>
        <NavLink to='/departamento' className="btn btn-tab-navLink border-0 ps-4 pe-4 btn-dark btnRbr">Departamento</NavLink>
      </div>
      <Card className='card-table border-top-l'>
          <Card.Body>
          <div className='d-flex justify-content-between'>
                <div><h6><b>Departamento</b></h6></div>
                <div>
                <Dropdown>
                  <Dropdown.Toggle className='btn-arqi-tab' id="dropdown-basic">
                  <HiOutlineNewspaper/>
                      </Dropdown.Toggle>
                      <Dropdown.Menu className='bd-none border-0 dropdown-width'>
                      <div className="btn-group btn-group-sm d-flex justify-content-end" role="group" aria-label="Basic example">
                          <button className="btn btn-dark font-size-13">Excel</button>
                          <button className="btn btn-dark font-size-13">PDF</button>
                        </div>
                      </Dropdown.Menu>
                    </Dropdown>
                </div>
              </div>
          </Card.Body>
           <div className='h-tablet-70'>
            <table className="table" striped bordered hover>
              <thead>
                <tr>
                  <th className='ps-4'>Nome</th>
                  <th>Lideres</th>
                  <th>Vice Lideres</th>
                  <th className='pe-4 text-right'>Acção</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className='ps-4'>...</td>
                  <td>...</td>
                  <td>...</td>
                  <td className='pe-4 text-right'>
                  <Dropdown>
                      <Dropdown.Toggle variant="success" id="dropdown-basic">
                      <HiOutlineDotsVertical/>
                      </Dropdown.Toggle>
                      <Dropdown.Menu>
                        <Dropdown.Item href="#/action-1">Ver perfil</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">Editar</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">Eliminar</Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </td>
                </tr>
              </tbody>
            </table>
           </div>
          <Card.Body>
            <div className='pagination d-flex justify-content-between'>
              <div><h6><b>3 ate 10</b></h6></div>
              <div className="btn-group" role="group" aria-label="Basic example">
                <button type="button" className="btn"><HiChevronLeft className='icon-btn-pagination'/></button>
                <button type="button" className="btn"><HiChevronRight className='icon-btn-pagination'/></button>
              </div>
            </div>
          </Card.Body>
      </Card>
    </Container>
  </section>
  <Modal show={showAddMenbro} onHide={handleCloseAddMenbro}>
        <Modal.Header closeButton>
          <Modal.Title>Criar Departamento</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Container className='p-0'>
            <Row>
              <Col md={6} className="mb-4">
              <div className="card-form-modal border">
              <div className='label'><span>Nome</span></div>
              <input type="text" class="form-control" placeholder="Digite o nome"/>
              </div>
              </Col>
              <Col md={6} className="mb-4">
              <div className="card-form-modal border">
              <div className='label'><span>Lider</span></div>
              <input type="text" class="form-control" placeholder=""/>
              </div>
              </Col>
              <Col md={12}>
              <div className="card-form-modal border">
              <div className='label'><span>Vice Lider</span></div>
              <input type="text" class="form-control" placeholder=""/>
              </div>
              </Col>
            </Row>
          </Container>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="light" onClick={handleCloseAddMenbro}>
            <b>Cancelar</b>
          </Button>
          <Button variant="dark" onClick={handleCloseAddMenbro}>
            Criar Departamento
          </Button>
        </Modal.Footer>
      </Modal>
</main>;
}

export default Departamento;