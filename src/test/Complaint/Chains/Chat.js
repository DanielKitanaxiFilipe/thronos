import React from 'react';
import { 
  Container, 
  Card } from 'react-bootstrap';
import {
  HiOutlinePaperAirplane,
  HiOutlineLink,
} from 'react-icons/hi';
import user1 from './../../../assets/phots/user1.jpg'
import user2 from './../../../assets/phots/user2.jpg'
import user3 from './../../../assets/phots/user3.jpg'
import user4 from './../../../assets/phots/user4.jpg'

export function Chat() {
  return <main className='chat d-flex'>
    {/*
      <div className="list-reclm">
      <div className="p-4 list-main-search">
        <div className="d-flex justify-content-between">
          <div>
          <h6><b>Reclamacoes</b></h6>
          <span className='sbTitle'>20 Mensagem, 5 Arguivos</span>
          </div>
          <div>
            +
          </div>
        </div>
        <div className="input-group mt-2">
          <span className="input-group-text border-0 rounded-0" id="basic-addon1">@</span>
          <input type="text" className="form-control border-0 rounded-0" placeholder="Pesquisar" />
        </div>
      </div>
    </div>
    */}
    <section className='chat-menseger'>
    <nav className="navbar">
  <div className="container">
    <h6><b>Chat</b></h6>
    <div className="d-flex">
    <div className="avatar"><img src={user3}/></div>
    <div className="avatar"><img src={user1}/></div>    
    <div className="avatar"><img src={user4}/></div>
    <div className="avatar"><img src={user2}/></div>
    </div>
  </div>
</nav>
    <div className="chatBP">
      <Container className='pt-4 pb-4'>
        <div className="d-flex card-menseger-users flex-row mb-4">
           <div className="avatar">
            <img src={user1}/>
           </div>
            <div className='ms-3'>
            <font className='name-users'><b>Otavia Riron</b></font> <font className='time-users'><b>9:25 am</b></font>
            <Card className='mt-1'>
              <Card.Body>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere perspiciatis doloremque odit eligendi sit itaque quis officiis culpa veniam? Mollitia temporibus aliquid, maiore
              </Card.Body>
            </Card>
            </div>
        </div>

        <div className="d-flex card-menseger-users flex-row mb-4">
           <div className="avatar">
            <img src={user2}/>
           </div>
            <div className='ms-3'>
            <font className='name-users'><b>Geovany da Costa</b></font> <font className='time-users'><b>9:25 am</b></font>
            <Card className='mt-1'>
              <Card.Body>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere perspiciatis doloremque odit eligendi sit itaque quis officiis culpa veniam? Mollitia temporibus aliquid, maiore Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia distinctio ratione repellendus modi beatae optio sapiente maxime nesciunt eaque consequatur odit, ipsam debitis necessitatibus reprehenderit accusamus labore asperiores recusandae fugit.
              </Card.Body>
            </Card>
            </div>
        </div>
        <div className="d-flex card-menseger-user flex-row-reverse mb-4">
        <div className="avatar">
            <img src={user3}/>
           </div>
            <div className='me-3 card-text-user'>
            <div className='d-flex flex-row-reverse'>
              <span><font className='name-user'><b>Daniel Filipe</b></font> <font className='time-user'><b>9:25 am</b></font></span>
            </div>
            <Card className='mt-1'>
              <Card.Body>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere perspiciatis doloremque odit eligendi sit itaque quis officiis culpa veniam? Mollitia temporibus aliquid, maiore
              </Card.Body>
            </Card>
            </div>
        </div>
        <div className="separator">10 de Novembro</div>
        <div className="d-flex card-menseger-users flex-row mb-4">
           <div className="avatar">
            <img src={user4}/>
           </div>
            <div className='ms-3'>
            <font className='name-users'><b>Cassia Fernandes</b></font> <font className='time-users'><b>9:25 am</b></font>
            <Card className='mt-1'>
              <Card.Body>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere perspiciatis doloremque odit eligendi sit itaque quis officiis culpa veniam? Mollitia temporibus aliquid, maiore
              </Card.Body>
            </Card>
            </div>
        </div>
        <div className="d-flex card-menseger-user flex-row-reverse mb-4">
        <div className="avatar">
            <img src={user3}/>
           </div>
            <div className='me-3 card-text-user'>
            <div className='d-flex flex-row-reverse'>
              <span><font className='name-user'><b>Daniel Filipe</b></font> <font className='time-user'><b>9:25 am</b></font></span>
            </div>
            <Card className='mt-1'>
              <Card.Body>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere perspiciatis doloremque odit eligendi sit itaque quis officiis culpa veniam? Mollitia temporibus aliquid, maiore
              </Card.Body>
            </Card>
            </div>
        </div>
      </Container>
      </div>
      <div className='form-text-menseger position-absolute bottom-0'>
        <div className="input-group">
          <textarea class="form-control me-3" placeholder="Digite algo"/>
          <button type="button" class="btn border-0 borRadiLift btn-dark btn-sm ps-3 pe-3"><HiOutlineLink/></button>
          <button type="button" class="btn border-0 btn-dark btn-sm ps-3 pe-3"><HiOutlinePaperAirplane/></button>
        </div>
      </div>
    </section>
    <section></section>
  </main>;
}