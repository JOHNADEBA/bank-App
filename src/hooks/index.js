import {createContext, useState} from 'react'
import {data} from '../data'
import { CURRENT, SAVINGS, WITHDRAWAL, DEPOSIT } from '../utils/const';




const  useAccountContext = ()=> {
    const [accounts, setAccounts] = useState(data);
    const [message, setMessage] = useState("");
    const [transaction, setTransaction] = useState({});

    const  AccountContext = createContext();

    const  withDraw  = (id, type,amount) =>{
    
        const account =  accounts.find(x => x.id == id && x.type == type);
        if(account){
            
            const balance =  account.balance - amount;

            switch (type){
                case CURRENT:
                if(balance < -100000){
                    setMessage ("You must have used up your overdraft limit of 100,000");
                    return;
                }
                break;
                default:
                    if(balance < 1000  ){
                    setMessage ("You must have a minimum balance of 1000");
                    return;
                }        
                break
            }       

         
            const index = accounts.findIndex(x=> x.id == account.id );
            setStateData(account,`R${amount} was successfully withdrew`,WITHDRAWAL );  
            account.balance =   account.balance - amount;
 
        }

    } 

    const  deposit  = (id, type, amount) =>{ 

        const account =  accounts.find(x => x.id == id && x.type == type);
        if(account){                        
             if(amount > 0){
                account.balance = account.balance + amount;
                setStateData(account,`R${amount} was successfully deposited`,DEPOSIT );
            
            }
        }
    }
    
    const getTransactions = (account) =>{

        const index = accounts.findIndex(x=> x.id == account.id );
        return transaction[index]; 

    }



    const setStateData = (account, amount, message, transactionType) =>{
            const date = new Date().toLocaleString();
            const currentAccounts =[...accounts];
            const index= currentAccounts.findIndex(x => x.id == account.id);
            currentAccounts[index] = account;
            setAccounts(currentAccounts);
            setMessage (message);         
            setTransaction([...transaction,{accountId:account.id, balance: account.balance, transactionType, amount, date}])


    }

    const getAccounts = () =>{

        return accounts;
    }

    
    return   {deposit, withDraw, getTransactions, AccountContext, getAccounts}

    



}

export {useAccountContext}
