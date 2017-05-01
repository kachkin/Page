import React from "react"
import Product from "./Product"

import {Col} from "react-bootstrap"

import "./Products.less"

class Products extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div className="products">
				{
					this.props.products.map(function (element) {
						return (
							<Col xs={12} key={element.id}>
								<Product
									manufacturer={element.manufacturer}
									model={element.model}
									price={element.price}
									description={element.description}
									available={element.available}
									img={element.img0}
								/>
							</Col>
						)
					})
				}
			</div>
		)
	}
}

export default Products