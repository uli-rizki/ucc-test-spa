import React from 'react';
import { Badge, Table } from "react-bootstrap";

const ListVehicle = ({data}) => {
  return ( 
    <Table responsive>
      <thead>
        <tr>
          <th>No</th>
          <th>Vehicle No</th>
          <th>Name</th>
          <th>Engine Displacement</th>
          <th>Engine Power</th>
          <th>Price</th>
          <th>Location</th>
        </tr>
      </thead>
      <tbody>
        {data.map( (vehicle, key) => 
          <tr key={key}>
            <td>{key+1}</td>
            <td>{vehicle.vehicle_no}</td>
            <td>{vehicle.vehicle_name}</td>
            <td>
              <tr>
                <td style={{borderTop: 0}}>{vehicle.engine_displacement_liter} <Badge variant="primary">L</Badge></td>
              </tr>
              <tr>
                <td>{vehicle.engine_displacement_cc} <Badge variant="info">CC/Cm3</Badge></td>
              </tr>
              <tr>
                <td>{vehicle.engine_displacement_inc} <Badge variant="warning">Inc3</Badge></td>
              </tr>
            </td>
            <td>{vehicle.engine_power}</td>
            <td>{vehicle.price+" "+vehicle.currency}</td>
            <td>{vehicle.location}</td>
          </tr>
        )}
      </tbody>
    </Table>
   );
}
 
export default ListVehicle;