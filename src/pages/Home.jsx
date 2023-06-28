import React from 'react';
import { Container } from 'react-bootstrap';
import Footer from '../components/Footer';
import Menu from '../components/Menu';
import { Form, Link, NavLink } from 'react-router-dom';

const Home = () => {

  
  const underConstON = () => {
    const titleBInot = document.getElementById('titleBInot');
    titleBInot.classList.remove('visually-hidden');
  };

  const underConstOFF = () => {
    const titleBInot = document.getElementById('titleBInot');
    titleBInot.classList.add('visually-hidden');
  };

  return (
    <Container fluid className="m-0 p-0 d-flex flex-column align-content-around justify-content-around homeContainer">
      <Menu />

      <main className="flex-grow-1 ms-1 me-1 bg-white shadow homeMain d-flex gap-5 align-items-center justify-content-center">
        <Link
          to=''
          onMouseOver={underConstON}
          className="card cardBI border-0 bg-transparent m-0 p-0"
          onMouseLeave={underConstOFF}
        >
          <p className="titleBI">BI - DASHBOARD</p>
          <p id="titleBInot" className="titleBInot fw-normal badge bg-warning text-wrap text-black-50 fw-bolder visually-hidden">em construção</p>
        </Link> 
        <Link
          to='forms' 
          className="card cardForm border-0 bg-transparent m-0 p-0"
        >
          <p className="titleForm">FORMULÁRIOS DE ATESTO</p>
        </Link>
        <Link 
          to='matriz'
          className="card cardRisco border-0 bg-transparent m-0 p-0"
        >
          <p className="titleRisco">MATRIZ DE RISCO</p>
        </Link>
      </main>

      <Footer />
    </Container>
  );
};

export default Home;
