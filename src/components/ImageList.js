import React from 'react';
import './ImageList.css';
const ImageList=(props)=>{
	
	
	const images=props.img.map((image)=>{
		return <div key={image.id}>
		<img  alt={image.description} src={image.urls.regular}/>
		</div>
	});
	
	return (
		<div className="image-list">
			{images}
		</div>
	);
}
export default ImageList;


