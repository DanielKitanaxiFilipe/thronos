import React from 'react';
import { 
  Col,
  Card 
} from 'react-bootstrap';
import { 
  HiOutlineUserGroup,
  HiOutlineUsers,
  HiOutlineViewGrid,
  HiOutlineHome,
  HiOutlinePaperClip,
  HiOutlineUser,
  HiOutlineChartPie,
  HiOutlineCurrencyDollar,
  HiOutlineBookmark
 } from "react-icons/hi";

export function Cards() {
  return (
    <>
    <Col md={3} className='mb-4'>
            <Card>
              <Card.Body className='d-flex justify-content-between align-items-center'>
                <div>
                  <h6><b>Membros</b></h6>
                 <b>00</b>
                </div>
                <HiOutlineUsers className='icon-card text-primary'/>
              </Card.Body>
            </Card>
          </Col>
          <Col md={3} className='mb-4'>
            <Card>
              <Card.Body className='d-flex justify-content-between align-items-center'>
                <div>
                  <h6><b>Celulas</b></h6>
                 <b>00</b>
                </div>
                <HiOutlineUserGroup className='icon-card text-success'/>
              </Card.Body>
            </Card>
          </Col>
          <Col md={3} className='mb-4'>
            <Card>
              <Card.Body className='d-flex justify-content-between align-items-center'>
                <div>
                  <h6><b>Departamento</b></h6>
                 <b>00</b>
                </div>
                <HiOutlinePaperClip className='icon-card text-danger'/>
              </Card.Body>
            </Card>
          </Col>
          <Col md={3} className='mb-4'>
            <Card>
              <Card.Body className='d-flex justify-content-between align-items-center'>
                <div>
                  <h6><b>Eventos</b></h6>
                 <b>00</b>
                </div>
                <HiOutlineBookmark className='icon-card text-warning'/>
              </Card.Body>
            </Card>
          </Col>
          <Col md={3} className='mb-4'>
            <Card>
              <Card.Body className='d-flex justify-content-between align-items-center'>
                <div>
                  <h6><b>Homes</b></h6>
                 <b>00</b>
                </div>
                <HiOutlineUser className='icon-card text-secondary'/>
              </Card.Body>
            </Card>
          </Col>
          <Col md={3} className='mb-4'>
            <Card>
              <Card.Body className='d-flex justify-content-between align-items-center'>
                <div>
                  <h6><b>Mulheres</b></h6>
                 <b>00</b>
                </div>
                <HiOutlineUser className='icon-card text-info'/>
              </Card.Body>
            </Card>
          </Col>
          <Col md={3} className='mb-4'>
            <Card>
              <Card.Body className='d-flex justify-content-between align-items-center'>
                <div>
                  <h6><b>Saldo total</b></h6>
                 <b>00</b>
                </div>
                <HiOutlineChartPie className='icon-card text-success'/>
              </Card.Body>
            </Card>
          </Col>
          <Col md={3} className='mb-4'>
            <Card>
              <Card.Body className='d-flex justify-content-between align-items-center'>
                <div>
                  <h6><b>Dizimo do mes</b></h6>
                 <b>00</b>
                </div>
                <HiOutlineCurrencyDollar className='icon-card text-primary'/>
              </Card.Body>
            </Card>
          </Col>
    </>
  );
}