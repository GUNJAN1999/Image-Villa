import axios from 'axios';

export default axios.create({
	baseURL:'https://api.unsplash.com',
	headers:{
	Authorization: 'Client-ID e68c91786aa904261e7d597e444f5438839b8bd52bb95c6aa778db040b9a8132'}
});
