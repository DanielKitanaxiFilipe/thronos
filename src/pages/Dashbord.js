import React from 'react';
import { Cards } from '../components/Cards';
import { 
  HiChevronLeft,
  HiChevronRight,
  HiOutlineNewspaper,
  HiOutlineDotsVertical
} from 'react-icons/hi';
import { 
  Container,
  Row,
  Card,
  Dropdown
} from 'react-bootstrap';

function Dashbord() {
  return <main className='dashbord h-100 w-100'>
    <section>
      <Container className='p-4'>
        <h5 className='mb-4'><b>Painel de controle</b></h5>
        <Row>
          <Cards/>
        </Row>
        <Card className='card-table'>
            <Card.Body>
              <div className='d-flex justify-content-between'>
                <div><h6><b>Membros</b></h6></div>
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
             <div className='h-tablet'>
              <table className="table" striped bordered hover>
                <thead>
                  <tr>
                    <th className='ps-4'>Nome</th>
                    <th>Telefone</th>
                    <th>Email</th>
                    <th>Endereço</th>
                    <th>Idade</th>
                    <th>Genero</th>
                    <th>Tipo de menbro</th>
                    <th className='pe-4 text-right'>Username</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className='ps-4'>Daniel Kitanaxi Filipe</td>
                    <td>924 660 115</td>
                    <td>danielkitanaxifilipe12@gmail.com</td>
                    <td>Luanda/Cazenga</td>
                    <td>???????</td>
                    <td>25</td>
                    <td>Cazenga41</td>
                    <td className='pe-4 text-right'>
                    <Dropdown>
                      <Dropdown.Toggle variant="success" id="dropdown-basic">
                      <HiOutlineDotsVertical/>
                      </Dropdown.Toggle>

                      <Dropdown.Menu>
                        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
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
  </main>;
}
export default Dashbord;