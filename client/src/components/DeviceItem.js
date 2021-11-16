import React from 'react';
import {Card, Col, Image} from "react-bootstrap";
import star from "../assets/star.png"
import {useHistory} from "react-router-dom";
import {DEVICE_ROUTE} from "../Utils/consts";

const DeviceItem = ({device}) => {
    const history = useHistory()
    console.log(history)
    return (
        <Col md={3} className={'mt-3'} onClick={()=>history.push(DEVICE_ROUTE + '/' + device.id)}>
            <Card style={{width: 150, cursor: 'pointer'}} border='light'>
                <Image with={150} height={150} src={device.img}/>
                <div className='text-black-50 mt-1 d-flex justify-content-between align-items-center'>
                    <div>Samsung..</div>
                    <div className='d-flex justify-content-between align-items-center'>
                        <div>{device.rating}</div>
                        <Image width={18} height={18} src={star}/>
                    </div>

                </div>
                <div>
                    {device.name}
                </div>
            </Card>
        </Col>
    );
};

export default DeviceItem;