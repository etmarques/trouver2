import React from 'react'
import { Button, Card } from 'react-bootstrap';


const CardMenu = (props) => {
  const { src, title, cor, status, disabledBtn} = props;
  const cardClasses = `col-3 pt-3 rounded-3 ${cor} ${status}`;
  const buttonClasses = `${cor} ${status} ${disabledBtn}`;

  return (
    <Card className={cardClasses} style={{ width: '13rem', height:  '16rem' }}>
      <Card.Img src={src} alt="..." style={{ width: '8rem', alignSelf: 'center'}} />
      <Card.Body>
        <Card.Title style={{height:'2.3rem', fontSize:'15px' }}>{title}</Card.Title>
        <Button className={buttonClasses} variant='outline-dark'>Acesse</Button>
      </Card.Body>
    </Card>
  );
}

export default CardMenu