import React from 'react' 
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Investments from './pages/Investments'
import Companies_Contracts from './pages/Companies_Contracts'
import Companies_Sum from './pages/Companies_Sum'
import Hospitals_Sum from './pages/Hospitals_Sum'
import Hospitals_Contracts from './pages/Hospitals_Contracts'
import Hospitals from './pages/Hospitals'
import Companies from './pages/Companies'
import SuspectContracts from './pages/Suspect_Contracts'
// eslint-disable-next-line
{/*import Logon from './pages/logon';
import Register from './pages/register';
import Profile from './pages/profile';
import NewIncident from './pages/newIncident';*/}


export default function Routes() {
    return(
        <BrowserRouter>
            <Switch>
                
                <Route path="/" exact component={Investments} />
                <Route path="/companies-contracts" component={Companies_Contracts} />
                <Route path="/companies-sum" component={Companies_Sum} />
                <Route path="/hospitals-sum" component={Hospitals_Sum} />
                <Route path="/hospitals-contracts" component={Hospitals_Contracts} />
                <Route path="/hospitals/:id" component={Hospitals} />
                <Route path="/companies/:id" component={Companies} />
                <Route path="/suspect-contracts" component={SuspectContracts} />
                
               
            </Switch>
        </BrowserRouter>
    )
}