import React, { Component } from 'react';
import axios from 'axios';
import { Card, Col, Form, Row } from 'react-bootstrap';
import FormRegister from './FormRegister';
import ListVehicle from './ListVehicle';
import { API_HOST } from '../config/config';
const currencies = ["USD","EUR","IDR"];

class Vehicle extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      vehicles : props.data || [],
      sort : "",
      vehicle : {
        vehicle_no : "",
        vehicle_name : "",
        category: "",
        engine_displacement : 0,
        format_units : "",
        engine_power : 0,
        price : 0,
        currency: "USD",
        location : ""
      }
     }
    
    this.handleSort = this.handleSort.bind(this)
    this.getData = this.getData.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.clearForm = this.clearForm.bind(this)
  }

  componentDidMount() {
    this.getData() 
  }

  getData(){
    const { sort } = this.state
    let url = `${API_HOST}/vehicle`
    if (sort !== "") {
      url = `${API_HOST}/vehicle?sort_by=${sort}`
    }

    axios.get(url)
      .then(res => {
        const vehicles = res.data;
        this.setState({ vehicles : vehicles });
    })
  }

  handleSort = e => {
    let name = e.target.name
    let value = e.target.value

    this.setState({[name] : value}, () => this.getData())
  }

  handleChange = e => {
    let name = e.target.name
    let value = e.target.value

    this.setState({ vehicle: {...this.state.vehicle, [name] : value}})
  }

  handleSubmit = e => {
    e.preventDefault()
    const { vehicle } = this.state
    
    var ini = this
    axios.post(`${API_HOST}/vehicle`, { vehicle },
        {
          headers: {
            "Access-Control-Allow-Origin": "*",
            'Content-type': 'application/json',
          },
        },
      )
      .then(res => {
        if (res.status === 201) 
          ini.getData();
          ini.clearForm()
      })
      .catch( error => {
        console.log(error)
      })
  }

  clearForm() {
    let vehicle = {
      vehicle_no : "",
      vehicle_name : "",
      category: "",
      engine_displacement : 0,
      format_units : "",
      engine_power : 0,
      price : 0,
      currency : "USD",
      location : ""
    }

    this.setState({vehicle : vehicle})
  }

  render() {
    const { vehicles, vehicle, sort }  = this.state

    return (
      <Row>
        <Col lg="8">
          <Card>
            <Card.Header>
              <h5>Vehicles</h5>
            </Card.Header>
            <Card.Body>
              <Row>
                <Col xs="6" lg="2">
                  <Form.Label>Sort By</Form.Label>
                </Col>
                <Col lg="4">
                  <Form.Control as="select" name="sort" value={sort} onChange={this.handleSort} required>
                    <option value="">--Choose--</option>
                    <option value="name">Name</option>
                    <option value="engine_displacement">Engine Displacement</option>
                    <option value="engine_power">Engine Power</option>
                  </Form.Control>
                </Col>
              </Row>
              <br />
              <ListVehicle data={vehicles} />
            </Card.Body>
          </Card>
        </Col>
        <Col lg="4">
          <Card>
            <Card.Header>
              <h5>Register</h5>
            </Card.Header>
            <Card.Body>
              <FormRegister 
                onChange={this.handleChange} 
                onSubmit={this.handleSubmit} 
                vehicle={vehicle}
                currencies={currencies} />
            </Card.Body>
          </Card>
        </Col>
      </Row>
     );
  }
}
 
export default Vehicle;