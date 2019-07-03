import React, {Component} from 'react'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { registerLocale } from  "react-datepicker";
import ptBR from 'date-fns/locale/pt-BR';
registerLocale('pt-BR', ptBR)

class Filter extends Component{
    state ={
        startDate: new Date(),
        endDate: new Date()
    }

    handleChangeDate = (date) => {
        this.setState({
          date: date
        });
    }

    handleChangeStart = (date) => {
        this.setState({
          startDate: date
        });
    }
    handleChangeEnd = (date) => {
        this.setState({
            endDate: date
        });
    }
    
    render(){
        return(
            
            <div className="filter-box">
                <form action="">
                    <div className="item">
                        <label >Data de alteração:</label>
                        
                        <DatePicker 
                            locale="pt-BR" 
                            selected={this.state.date} 
                            selectsStart
                            onChange={this.handleChangeDate} 
                            dateFormat="d MMMM , yyyy " 
                        />

                    </div>
                    
                    <div className="item">
                        <label >PO:</label>
                        <input type="text" id="idproduto" />
                    </div>
                    <div className="item">
                        <label >GR Inicial:</label>
                        
                        <DatePicker 
                            locale="pt-BR" 
                            selected={this.state.startDate} 
                            selectsStart
                            onChange={this.handleChangeStart} 
                            startDate={this.state.startDate} 
                            endDate={this.state.endDate} 
                            dateFormat="d MMMM , yyyy " 
                        />

                    </div>
                    <div className="item">
                        <label >GT Atual:</label>
                        {/* <input type="text" className="datepicker-here date" data-language="pt-BR" id="data-fim" /> */}
                        <DatePicker 
                            locale="pt-BR" 
                            selected={this.state.endDate} 
                            selectsEnd
                            onChange={this.handleChangeEnd} 
                            startDate={this.state.startDate} 
                            endDate={this.state.endDate} 
                            dateFormat="d MMMM , yyyy " 
                            minDate={this.state.startDate}
                        />
                    </div>
                    
                    <div className="item">
                        <label> &nbsp; </label>
                        <button className="btn">Filtrar</button>
                    </div>
                </form>

            </div>
        )
    }
}

export default Filter;