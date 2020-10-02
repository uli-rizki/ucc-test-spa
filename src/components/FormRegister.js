import React, { Component } from 'react';
import { Button, Form, Row, Col } from 'react-bootstrap';

class FormRegister extends Component {
  
  render() { 
    const { onChange, onSubmit, vehicle, currencies } = this.props

    return (
      <Form onSubmit={onSubmit}>
        <Form.Group controlId="vehicleNo">
          <Form.Label>Vehicle Identifier</Form.Label>
          <Form.Control type="text" name="vehicle_no" value={vehicle.vehicle_no} placeholder="450AFM" onChange={onChange} required />
        </Form.Group>
        <Form.Group controlId="category">
          <Form.Label>Category</Form.Label>
          <Form.Control as="select" name="category" value={vehicle.category} onChange={onChange} required>
            <option disabled value="">--Choose--</option>
            <option value="motorcycle">Motorcycle</option>
            <option value="cars">Cars</option>
            <option value="truck">Truck</option>
          </Form.Control>
        </Form.Group>
        <Form.Group controlId="vehicleName">
          <Form.Label>Vehicle Name</Form.Label>
          <Form.Control type="text" name="vehicle_name" value={vehicle.vehicle_name} placeholder="" onChange={onChange} required/>
        </Form.Group>
        <Form.Group>
          <Form.Label>Engine Displacement</Form.Label>
          <Row>
            <Col sm="8" lg="7">
            <Form.Control type="text" id="engine_displacement" name="engine_displacement" value={vehicle.engine_displacement} onChange={onChange} required/>
            </Col>
            <Col sm="4" lg="5">
              <Form.Control as="select" id="format_units" name="format_units" value={vehicle.format_units} onChange={onChange} required>
                <option disabled value="">--Choose--</option>
                <option value="L">L</option>
                <option value="cc">CC/CM 3</option>
                <option value="in">Inch 3</option>
              </Form.Control>
            </Col>
          </Row>
        </Form.Group>
        <Form.Group controlId="enginePower">
          <Form.Label>Engine Power</Form.Label>
          <Form.Control type="text" name="engine_power" value={vehicle.engine_power} placeholder="115 hp" onChange={onChange} required />
        </Form.Group>
        <Form.Group>
          <Form.Label>Price</Form.Label>
          <Row>
            <Col sm="8" lg="7">
              <Form.Control type="text" id="price" name="price" value={vehicle.price} placeholder="" onChange={onChange} required/>
            </Col>
            <Col sm="4" lg="5">
              <Form.Control as="select" id="currency" name="currency" value={vehicle.currency} onChange={onChange} required>
                <option disabled value="">--Choose--</option>
                {currencies.map( (currency, key)=>
                <option key={key} value={currency}>{currency}</option>
                )}
              </Form.Control>
            </Col>
          </Row>
        </Form.Group>
        <Form.Group controlId="location">
          <Form.Label>Location</Form.Label>
          <Form.Control type="text" name="location" value={vehicle.location} placeholder="" onChange={onChange} required/>
        </Form.Group>
        <Form.Group>
          <Button type="submit" variant="primary">Submit</Button>
        </Form.Group>
      </Form>
     );
  }
}
 
export default FormRegister;