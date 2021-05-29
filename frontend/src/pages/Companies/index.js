import React, {useEffect, useState} from 'react';
import { Link, Redirect, useParams } from 'react-router-dom';

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
      const [contract, setContract] = useState([]);
    
    let id = useParams();
    
    async function handleIncident(id){
        console.log(id.id)
        const data = {
            company: id.id
        }
        api.post('/contracts/company/', data).then(res => {
            setContract(res.data)
        })
    }
    

    
    useEffect(() => {
        handleIncident(id)
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
        <h1>Empresa </h1>
        <ul>
        {contract.map(contract => (
            <li>
                <strong>Data de Publicação:</strong>
                <p>{contract.dataPub}</p>  

                <strong>Tipo de Procedimento:</strong>
                <p>{contract.tipoProc}</p>

                <strong>Descrição:</strong>
                <p>{contract.descr}</p>

                <strong>Objeto do Contrato:</strong>
                <p>{contract.obj}</p>
                
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