import React from 'react';
import { useState, useEffect } from 'react'
import { PropTypes } from 'prop-types';

function Card(props) {
	const [clicked, setClicked] = useState(false)

	const handleClick = () => {
		console.log(`this is ${props.name} clicked: ` + clicked)
		if(clicked === false) {
			props.updateGame()
			setClicked(true)
		} else {
			console.log('end game called from Card')
			props.endGame()
		}
	}

	useEffect(() => {
		if (props.reset === true) {
			console.log('reset called ' + props.name)
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
/*
Card.protoTypes = {
	reset: PropTypes.boolean.isRequired,
	src: PropTypes.string,
	name: PropTypes.string,
}
*/
export default Card;
