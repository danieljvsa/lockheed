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
      const [hospitals, setHostpitals] = useState([]);
      const optionsRoutes = [
        {
          value: "/",
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
    const [selectedOptionRoutes, setSelectedOptionRoutes] = useState(optionsRoutes[4]);

    
    
    
    

    
    useEffect(() => {
        api.get('search-top-10-minus-hospitals' + selectedOption.value).then(res => {
            setHostpitals(res.data)
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
        <h1>TOP 10 Hospitais ({selectedOption.title} - Menos Investidos)</h1>
        <ul>
            {hospitals.map(hospitals => (
            <li>
                <strong>Nome da Hospital:</strong>
                <p>{hospitals.hospital}</p>  

                <strong>Valor dos Contratos (Total):</strong>
                <p>{Intl.NumberFormat('pt-PT', { style: 'currency', currency: 'EUR'}).format(hospitals.sum)}</p>
                
            </li>
            ))}
        </ul>
      </div> 
    )
}