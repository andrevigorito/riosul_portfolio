import React, {Component} from 'react'
// Images
import iconTitleDash from '../img/icons/title-dash.png'

// Components
import Menu from './components/Menu';
import Header from './components/Header';


class Import extends Component {

	
    render(){
        return(
			<div>
				<Menu />
				<Header />				
				<div className="center">
                    <div className="page-header">
                        <h1>
                            <img src={iconTitleDash} alt="" />
                            Import
                        </h1>
                    </div>
					
				</div>
			
			</div>
		)
    }
}

export default Import;