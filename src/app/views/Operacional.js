import React, {Component} from 'react'
import API from '../service/api';

// Images
import iconOperacional from '../img/icons/title-ope.png'

// Components
import Loading from './components/Loading';
import FilterOperacional from './components/FilterOperacional';


class Operacional extends Component {
    state = {
        operacional: [],
        isLoading: false,
    }

    
    
    componentDidMount() {
		this.setState({ isLoading: true })
		API.get(`poItems`)
		  .then(res => {
			const operacional = res.data;
			console.log(operacional)
			this.setState({ 
				operacional,
				isLoading: false
			 });
			
		  })
      }

      btnFilter = () => {
		let filter = document.querySelector('.filter-box')
        filter.classList.toggle("active")
        let btn = document.querySelector('.btn-filter-nfs')
        btn.classList.toggle("active")
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
                        <div className="last-wrap">
                            <div className="btn-filter-nfs" onClick={this.btnFilter} >
                                <div className="icon-filter">
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </div>
                                Filtrar
                            </div>            
                        </div>
                    </div>

                    <FilterOperacional />

                    <div className='list-ope'>
                        <header className="header-list-ope">
                            <p className='critico'>Crit.</p>
                            <p className='po'>PO</p>
                            <p className='produto'>Produto</p>
                            <p className='descricao'>Descrição</p>
                            <p className='qtd'>Qtd.</p>
                            <p className='pd'>P. Destino</p>
                            <p className='ata'>ATA</p>
                            <p className='grp'>GR Prog.</p>
                            <p className='gre'>GR Efet.</p>
                            <p className='status'>Status</p>
                        </header>

                        { this.state.isLoading && <Loading /> }

                        
                        { this.state.operacional.map(ope => 
                            <div className='item' key={ope.uuid}>
                                <span className='critico'></span>
                                <p className='po'>{ope.po.order_reference}</p>
                                <p className='produto'>{ope.po.product.product_id}</p>
                                <p className='descricao'>{ope.po.product.product_description}</p>
                                <p className='qtd'>{ope.qty}</p>
                                <p className='pd'>{ope.plant_id}</p>
                                <p className='ata'>{ope.ata_date ? new Date(ope.ata_date).toLocaleDateString() : "-"}</p>
                                <p className='grp'>{ope.gr_requested_date ? new Date(ope.gr_requested_date).toLocaleDateString() : "-"}</p>
                                <p className='gre'>{ope.gr_actual ? new Date(ope.gr_actual).toLocaleDateString() : "-"}</p>
                                
                                <div className='status alert'><p>{ope.status}</p></div>
                            </div>
                        )}
                    </div>
                    
					
				</div>
			
			</div>
		)
    }
}

export default Operacional;