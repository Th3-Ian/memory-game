import React from 'react';
import { useState, useEffect } from 'react'

function Card(props) {
	const [clicked, setClicked] = useState(false)

	const handleClick = () => {
		console.log(`this is ${props.name} clicked: ` + clicked)
		if(clicked === false) {
			props.updateGame()
			setClicked(!clicked)
		} else {
			props.endGame()
		}
	}

	useEffect(() => {
		if (props.reset === true) {
			setClicked(false);
		}
	}, [props.reset]);

  return <div onClick={handleClick}>
		<div>
			<img src={props.src} alt={'Picture of' + props.name} ></img>
		</div>
		<div>
			<h2>{props.name}</h2>
		</div>
	</div>;
}

export default Card;
