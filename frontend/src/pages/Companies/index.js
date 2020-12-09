import React, {useEffect, useState, useRef} from 'react';
import {FiPower, FiTrash2} from 'react-icons/fi';
import { useField } from '@unform/core';
import { Link, useHistory, Redirect } from 'react-router-dom';

import api from '../../services/api';
import './styles.css'

import logoImg from '../../assets/logo.svg';


  

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
    
      const optionsRoutes = [
        {
          value: "",
          title: "Home",
        },
        {
          value: "companies",
          title: "Número de Contratos com empresas",
        },
        {
          value: "companies-top10",
          title: "TOP 10 - Empresas"
        },
        {
            value: "hospitals-top10",
            title: "TOP 10 - Hospitais (Mais Investidos)"
        },
        {
            value: "hospitals-top10-minus",
            title: "TOP 10 - Hospitais (Menos Investidos)"
        }
      ];
    const [selectedOptionRoutes, setSelectedOptionRoutes] = useState(optionsRoutes[1]);

    
    
    

    
    useEffect(() => {
        api.get('contract-number' + selectedOption.value).then(res => {
            setContract_number(res.data)
        })
    })

    //const history = useHistory()

    return (
        <div className="profile-container">
        <header>
          <img src={logoImg} alt="logo"/>
          <form >
                
                <select
                    className="button"
                    value={selectedOptionRoutes.title}
                    onChange={(e) =>
                    setSelectedOptionRoutes(
                        optionsRoutes.find(option => (option.value === e.target.value))
                    )
                    }
                >
                    {optionsRoutes.map((option) => (
                    <option key={option.value} value={option.value}>
                        {option.title}
                    </option>
                    ))}
                </select>
        </form>  
        <Redirect to={selectedOptionRoutes.value} />
        </header>
        
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
        <h1>Empresas ({selectedOption.title})</h1>
        <ul>
            {contract_number.map(contract_number => (
            <li>
                <strong>Nome da Empresa:</strong>
                <p>{contract_number.empresa}</p>  

                <strong>Número de Contratos:</strong>
                <p>{contract_number.count}</p>
                
            </li>
            ))}
        </ul>
      </div> 
    )
}