import React from "react"


import {Col, Button, Panel} from "react-bootstrap"

import "./Product.less"

class Product extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			open: false
		};
	}
	
	render() {
		return (
			<Panel className="product" onClick={ () => this.setState({open: !this.state.open})}>
				<Col lg={4} md={4} xs={4}>
					<img src={this.props.img} alt=""/>
				</Col>
				<Col lg={8} md={8} xs={8}>
					<Col lg={12} md={12} xs={12} className="info-product">
						<Col lg={12} md={12} xs={12}>
							<strong>{this.props.manufacturer} {this.props.model}</strong>
						</Col>
						<Col lg={12} md={12} xs={12}>
							{this.props.price} BYN
						</Col>
					</Col>
					<Col lg={12} md={12} xs={12}>
						<Panel className="description" collapsible expanded={this.state.open}>
								<p>
									{this.props.description}
								</p>
								<p>
									<strong>Available: </strong>{this.props.available}
								</p>
								
						</Panel>
					</Col>
				</Col>
			</Panel>
		)
	}
}

export default Product