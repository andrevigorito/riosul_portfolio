import React, {Component} from 'react'

// Components
import Filter from './Filter';

//images
import iconTitle from '../../img/icons/title-gerencial.png'

class PageHeader extends Component {

    state = {
        active: false
    }

    btnFilter = () => {
		let filter = document.querySelector('.filter-box')
        filter.classList.toggle("active")
        let btn = document.querySelector('.btn-filter-nfs')
        btn.classList.toggle("active")
	}
    render(){
        return(
        <div className="center">
            <div className="page-header">
                <h1>
                    <img src={iconTitle} alt="" />
                    Gerencial
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

            <Filter  />
        </div>
        )
    }
}

export default PageHeader;