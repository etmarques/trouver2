import React from 'react'
import { useState } from 'react';
import {Modal, Button} from 'react-bootstrap';

function Footer() {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
        <footer class="p-2 d-flex justify-content-between align-items-center">
            <div class="d-flex">
                <p class="m-0 me-2">2023. Projeto Trouver</p>
                    <button class="border-0 bg-transparent m-0 p-0" onClick={handleShow}></button>
            </div>
            <a href=""></a>
        </footer>

        <Modal className='footerModal' size='lg' show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Benvindo ao Projeto Trouver!</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                    <p>O Projeto Trouver tem por objetivo disponibilizar ferramentas de apoio à gestão e à fiscalização de contratos com os seguintes módulos:</p>
                    <ul>
                        <li>
                            <p class="fw-bold">BI - Dashboards: 
                                <span class="fw-normal">Tela de acompanhamento do portfolio de contratos e seus processos em andamento (e.g.: pagamentos, aditivos, reajustes, etc). 
                                </span><span> </span>
                                <span class="fw-normal badge bg-warning text-wrap">em construção
                                </span>
                            </p>
                        </li>
                        <li>
                            <p class="fw-bold">Formulários de Atesto: 
                                <span class="fw-normal">Formulários interativos para uso da fiscalização setorial, customizados para cada tipo de contrato. </span> 
                                <span class="fw-normal badge bg-success text-white text-wrap"> disponível!
                                </span>
                            </p>
                        </li>
                        <li>
                            <p class="fw-bold">Matriz de Risco: <span class="fw-normal">Ferramenta de construção interativa da matriz de risco de contratações. </span><span class="fw-normal badge bg-success text-white text-wrap"> disponível!</span></p>
                        </li>
                    </ul>
                    <p className=" blockquote-footer mt-4 mb-0 pb-0">O projeto é OSS e está sendo desenvolvido na AGU - SAD4R/COLIC por <a href="https://etmarques.onrender.com/" target="_blank" class="text-decoration-none link-secondary">Etienne Marques</a>.</p>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Fechar
                </Button>
            </Modal.Footer>
        </Modal>



        </>


  )
}

export default Footer