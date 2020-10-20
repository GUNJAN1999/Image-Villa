import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import SearchBar from './SearchBar'

class App extends React.Component
{
	state={images:[]};
	onSearchSubmit=async (term)=>
	{
		console.log(term);
		const response = await axios.get('https://api.unsplash.com/search/photos',{
			params:{query:term},
			headers:{
				Authorization: 'Client-ID e68c91786aa904261e7d597e444f5438839b8bd52bb95c6aa778db040b9a8132'
			}
		});
		this.setState({images:response.data.results})
		console.log(response.data.results);
		//
	}
	render(){
	return (
	<div className="ui container" style={{marginTop:"10px"}}>
			<SearchBar 
			runner={this.onSearchSubmit}/>
			FOUND : {this.state.images.length}
	</div>
	);
	}
};
export default App;