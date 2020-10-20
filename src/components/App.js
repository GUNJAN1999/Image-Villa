import React from 'react';
import ReactDOM from 'react-dom';
import unsplash from '../api/unsplash';
import SearchBar from './SearchBar'
import ImageList from './ImageList'

class App extends React.Component
{
	state={images:[]};
	onSearchSubmit=async (term)=>
	{
		console.log(term);
		const response = await unsplash.get('/search/photos',
		{
			params:{query:term},
		});
		this.setState({images:response.data.results});
		console.log(response.data.results);
		//
	}
	render(){
	return (
	<div className="ui container" style={{marginTop:"10px"}}>
			<SearchBar 
			runner={this.onSearchSubmit}/>
			FOUND : {this.state.images.length}
			<ImageList 
			img={this.state.images}/>
	</div>
	);
	}
};
export default App;