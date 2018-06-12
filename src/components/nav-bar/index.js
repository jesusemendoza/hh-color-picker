import React from 'react'
import './_navbar.scss'

export default class AppBar extends React.Component {

    constructor(props){
        super(props)
    }

render() {


		return (
			<div className='nav-bar'>
				<div className="navWide">
					<div className="wideDiv">
						<a className="nav-logo-link" href="/"></a>
						<input type='text' placeholder='Search' className='search-bar' />
					</div>
				</div>
			</div>
		);
	}
};
