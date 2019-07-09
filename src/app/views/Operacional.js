import React, {Component} from 'react'
import API from '../service/api';

// Images
import iconOperacional from '../img/icons/title-ope.png'

// Components
import Loading from './components/Loading';


class Operacional extends Component {
    state = {
        operacional: [],
        isLoading: false,
    }
    
    componentDidMount() {
		this.setState({ isLoading: true })
		API.get(`products`)
		  .then(res => {
			const operacional = res.data;
			console.log(operacional)
			this.setState({ 
				operacional,
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
                            <img src={iconOperacional} alt="" />
                            Operacional
                        </h1>
                    </div>

                    <div className='list-ope'>
                        <header className="header-list-ope">
                            <p>Crit.</p>
                            <p>PO</p>
                            <p>Produto</p>
                            <p>Descrição</p>
                            <p>Qtd.</p>
                            <p>Planta Destino</p>
                            <p>Status</p>
                        </header>
                        { this.state.isLoading && <Loading /> }
                        { this.state.operacional.map(ope => 
                            <div className='item' key={ope.uuid}>
                                <span className='critico'></span>
                                <p className='po'>-</p>
                                <p className='produto'>{ope.product_id}</p>
                                <p className='descricao'>{ope.product_description}</p>
                                <p className='qtd'>-</p>
                                <p className='pd'>-</p>
                                <p className='status alert'>Possível Atraso</p> 
                            </div>
                        )}
                    </div>
                    
					
				</div>
			
			</div>
		)
    }
}

export default Operacional;