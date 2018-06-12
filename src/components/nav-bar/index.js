import React from 'react'
import './_navbar.scss'

export default class AppBar extends React.Component {

    constructor(props){
        super(props)

        this.burgerToggle = this.burgerToggle.bind();
    }

    burgerToggle() {
		let linksEl = document.querySelector('.narrowLinks');
		if (linksEl.style.display === 'block') {
			linksEl.style.display = 'none';
		} else {
			linksEl.style.display = 'block';
		}
	}

render() {


		return (
			<div className='nav-bar'>
				<div className="navWide">
					<div className="wideDiv">
						<a className="nav-logo-link" href="/home"></a>
						<input type='text' placeholder='Search' className='search-bar' />
					</div>
				</div>
			</div>
		);
	}
};

//todo 
//make the logo go home when clicked