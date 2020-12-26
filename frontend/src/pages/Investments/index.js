import React, {useEffect, useState} from 'react';
import { Link, Redirect, useHistory } from 'react-router-dom';

import api from '../../services/api';
import './styles.css'



export default function Profile() {
    const [contracts, setContracts] = useState([])
    const [obj, setObj] = useState('');
    const history = useHistory()
    
    if(contracts === undefined || contracts === '' || contracts === null){
        alert('Não existem dados entre entre hospital e empresa')
        console.log(contracts)
    }

    

    async function handleSearch(e){
        e.preventDefault()
        try {
        const data = {
            obj: obj,
        }
       
            console.log(data)
            await api.post('', data ).then(res => {
                setContracts(res.data)
            })  
            history.push('/')
        } catch (err) {
            alert('Erro ao conectar')
            
        }
    }
    const optionsRoutes = [
        {
          value: "",
          title: "Empresas",
        },
        {
          value: "companies-contracts",
          title: "Número de Contratos",
        },
        {
          value: "companies-sum",
          title: "Lucros"
        },
      ];
    const [selectedOptionRoutes, setSelectedOptionRoutes] = useState(optionsRoutes[0]);
    const optionsRoutes1 = [
        {
          value: "",
          title: "Hospitais",
        },
        {
          value: "hospitals-contracts",
          title: "Número de Contratos",
        },
        {
          value: "hospitals-sum",
          title: "Lucros"
        },
      ];
    const [selectedOptionRoutes1, setSelectedOptionRoutes1] = useState(optionsRoutes1[0]);

    useEffect(() => {
        
        
    })
      
    
    return (
        <div className="profile-container">
        <header >
        <form >
            
                <select
                    className="button p"
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
                <select
                    className="button l"
                    value={selectedOptionRoutes1.title}
                    onChange={(e) =>
                    setSelectedOptionRoutes1(
                        optionsRoutes1.find(option => (option.value === e.target.value))
                    )
                    }
                >
                    {optionsRoutes1.map((option) => (
                    <option key={option.value} value={option.value}>
                        {option.title}
                    </option>
                    ))}
                </select>
                <Link to="/suspect-contracts" className="button n">Contratos Suspeitos</Link>
        </form>  
        
        <Redirect to={selectedOptionRoutes.value} />
        <Redirect to={selectedOptionRoutes1.value} />
        </header>
        <form onSubmit={handleSearch}>
            <input placeholder="Pesquise pelo objeto do contrato" value={obj} onChange={e => setObj(e.target.value)} ></input>
            <button className="button" type="submit">Pesquisar</button>
        </form>
        <h1>Resultado da Pesquisa</h1>
        <ul>
            {contracts.map(contract => (
            <li>
                <strong>Data de Publicação:</strong>
                <p>{contract.dataPub}</p>  

                <strong>Descrição:</strong>
                <p>{contract.descr == '-' || contract.descr == 'Ajuste Directo n.º 04/10000153/2010' ? contract.obj: contract.descr}</p>
                
                <strong>Hospital:</strong>
                <p>{contract.adjudicante}</p> 

                <strong>Empresa:</strong>
                <p>{contract.adjudicatario}</p>

                <strong>Valor Contratado:</strong>
                
                <p>{Intl.NumberFormat('pt-PT', { style: 'currency', currency: 'EUR'}).format(contract.pContr)}</p>
            </li>
            ))}
        </ul>
      </div> 
    )
}