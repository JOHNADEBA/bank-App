import { useState } from 'react'

import { AccountContext} from './context'
import { data } from './data'
import { DEPOSIT,WITHDRAWAL,CURRENT } from './utils/const'

import Nav from './components/Nav'
import Accounts from './components/Accounts'



function App() {
  
 
  const [accounts, setAccounts] = useState(data);
  const [transaction, setTransaction] = useState([]);


  const  withDraw  = (id, type,amount) =>{
  
    const account =  accounts.find(x => x.id === id && x.type === type);
      if(account){
          
        const balance =  account.balance - amount;

        switch (type){
          case CURRENT:
            if(balance < -100000){
                alert ("You must have used up your overdraft limit of 100,000");
                return;
            }
            break;
            default:
              if(balance < 1000){
              alert ("You must have a minimum balance of 1000");
              return;
            }        
          break
        }       
        
        setStateData(account, amount, WITHDRAWAL );  
        account.balance = parseFloat(account.balance) - parseFloat(amount);
        alert(`You successfully withdrew R${amount}.00` )

    }

  } 

  const  deposit  = (id, type, amount) =>{ 

    const account =  accounts.find(x => x.id === id && x.type === type);
      if(account){                        
        if(amount > 0){
          account.balance = parseFloat(account.balance) + parseFloat(amount);
          setStateData(account, amount, DEPOSIT );
          alert(`R${amount}.00 was successfully deposited` )
        }
      }
  }
  
  const getTransactions = (id) =>{

    // return accounts.find(x=> x.id === account.id );
    const accountDetails = accounts.find(acct => acct.id) 
    if(accountDetails) {
      return transaction
    }
        
  }


  const setStateData = (account, amount, transactionType) =>{

    const date = new Date().toLocaleString();
    const currentAccounts =[...accounts];
    const index= currentAccounts.findIndex(x => x.id === account.id);
    currentAccounts[index] = account;
    setAccounts(currentAccounts);  
    setTransaction([...transaction,{accountId:account.id, balance: account.balance, transactionType, amount, date}])

  }

  const getAccounts = () =>(accounts);
  
  
  return (
   
    
    <AccountContext.Provider  value={{withDraw, deposit, getTransactions, getAccounts}}>
      <div className="App">

        <Nav />          
        <Accounts  />        
  
      </div>
    </AccountContext.Provider>
      
   
 
  )}

export default App;