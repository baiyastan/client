import React from 'react'
import { Card, Col, Image } from 'react-bootstrap';
import { FaBeer } from 'react-icons/fa';
import { useHistory } from 'react-router-dom';
import { DEVICE_ROUTE } from '../Utils/Consts';

const DeviceItem = ({device}) => {
    const history = useHistory()
    
    return (
        <Col md={3} className="mt-3" onClick={() => history.push(DEVICE_ROUTE + '/' + device.id)}>
            <Card style={{width: 150, cursor: "pointer"}} border={"light"}>
                <Image width={150} height={150} src={device.img} />
                <div className="text-black-50 mt-2 d-flex justify-content-between align-items-center">
                    <div>Samsung...</div>
                    <div className="d-flex align-items-center">
                        <div>{device.rating}</div>
                        <FaBeer width={18} height={18} />
                    </div>
                </div>
                <div>{device.name}</div>
            </Card>
        </Col>
    )
}

export default  DeviceItem
