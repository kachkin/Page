import React from "react"

import {FormControl, InputGroup} from "react-bootstrap"


import "./Search.less"

class Search extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			value: ""
		}
	}
	handleChange(event){
		var value = event.target.value;
		this.setState({value: event.target.value});
		this.props.onSearch(value)
	}
	render() {
		return (
			<div className="search">
				<FormControl
					type="text"
					value={this.state.value}
					placeholder="Enter text"
					onChange={this.handleChange.bind(this)}
				/>
			</div>
		)
	}
}

export default Search