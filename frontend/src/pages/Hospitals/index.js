import React, {useEffect, useState} from 'react';
import { Link, Redirect, useParams } from 'react-router-dom';

import api from '../../services/api';
import './styles.css'




  

export default function Companies() {
   
      const [contract, setContract] = useState([]);
    
    let id = useParams();
    
    async function handleIncident(id){
        console.log(id.id)
        const data = {
            hospital: id.id
        }
        api.post('/contracts/hospital/', data).then(res => {
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
        
        
        
        <h1>Hospital </h1>
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