import React, {useContext, useState} from 'react'

import Deposit from './Deposit'
import Withdraw from './Withdraw'

import {  BrowserRouter as Router, Route, Switch, Link, useParams } from 'react-router-dom'
import { useAccountContext } from '../hooks'

 const Accounts = () => {
    const {AccountContext} = useAccountContext();
    const context = useContext(AccountContext)

    const [showModal, setShowModal] = useState(false)
    const [showWithdraw, setShowWithdraw] = useState(false)

    return (
        <>
            <div className="account-header">    
                <h3>ACCOUNTS</h3>
            </div>

            <table className="table table-dark tbl">
            
                <thead>
                <tr>
                <th scope="col"></th>
                <th scope="col">TYPE</th>
                <th scope="col">ID</th>
                <th scope="col">BALANCE</th>
                <th scope="col">ACTIONS</th>
                </tr>
            </thead>
            
                <tbody> 
               {context.getAccounts().map( ({type, id, balance}) =>{

                     <tr key = {id}>
                            <th scope="row"><button type="button" className="btn btn-sm btn-primary">VIEW</button></th>
                            <td>{type}</td>
                            <td>{id}</td>
                            <td>R{balance}.00</td>
                            <td>
                                <Link to = {`/wit/${id}/${type}`} type="button" onClick = {() => setShowWithdraw(true)} className="btn btn-sm btn-danger">WITHDRAW</Link>{' '}
                                <Link to = {`/dep/${id}/${type}`} type="button" onClick = {()=> setShowModal(true)} className="btn btn-sm btn-success ">DEPOSIT</Link>
                            </td>
                        </tr> 
               })}
                   
                    
                
                    
            
                </tbody> 
            </table>
            
        { showModal && <Deposit    />}
        { showWithdraw && <Withdraw  />}
            
            
        </>
    )
}
export default Accounts
