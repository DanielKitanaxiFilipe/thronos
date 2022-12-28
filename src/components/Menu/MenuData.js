import React from "react";
import * as HiIcon from "react-icons/hi";

export const MenuData = [
  {
    title: 'Painel de Controle',
    path: '/dashbord',
    icon: <HiIcon.HiOutlineViewGrid className="icon-menu me-2"/>
  },
  {
    title: 'Organização',
    path : '/wwdwdw0w',
    icon: <HiIcon.HiOutlineHome className="icon-menu me-2"/>,
    iconClosed: <HiIcon.HiOutlineChevronDown/>,
    iconOpend: <HiIcon.HiOutlineChevronDown/>,
    subNav: [
      {
        title: 'Visitantes',
        path : '/www3'
      },
      {
        title: 'Funcionário',
        path : '/www4'
      },
      {
        title: 'Morador',
        path : '/www5'
      },
      {
        title: 'Porteiros',
        path : '/www6'
      },
    ]
  },
  {
    title: 'Secretaria',
    path: '/all',
    icon: <HiIcon.HiOutlineClipboardList className="icon-menu me-2"/>,
    iconClosed: <HiIcon.HiOutlineChevronDown/>,
    iconOpend: <HiIcon.HiOutlineChevronDown/>,

    subNav: [
      {
        title: 'Correntes',
        path : '/all'
      },
      {
        title: 'Garantia',
        path : '/reclam2'
      }
    ]
  },
  {
    title: 'Tesouraria',
    path: '/eeeweww',
    icon: <HiIcon.HiOutlineCog className="icon-menu me-2"/>,
    iconClosed: <HiIcon.HiOutlineChevronDown/>,
    iconOpend: <HiIcon.HiOutlineChevronDown/>,

    subNav: [
      {
        title: 'Estrutura',
        path : '/reclam7'
      },
      {
        title: 'Serviço',
        path : '/reclam8'
      },
      {
        title: 'Itens de garantia',
        path : '/reclam9'
      },
      {
        title: 'Usuário do sistema',
        path : '/reclam8'
      }
    ]
  },
  
  {
    title: 'Definição',
    path: '/eeeweww',
    icon: <HiIcon.HiOutlineCog className="icon-menu me-2"/>,
    iconClosed: <HiIcon.HiOutlineChevronDown/>,
    iconOpend: <HiIcon.HiOutlineChevronDown/>,

    subNav: [
      {
        title: 'Estrutura',
        path : '/reclam7'
      },
      {
        title: 'Serviço',
        path : '/reclam8'
      },
      {
        title: 'Itens de garantia',
        path : '/reclam9'
      },
      {
        title: 'Usuário do sistema',
        path : '/reclam8'
      }
    ]
  }
];