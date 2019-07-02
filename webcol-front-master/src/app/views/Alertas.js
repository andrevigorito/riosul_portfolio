import React, {Component} from 'react'
import API from '../service/api';

// Images
import iconTitleAlert from '../img/icons/title-alert.png'

// Components



class Alertas extends Component {
    state = {
		alerts: [],
    }
    
    componentDidMount() {
		this.setState({ isLoading: true })
		API.get(`products/alerts`)
		  .then(res => {
			const alerts = res.data;
			console.log(alerts)
			this.setState({ 
				alerts,
				isLoading: false
			 });
			
		  })
	  }
	
    render(){
        return(
			<div>			
				<div className="center">
                    <div className="page-header">
                        <h1>
                            <img src={iconTitleAlert} alt="" />
                            Alertas
                        </h1>
                    </div>

                    <div className="list-alerts">
                        <div className="header">
                            <p className="w10">Data</p>
                            <p className="w60">PO / Linha</p>
                            <p className="w20">Data Po Inicial</p>
                            <p className="w20">GR Atual</p>
                        </div>

                        { this.state.alerts.map(alerta => 
                        <div className="item" key={alerta.uuid}>
                            <p className="date current w10">{new Date(alerta.last_update).toLocaleDateString()}</p>
                            <p className="po w60">{alerta.bdp_ref} /  {alerta.po_number}</p>
                            <p className="date w20">{new Date(alerta.gr_requested_date).toLocaleDateString()}</p>
                            <p className="altered date w20">{new Date(alerta.eta_date).toLocaleDateString()}</p> 
                        </div>
                        )}

                    </div>

                    
					
				</div>
			
			</div>
		)
    }
}

export default Alertas;