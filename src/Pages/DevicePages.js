import React from 'react'
import { Col, Container, Row, Image, Card, Button } from 'react-bootstrap';
import star from '../assets/star.png';

const DevicePages = () => {
   const device =  {id:1, name: 'Iphone 12 Pro', price: 25000, rating: 5, img: 'https://www.mytrendyphone.eu/images/Puro-0-3-Nude-TPU-Case-for-iPhone-12-Pro-Max-Transparent-8033830296208-16102020-01-p.jpg'};
    const description = [
        {id: 1, title: 'Оперативный память', description: '64 гб'},
        {id: 2, title: 'Камера', description: '12 мп'},
        {id: 4, title: 'Процессор', description: 'Пентиум 3'},
        {id: 3, title: 'Кол-во ядер', description: '2 '},
        {id: 5, title: 'Аккумлятор', description: '4000'},
    ]       
        return (

            <Container className="mt-3">
                <Row>
                    <Col md={4}>
                        <Image width={300} height={300} src={device.img} />
                    </Col>
                    <Col md={4}>
                        <Row className="d-flex flex-column  align-items-center">
                            <h2>{device.name}</h2>
                            <div 
                                className="d-flex justify-content-center align-items-center"
                                style={{background: `url(${star}) no-repeat center center`, width:240, height:240, backgroundSize: 'cover', fontSize: 64}}
                                >
                                {device.rating}
                            </div>
                        </Row>
                    </Col>
                    <Col md={4}>
                        <Card 
                            className="d-flex flex-column align-items-center justify-content-around"
                            style={{width:300, height: 300, fontSize: 32, border: '5px solid lightgray'}}>
                            <h3> От: {device.price} сом</h3>
                            <Button variant={'outline-dark'}>Добавить в корзину</Button>
                        </Card>
                    </Col>
                </Row>
                <Row className="d-flex flex-column m-3">
                    <h1>Характеристики</h1>
                    {description.map((info, index) =>
                        <Row key={info.id} style={{background: index % 2 === 0 ? 'lightgray' : 'transparent', padding: 10}}>
                            {info.title}: {info.description}
                        </Row>    
                    )}
                </Row>
            </Container>
            
        )
    
}

export default DevicePages
