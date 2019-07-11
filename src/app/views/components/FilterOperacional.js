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
                <form action="" className="formoperacional">
                    <div className="item">
                        <label >Palavra Chave:</label>
                        <input type="text" id="idproduto" />
                    </div>
                    
                    <div className="item">
                        <label >Produto:</label>
                        <input type="text" id="idproduto" />
                    </div>
                    <div className="item">
                        <label >ATA:</label>
                        
                        <DatePicker 
                            locale="pt-BR" 
                            selected={this.state.date} 
                            selectsStart
                            startDate={this.state.startDate} 
                            onChange={this.handleChangeDate} 
                            dateFormat="d MMMM , yyyy " 
                        />
                    </div>
                    <div className="item">
                        <label >GR Programado:</label>
                        
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
                        <label >GR Efeitvo:</label>
                       
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