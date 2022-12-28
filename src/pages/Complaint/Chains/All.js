import React from 'react';
import { 
  HiChevronLeft,
  HiChevronRight,
  HiOutlineEye
} from 'react-icons/hi';
import { 
  Container,
  Card,
} from 'react-bootstrap';
import { NavLink, Link } from 'react-router-dom';
export function All() {
  return <main className='dashbord h-100 w-100'>
  <section>
    <Container className='p-4'>
      <h5 className='mb-4'><b>Reclamações</b></h5>
      <div className="btn-group btn-group-sm NavLink-tabl-tag">
        <NavLink to='/all' className="btn btn-tab-navLink border-0 ps-4 pe-4 btn-dark btnRbl">Todos</NavLink>
        <NavLink to='/' className="btn btn-tab-navLink border-0 ps-4 pe-4 btn-dark">Pendentes</NavLink>
        <NavLink to='/' className="btn btn-tab-navLink border-0 ps-4 pe-4 btn-dark">Em andamento</NavLink>
        <NavLink to='/' className="btn btn-tab-navLink border-0 ps-4 pe-4 btn-dark">Finalizado</NavLink>
        <NavLink to='/' className="btn btn-tab-navLink border-0 ps-4 pe-4 btn-dark btnRbr">Cancelado</NavLink>
      </div>
      <Card className='card-table border-top-l'>
          <Card.Body>
            <div>
              <div><h6><b>Reclamações correntes</b></h6></div>
            </div>
          </Card.Body>
           <div className='h-tablet-70'>
            <table className="table" striped bordered hover>
              <thead>
                <tr>
                  <th className='ps-4'>#</th>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th className='pe-4 text-right'>Username</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className='ps-4'>1</td>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td className='pe-4 text-right'>
                    <div className='icon-marg'><Link to='/chat' className='hiOutlineEye-tab-link'><HiOutlineEye/></Link></div>
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
</main>;;
}