import React, {useEffect, useState} from 'react';
import {FiPower, FiTrash2} from 'react-icons/fi';
import { Link, useHistory, Redirect } from 'react-router-dom';

import api from '../../services/api';
import './styles.css'

import logoImg from '../../assets/logo.svg';

export default function Profile() {
    const [valor, setValor] = useState([])
    const [contract_max, setContract_max] = useState([])
    const [valor_2008, setValor_2008] = useState([])
    const [valor_2009, setValor_2009] = useState([])
    const [valor_2010, setValor_2010] = useState([])
    const [valor_2011, setValor_2011] = useState([])
    const [contract_max_2008, setContract_max_2008] = useState([])
    const [contract_max_2009, setContract_max_2009] = useState([])
    const [contract_max_2010, setContract_max_2010] = useState([])
    const [contract_max_2011, setContract_max_2011] = useState([])
    
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
    const [selectedOptionRoutes, setSelectedOptionRoutes] = useState(optionsRoutes[0]);


    function contracts_sum () {
        api.get('contracts-sum').then(res => {
        setValor(res.data)
        })
    }
    function contracts_max (){
        api.get('contract-max').then(res => {
            setContract_max(res.data)
        })
    }
    function contracts_sum_2008 (){
        api.get('contracts-sum-2008').then(res => {
            setValor_2008(res.data)
        })
    }
    function contracts_sum_2009 (){
        api.get('contracts-sum-2009').then(res => {
            setValor_2009(res.data)
        })
    }
    function contracts_sum_2010 (){
        api.get('contracts-sum-2010').then(res => {
            setValor_2010(res.data)
        })
    }
    function contracts_sum_2011 (){
        api.get('contracts-sum-2011').then(res => {
            setValor_2011(res.data)
        })
    }
    function contracts_max_2008 (){
        api.get('contract-max-2008').then(res => {
            setContract_max_2008(res.data)
        })
    }
    function contracts_max_2009 (){
        api.get('contract-max-2009').then(res => {
            setContract_max_2009(res.data)
        })
    }
    function contracts_max_2010 (){
        api.get('contract-max-2010').then(res => {
            setContract_max_2010(res.data)
        })
    }
    function contracts_max_2011 (){
        api.get('contract-max-2011').then(res => {
            setContract_max_2011(res.data)
        })
    }

    useEffect(() => {
        contracts_sum()
        contracts_max()
        contracts_sum_2008()
        contracts_sum_2009()
        contracts_sum_2010()
        contracts_sum_2011()
        contracts_max_2008()
        contracts_max_2009()
        contracts_max_2010()
        contracts_max_2011()
    })

    const history = useHistory()
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
        <h1>Custo do Investimento nos Hospitais</h1>
        <ul>
            {valor.map(valor => (
            <li>
                <strong>Investimento nos Hospitais (2008 - 2011):</strong>
                <p>{Intl.NumberFormat('pt-PT', { style: 'currency', currency: 'EUR'}).format(valor.valor_gasto_hospitais)}</p>      
            </li>
            
            ))}
            {contract_max.map(contract_max => (
            <li>
                <h3><strong>Contrato mais lucrativo para as Empresas (2008 - 2011):</strong></h3>
                <strong>Data de Publicação:</strong>
                <p>{contract_max.dataPub}</p>  

                <strong>Descrição:</strong>
                <p>{contract_max.descr == '-' || contract_max.descr == 'Ajuste Directo n.º 04/10000153/2010' ? contract_max.obj: contract_max.descr}</p>
                
                <strong>Hospital:</strong>
                <p>{contract_max.adjudicante}</p> 

                <strong>Empresa:</strong>
                <p>{contract_max.adjudicatario}</p>

                <strong>Valor Contratado:</strong>
                
                <p>{Intl.NumberFormat('pt-PT', { style: 'currency', currency: 'EUR'}).format(contract_max.pContr)}</p>
            </li>
            ))}
            {valor_2008.map(valor_2008 => (
            <li>
                <strong>Investimento nos Hospitais (2008):</strong>
                <p>{Intl.NumberFormat('pt-PT', { style: 'currency', currency: 'EUR'}).format(valor_2008.sum_2008)}</p>      
            </li>
            
            ))}
            {contract_max_2008.map(contract_max_2008 => (
            <li>
                <h3><strong>Contrato mais lucrativo para as Empresas (2008):</strong></h3>
                <strong>Data de Publicação:</strong>
                <p>{contract_max_2008.dataPub}</p>  

                <strong>Descrição:</strong>
                <p>{contract_max_2008.descr == '-' || contract_max_2008.descr == 'Ajuste Directo n.º 04/10000153/2010' ? contract_max_2008.obj: contract_max_2008.descr}</p>

                <strong>Hospital:</strong>
                <p>{contract_max_2008.adjudicante}</p> 

                <strong>Empresa:</strong>
                <p>{contract_max_2008.adjudicatario}</p>

                <strong>Valor Contratado:</strong>
                <p>{Intl.NumberFormat('pt-PT', { style: 'currency', currency: 'EUR'}).format(contract_max_2008.pContr)}</p>
            </li>
            ))}
            {valor_2009.map(valor_2009 => (
            <li>
                <strong>Investimento nos Hospitais (2009):</strong>
                <p>{Intl.NumberFormat('pt-PT', { style: 'currency', currency: 'EUR'}).format(valor_2009.sum_2009)}</p>      
            </li>
            
            ))}
            {contract_max_2009.map(contract_max_2009 => (
            <li>
                <h3><strong>Contrato mais lucrativo para as Empresas (2009):</strong></h3>
                <strong>Data de Publicação:</strong>
                <p>{contract_max_2009.dataPub}</p>  

                <strong>Descrição:</strong>
                <p>{contract_max_2009.descr == '-' || contract_max_2009.descr == 'Ajuste Directo n.º 04/10000153/2010' ? contract_max_2009.obj: contract_max_2009.descr}</p>

                <strong>Hospital:</strong>
                <p>{contract_max_2009.adjudicante}</p> 

                <strong>Empresa:</strong>
                <p>{contract_max_2009.adjudicatario}</p>

                <strong>Valor Contratado:</strong>
                <p>{Intl.NumberFormat('pt-PT', { style: 'currency', currency: 'EUR'}).format(contract_max_2009.pContr)}</p>
            </li>
            ))}
            {valor_2010.map(valor_2010 => (
            <li>
                <strong>Investimento nos Hospitais (2010):</strong>
                <p>{Intl.NumberFormat('pt-PT', { style: 'currency', currency: 'EUR'}).format(valor_2010.sum_2010)}</p>      
            </li>
            
            ))}
            {contract_max_2010.map(contract_max_2010 => (
            <li>
                <h3><strong>Contrato mais lucrativo para as Empresas (2010):</strong></h3>
                <strong>Data de Publicação:</strong>
                <p>{contract_max_2010.dataPub}</p>  

                <strong>Descrição:</strong>
                <p>{contract_max_2010.descr == '-' || contract_max_2010.descr == 'Ajuste Directo n.º 04/10000153/2010' ? contract_max_2010.obj: contract_max_2010.descr}</p>

                <strong>Hospital:</strong>
                <p>{contract_max_2010.adjudicante}</p> 

                <strong>Empresa:</strong>
                <p>{contract_max_2010.adjudicatario}</p>

                <strong>Valor Contratado:</strong>
                <p>{Intl.NumberFormat('pt-PT', { style: 'currency', currency: 'EUR'}).format(contract_max_2010.pContr)}</p>
            </li>
            ))}
            {valor_2011.map(valor_2011 => (
            <li>
                <strong>Investimento nos Hospitais (2011):</strong>
                <p>{Intl.NumberFormat('pt-PT', { style: 'currency', currency: 'EUR'}).format(valor_2011.sum_2011)}</p>      
            </li>
            
            ))}
            {contract_max_2011.map(contract_max_2011 => (
            <li>
                <h3><strong>Contrato mais lucrativo para as Empresas (2011):</strong></h3>
                <strong>Data de Publicação:</strong>
                <p>{contract_max_2011.dataPub}</p>  

                <strong>Descrição:</strong>
                <p>{contract_max_2011.descr == '-' || contract_max_2011.descr == 'Ajuste Directo n.º 04/10000153/2010' ? contract_max_2011.obj: contract_max_2011.descr}</p>

                <strong>Hospital:</strong>
                <p>{contract_max_2011.adjudicante}</p> 

                <strong>Empresa:</strong>
                <p>{contract_max_2011.adjudicatario}</p>

                <strong>Valor Contratado:</strong>
                <p>{Intl.NumberFormat('pt-PT', { style: 'currency', currency: 'EUR'}).format(contract_max_2011.pContr)}</p>
            </li>
            ))}
        </ul>
      </div> 
    )
}