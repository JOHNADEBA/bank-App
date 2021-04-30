import React, {useContext, useState} from 'react'
import { WITHDRAWAL, DEPOSIT } from '../utils/const'
import AmountDialogue from './AmountDialogue'
import TransactionView from './TransactionView'


import { AccountContext } from '../context'


 const Accounts = () => {
    const context = useContext(AccountContext)

   
    const [showModal, setShowModal] = useState(false)
    const [showView, setShowView] = useState(false)
    
    const [transactionAction, setTransactionAction] = useState({})

    const showDialogue = (id,type,action) => {
          
         setTransactionAction(
             {
                 id,
                 type,
                 action

             }
         );

         setShowModal(true);

    }

     const showTransaction = (id) => {
          
        setTransactionAction({id});
        setShowView(true);

    }


    return (
        <div className='container'>
            <div className="account-header">    
                <h3>ACCOUNTS</h3>
            </div>

            <table className="table table-sm table-dark tbl ">
            
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
                    {context.getAccounts().map( ({type, id, balance}) =>          
                        <tr key = {id}>
                            <th scope="row"><button onClick = {() => showTransaction(id)} type="button" className="btn btn-sm btn-primary">VIEW</button></th>
                            <td>{type}</td>
                            <td>{id}</td>
                            <td>R {balance}.00</td>
                            <td>
                                <button onClick = {() => showDialogue(id,type,WITHDRAWAL)} className="btn btn-sm btn-danger">WITHDRAW</button>{' '}
                                <button onClick = {() => showDialogue(id,type,DEPOSIT)} className="btn btn-sm btn-success">DEPOSIT</button>  
                            </td>
                        </tr> 
                    )}
                    
                </tbody> 
            </table>
            
            {showModal &&  <AmountDialogue  setShow={setShowModal}  details={transactionAction} />}
            {showView &&  <TransactionView  setShow={setShowView}  details={transactionAction} />} 
           
            
        </div>


    )
}
export default Accounts