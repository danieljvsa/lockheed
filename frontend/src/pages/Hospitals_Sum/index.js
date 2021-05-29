import React, {useEffect, useState} from 'react';
import { Link, Redirect, useHistory } from 'react-router-dom';

import api from '../../services/api';
import './styles.css'




  

export default function Companies() {
    const history = useHistory()
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
      const [hospitals, setHostpitals] = useState([]);
      

      
    
    
    

    
    useEffect(() => {
        api.get('search-top-10-hospitals' + selectedOption.value).then(res => {
            setHostpitals(res.data)
        })
        
    })

    //const history = useHistory()

    return (
        <div className="profile-container">
        <div className="header">
            <Link to="/" className="button">Home</Link>
        </div>
        <form align="center">
            <label align="center" >
                <h3>Pesquisa:</h3>
            </label>
            <div className="select">
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
        <h1> Hospitais ({selectedOption.title} - Mais Investidos)</h1>
        <ul>
            {hospitals.map(hospitals => (
            <li>
                <strong>Nome da Hospital:</strong>
                <p>{hospitals.hospital}</p>  

                <strong>Valor dos Contratos (Total):</strong>
                <p>{Intl.NumberFormat('pt-PT', { style: 'currency', currency: 'EUR'}).format(hospitals.sum)}</p>
                <button type="button" onClick={() => (history.push('/hospitals/' + (hospitals.hospital).match(/\((.*)\)/).pop()))}>Detalhes</button>
            </li>
            ))}
        </ul>
      </div> 
    )
}