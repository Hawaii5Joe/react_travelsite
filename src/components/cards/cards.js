

import React, { Component } from 'react';
import './cards.css';


class Cards extends Component {
    render() {
        return (
            
                <div className="col-md-3 text-center">
                    {/* <div className="container-fluid big_margins">
                        <div className="container">
                             <div className="row"> */}
                                <img width="250px" src={this.props.flag} />
                                <h3>{this.props.country}</h3>
                                <a className="picture" href={this.props.link} target="_blank">{this.props.country} Tourism Site</a>
                            {/* </div>
                        </div>
                    </div> */}
                </div>
        
            );
        }
    }
export default Cards;