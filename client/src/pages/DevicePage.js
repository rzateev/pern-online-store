import React from 'react';
import {Button, Card, Col, Container, Image, Row} from "react-bootstrap";
import bigStar from "../assets/StarBig.png"

const DevicePage = () => {
    const device = {id:2, name:'Iphone 13 Pro', price: 78000, rating: 5, img: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-13-pro-family-hero?wid=940&hei=1112&fmt=png-alpha&.v=1631220221000'};
    const description = [
        {id:1, title: "Memory", description: "5 Gb"},
        {id:2, title: "Camera", description: "12 Mp"},
        {id:3, title: "Processor", description: "Core i3"},
        {id:4, title: "Cores", description: "3"},
        {id:5, title: "Accum", description: "4000"}
    ]
    return (
        <Container className={'mt-3'}>
            <Row>
            <Col md={4}>
                <Image width={300} height={300} src={device.img}/>
            </Col>
            <Col md={4}>
                <Row className="d-flex flex-column align-items-center">
                    <h2>{device.name}</h2>
                        <div
                            className="d-flex align-items-center justify-content-center"
                            style={{background: `url(${bigStar}) no-repeat center center`,width:240,height:240, backgroundSize: 'cover', fontSize: 64}}
                        >
                            {device.rating}

                        </div>
                </Row>
            </Col>
            <Col md={4}>
                <Card className="d-flex flex-column align-items-center justify-content-around"
                      style={{width:300, height:300,fontSize:32, border:'5px solid lightgray'}}
                >
                    <h3>От {device.price} руб.</h3>
                    <Button variant="outline-dark">Добавить в корзину</Button>
                </Card>
            </Col>
            </Row>
            <Row className="d-flex flex-column m-3">
                <h1>Характеристики</h1>
                {description.map((info,index) =>
                    <Row key={info.id} style={{background:index % 2 ===0 ? 'lightgray' : 'transparent', padding: 10}}>
                        {info.title}: {info.description}
                    </Row>

                )}
            </Row>
        </Container>
    );
};

export default DevicePage;