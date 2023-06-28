import React from 'react'
import Menu from '../components/Menu'
import { Container } from 'react-bootstrap'
import Footer from '../components/Footer'
import CardMenu from '../components/CardMenu'
import ServCMO from '../assets/img/worker-image-on-card-svgrepo-com.svg'
import ServSMO from '../assets/img/remote-control-svgrepo-com.svg'
import ServEng from '../assets/img/engineering-helmet-cog-svgrepo-com.svg'
import ServOut from '../assets/img/ellipsis-svgrepo-com.svg'

const Matriz = () => {
  return (
      <Container fluid className="m-0 p-0 d-flex flex-column align-content-around justify-content-around homeContainer overflow-x-hidden">
            <Menu />
            <main className="d-flex flex-column flex-grow-1 ms-1 me-1 bg-white shadow">
                <h6 className="h4 ms-5 me-3 mt-4">
                  Matriz de risco
                    <hr />
                </h6>
                <Container fluid className="ms-5 mb-4 d-flex flex-wrap gap-3">
                    <CardMenu
                        src={ServCMO}
                        title="Serv. contínuos com mão-de-obra alocada"
                        status="cardON"
                        cor="matriz"
                    />
                    <CardMenu className="disabled"
                        src={ServSMO}
                      title="Serv. contínuos sem mão-de-obra alocada"
                        status="cardON"
                        cor="matriz"
                    />    
                    <CardMenu className="disabled"
                        src={ServEng}
                        title="Obras e Serviços de Engenharia"
                        status="cardOFF"
                        disabledBtn="disabled"
                        cor="matriz"
                    />    
                    <CardMenu className="disabled"
                        src={ServOut}
                        title="Matriz de Risco em branco"
                        status="cardON"
                        cor="matriz"
                    />    
                </Container>
            </main>
            <Footer />
      </Container>
  )
}

export default Matriz