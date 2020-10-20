import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';



class SearchBar extends React.Component
{
	state={term:''};
	onInputChange=(e)=>{
		this.setState({term : e.target.value});
	};
	onFormSubmit=(e)=>{
		e.preventDefault();
		
		this.props.runner(this.state.term);
	}
	
	render(){
		return (
			<div className="ui segment">
				<form className="ui form" 
				onSubmit={this.onFormSubmit}>
					<div className="field">
						<label>IMAGE SEARCH</label>
						<input 
						type="text"
						value={this.state.term}
						onChange={this.onInputChange}
						name="text"/>
					</div>
				</form>
			</div>
		);
	};

}
export default SearchBar;