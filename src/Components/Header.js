import React from 'react'

function Header(props) {
	return (
		<header>
			<div>
				<h1>Adventure Time Memory Game</h1>
				<p>Get points by clicking on an image but don't click on any more than once!</p>
			</div>
			<div>
				<div>Current Score: {props.current}</div>
				<div>Best Score: {props.best}</div>
			</div>
		</header>
	)
}

export default Header