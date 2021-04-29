import { useState } from 'react'
import {  BrowserRouter as Router, Route, Switch, Link, useParams } from 'react-router-dom'


import Nav from './components/Nav'
import Deposit from './components/Deposit'
import Withdraw from './components/Withdraw'
import { useAccountContext } from './hooks'
import Accounts from './components/Accounts'




function App() {
  
  const {AccountContext, withDraw, deposit, getTransactions, getAccounts} = useAccountContext();

  

  
  return (
    <AccountContext.Provider value={withDraw, deposit,getTransactions,getAccounts}>
    <Router>
      <div className="App">

        <Nav />
        <Switch>
        
          <Route exact path = "/">
            <Accounts  />
          </Route>

          <Route  path = "/dep/:id/:type">
            <Deposit />
          </Route>   

          <Route path = "/wit/:id/:type">
            <Withdraw />
          </Route> 
            
          <Route >
            <p>hi</p>
          </Route>  
      
        </Switch> 
  
    
      </div>
    </Router>
    </AccountContext.Provider>
  )}

export default App;
