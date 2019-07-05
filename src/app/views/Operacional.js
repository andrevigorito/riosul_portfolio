import React, {Component} from 'react'
// Images
import iconOperacional from '../img/icons/title-ope.png'

// Components



class Operacional extends Component {

	
    render(){
        return(
			<div>
							
				<div className="center">
                    <div className="page-header">
                        <h1>
                            <img src={iconOperacional} alt="" />
                            Operacional
                        </h1>
                    </div>

                    
					
				</div>
			
			</div>
		)
    }
}

export default Operacional;