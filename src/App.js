import React from "react"
import Products from "./components/Products"
import Search from "./components/Search"
import {Col} from "react-bootstrap"

import "./App.less"

class App extends React.Component{
	constructor(props){
		super(props);
		this.state= {
			list: this.props.products
		}
	}
	
	handleSearch(search){
		var list = this.props.products;
		var newList = list.filter(function (element) {
			return (element.manufacturer + " " + element.model).match(new RegExp(search, 'i'));
		});
		this.setState({
			list:newList
		})
	}
	
	render(){
		return (
			<div className="content">
				<Col lg={4} md={4} xs={12}>
					<Search
						onSearch={this.handleSearch.bind(this)}
					/>
				</Col>
				<Col lg={8} md={8} xs={12}>
					<Products
						products={this.state.list}
					/>
				</Col>
			</div>
		)
	}
}

export default App;