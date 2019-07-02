import React, {Component} from 'react'
// Images
import iconTitleDash from '../img/icons/title-dash.png'

// Components



class Import extends Component {

	
    render(){
        return(
			<div>
								
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