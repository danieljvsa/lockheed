import React, {useEffect, useState} from 'react';
import { Link, Redirect, useHistory } from 'react-router-dom';

import api from '../../services/api';
import './styles.css'




  

export default function Companies() {
    const options = [
        {
          value: "",
          title: "Todos os anos",
        },
        {
          value: "-2008",
          title: "2008",
        },
        {
          value: "-2009",
          title: "2009"
        },
        {
            value: "-2010",
            title: "2010"
        },
        {
            value: "-2011",
            title: "2011"
        }
      ];
      const [selectedOption, setSelectedOption] = useState(options[0]);
      const [contract_number, setContract_number] = useState([]);
    

    
    
    

    
    useEffect(() => {
        api.get('contract-number' + selectedOption.value).then(res => {
            setContract_number(res.data)
        })
    })

    const history = useHistory()

    return (
        <div className="profile-container">
        <div className="header">
            <Link to="/" className="button">Home</Link>
        </div>
        
        
        <form align="center">
            <label align="center" >
                <h3>Pesquisa:</h3>
            </label>
                <div className="select" >
                <select 
                    value={selectedOption.title}
                    onChange={(e) =>
                    setSelectedOption(
                        options.find(option => (option.value === e.target.value))
                    )
                    }
                >
                    {options.map((option) => (
                    <option key={option.value} value={option.value}>
                        {option.title}
                    </option>
                    ))}
                </select>
                </div>
        </form>
        <h1>Número de Contratos - Empresas ({selectedOption.title})</h1>
        <ul>
            {contract_number.map(contract_number => (
            <li>
                <strong>Nome da Empresa:</strong>
                <p>{contract_number.empresa}</p>  

                <strong>Número de Contratos:</strong>
                <p>{contract_number.count}</p>
                <button type="button" onClick={() => (history.push('/companies/' + (contract_number.empresa).match(/\((.*)\)/).pop()))}>Detalhes</button>
            </li>
            ))}
        </ul>
      </div> 
    )
}