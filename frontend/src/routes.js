import React from 'react' 
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Investments from './pages/Investments'
import Companies from './pages/Companies'
import Contracts from './pages/Contracts'
import Hospitals from './pages/Hospitals'
import Hospitals_Low from './pages/Hospitals_Low'
// eslint-disable-next-line
{/*import Logon from './pages/logon';
import Register from './pages/register';
import Profile from './pages/profile';
import NewIncident from './pages/newIncident';*/}


export default function Routes() {
    return(
        <BrowserRouter>
            <Switch>
                {/*<Route path="/" exact component={Logon} />
                <Route path="/register" component={Register} />*/}
                <Route path="/" exact component={Investments} />
                <Route path="/companies" component={Companies} />
                <Route path="/companies-top10" component={Contracts} />
                <Route path="/hospitals-top10" component={Hospitals} />
                <Route path="/hospitals-top10-minus" component={Hospitals_Low} />
                {/*<Route path="/incidents/new" component={NewIncident} />*/}
            </Switch>
        </BrowserRouter>
    )
}