

import React, { Component } from 'react';
import './tables.css';
import { Table } from 'react-bootstrap';



class Tables extends Component {
    render() {
        return (
          
            <div className="container-fluid" id="bottomMarginFix">
                <div className="table_container">
                <h2>Some information about the places I would like to visit</h2>
                    <Table striped bordered condensed hover>
                        <thead>
                        <tr>
                            <th className="destination">Destination</th>
                            <th className="capital">Capital</th>
                            <th className="language">Official Language</th>
                            <th className="population">Population (aprox.)</th>
                            <th className="bird">National Bird</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td className="destination">Spain</td>
                            <td className="capital">Madrid</td>
                            <td className="language">Spanish</td>
                            <td className="population">46.77 million</td>
                            <td className="bird">Eagle</td>
                        </tr>
                        <tr>
                            <td className="destination">Italy</td>
                            <td className="capital">Rome</td>
                            <td className="language">Italian</td>
                            <td className="population">59.83 million</td>
                            <td className="bird">Bluebirds</td>
                        </tr>
                        <tr>
                            <td className="destination">Aruba</td>
                            <td className="capital">Oranjestad</td>
                            <td className="language">Dutch</td>
                            <td className="population">102,911</td>
                            <td className="bird">Aruban Burrowing Owl</td>
                        </tr>
                        <tr>
                            <td className="destination">Chile</td>
                            <td className="capital">Santiago</td>
                            <td className="language">Spanish</td>
                            <td className="population">17.62 million</td>
                            <td className="bird">Andean condor</td>
                        </tr>
                        </tbody>
                    </Table>
                </div>
            </div>
        
           );
        }
    }
export default Tables;