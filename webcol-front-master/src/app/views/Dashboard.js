import React, {Component} from 'react'
// Images
import iconTitleDash from '../img/icons/title-dash.png'

// Components



class Dashboard extends Component {

	
    render(){
        return(
			<div>
							
				<div className="center">
                    <div className="page-header">
                        <h1>
                            <img src={iconTitleDash} alt="" />
                            Dashboard
                        </h1>
                    </div>

                    <iframe width="100%" height="700" src="https://app.powerbi.com/view?r=eyJrIjoiOGJjZTlhNGQtOGY5YS00N2ExLThhMzAtZGFiZGI0Y2U3MTI5IiwidCI6IjNhNTZkODhlLWUxNjgtNGNmZC1hMWM4LWVlOTVlMzVkZGI5ZiJ9" frameborder="0" allowFullScreen="true" title="Dashboard"></iframe>
					
				</div>
			
			</div>
		)
    }
}

export default Dashboard;