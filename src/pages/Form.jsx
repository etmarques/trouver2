import React from 'react'
import Menu from '../components/Menu'
import { Container } from 'react-bootstrap'
import Footer from '../components/Footer'
import CardMenu from '../components/CardMenu'
import AguaEsgoto from '../assets/img/water-drop-4-svgrepo-com.svg'
import Aluguel from '../assets/img/apartment-svgrepo-com.svg'
import AssAdm from '../assets/img/notebook-agenda-svgrepo-com.svg'
import Eletrica from '../assets/img/energy-saving-light-bulb-svgrepo-com.svg'
import Limpeza from '../assets/img/broom-1-svgrepo-com.svg'
import Manut from '../assets/img/notification-maintenance-svgrepo-com.svg'
import Telefonia from '../assets/img/telephone-receiver-material-2-svgrepo-com.svg'
import Transporte from '../assets/img/transport-svgrepo-com.svg'
import Vigilancia from '../assets/img/security-guard-svgrepo-com.svg'
import Outros from '../assets/img/other-1-svgrepo-com.svg'

const Form = () => {
  return (
      <Container fluid className="m-0 p-0 d-flex flex-column align-content-around justify-content-around homeContainer overflow-x-hidden">
            <Menu />
            <main className="d-flex flex-column flex-grow-1 ms-1 me-1 bg-white shadow">
                <h6 className="h4 ms-5 me-3 mt-4">
                  Formulários de atesto
                    <hr />
                </h6>
                <Container fluid className="ms-5 pe-5 mb-4 d-flex flex-wrap gap-4">
                    
                        <CardMenu 
                            src={AguaEsgoto} 
                            title="Água e Esgoto" 
                            status="cardOFF"
                            disabledBtn="disabled" 
                            cor="forms"
                        />
                        <CardMenu
                            src={Aluguel}
                            title="Aluguel"
                            status="cardOFF"
                            disabledBtn="disabled"
                            cor="forms"
                        />
                        <CardMenu className="disabled"
                            src={AssAdm}
                            title="Assistente Adm."
                            status="cardON"
                            cor="forms"
                        />    
                        <CardMenu className="disabled"
                            src={Eletrica}
                            title="Energia Elétrica"
                            status="cardOFF"
                            disabledBtn="disabled"
                            cor="forms"
                        />    
                        <CardMenu className="disabled"
                            src={Limpeza}
                            title="Limpeza"
                            status="cardON"
                            cor="forms"
                        />    
                        <CardMenu className="disabled"
                            src={Manut}
                            title="Manutenção"
                            status="cardOFF"
                            disabledBtn="disabled"
                            cor="forms"
                        />    
                        <CardMenu className="disabled"
                            src={Telefonia}
                            title="Telefonia"
                            status="cardOFF"
                            disabledBtn="disabled"
                            cor="forms"
                        />    
                        <CardMenu className="disabled"
                            src={Transporte}
                            title="Transporte"
                            status="cardOFF"
                            disabledBtn="disabled"
                            cor="forms"
                        />    
                        <CardMenu className="disabled"
                            src={Vigilancia}
                            title="Vigilância"
                            status="cardOFF"
                            disabledBtn="disabled"
                            cor="forms"
                        />    
                        <CardMenu className="disabled"
                            src={Outros}
                            title="Outros"
                            status="cardOFF"
                            disabledBtn="disabled"
                            cor="forms"
                        />    
                      
                      

                    
                </Container>
            </main>
            <Footer />
      </Container>
  )
}

export default Form