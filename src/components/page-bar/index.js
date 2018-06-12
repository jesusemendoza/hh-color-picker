import React from 'react'
import './_page-bar.scss'

export default class PageBar extends React.Component {

    constructor(props){
        super(props)
    }

render() {
        const { changePage, detailView } = this.props;
		return (
            <div className='page-bar' 
                style={{bottom:`${detailView?5:-5}%`, right:'20%', width:'40%'}}>
				<div className="navWide">
					<div className="wideDiv" onClick={(event)=> changePage(event)}>
						<a id='0'className="nav-link">1</a>
						<a id='1'className="nav-link">2</a>
						<a id='2'className="nav-link">3</a>
						<a id='3'className="nav-link">4</a>
						<a id='4'className="nav-link">5</a>
						<a id='5'className="nav-link">6</a>
                        <a id='6'className="nav-link">7</a>
						<a id='7'className="nav-link">8</a>
					</div>
				</div>
			</div>
		);
	}
};

//todo 
//make the logo go home when clicked