import React, {useEffect, useState} from 'react';
import { Link, Redirect, useParams } from 'react-router-dom';

import api from '../../services/api';
import './styles.css'




  

export default function Companies() {
    const options = [
        {
            value: "",
            title: "Categorias de contratos",
            fund: ""
        },
        {
          value: "-public_works_contracts",
          title: "Empreitadas de obras públicas",
          fund: "Artigo 19.º, alínea d) do Código dos Contratos Públicos"
        },
        {
          value: "-acquisition_of_real_state",
          title: "Aquisição de bens imóveis",
          fund: "Artigo 20.º, n.º 1, alínea d) do Código dos Contratos Públicos"
        },
        {
          value: "-purchasing_services",
          title: "Aquisição de serviços",
          fund: "Artigo 20.º, n.º 1, alínea d) do Código dos Contratos Públicos"
        },
        {
            value: "-other_contracts",
            title: "Outros Contratos",
            fund: "Artigo 21.º, n.º 1, alínea c) do Código dos Contratos Públicos"
        },
        {
            value: "-repeated_contracts",
            title: "Contratos Repetidos",
            fund: ""
        }
      ];
      const [selectedOption, setSelectedOption] = useState(options[0]);
      const [contract, setContract] = useState([]);
      
    
    
    
    async function suspect_contracts(){
        api.get('suspect-contracts' + selectedOption.value).then(res => {
            setContract(res.data)
        })
    }

    
    
    useEffect(() => {
        suspect_contracts()

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
        <br/>
        <br/>
        <br/>
        

        <h4 align="center">{selectedOption.fund == "" ? "": "Fundamento: " + selectedOption.fund}</h4>
        
        <h1>Contratos Suspeitos ({selectedOption.title})</h1>
        <ul>
        {contract.map(contract => (
            <li>
                <strong>Data de Publicação:</strong>
                <p>{contract.dataPub}</p>  

                <strong>Tipo de Contrato:</strong>
                <p>{contract.tipoCont}</p>

                <strong>Tipo de Procedimento:</strong>
                <p>{contract.tipoProc}</p>

                <strong>Descrição:</strong>
                <p>{contract.descr}</p>

                <strong>Objeto do Contrato:</strong>
                <p>{contract.obj}</p>
                
                <strong>Fundamento:</strong>
                <p>{contract.fund}</p>

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