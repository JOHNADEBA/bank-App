import { useContext } from 'react';
import { AccountContext } from '../context';


const Withdraw = ({setShow, details:{id, type, action}}) => {
   
  const context = useContext(AccountContext); 
 
  return (
                     
  <div  className = 'stylez' >
    
    <div className = 'conts'>
      
      <div className=" header">    
          <h3>TRANSACTION HISTORY</h3>
      </div> 
            
      <table className="table table-sm table-dark tb2">

        <thead>
          <tr>
            <th scope="col">BALANCE</th>
            <th scope="col">TYPE</th>
            <th scope="col">AMOUNT</th>
            <th scope="col">DATE</th>
          </tr>
        </thead>

        <tbody> 
        {/* {context.getTransactions().map( ({amount, date, transactionType, balance}) =>          
              <tr key = {balance}>
                  <td>{transactionType}</td>
                  <td>R{amount}</td>
                  <td>R{date}</td>
                  
              </tr> 
        )} */}

                    
          <tr >
            <td>transactionType</td>
            <td>transactionType</td>
            <td>R {new Intl.NumberFormat('en-IN', { maximumSignificantDigits: 3 }).format(1000)}.00</td>
            <td>Rdate</td>
              
          </tr> 
            
        </tbody> 
      
      </table>
              
      <button onClick = {() => setShow(false)} className="btn btn-danger tra_btn">DONE</button>

    </div>  

  </div>
    )
}
export  default Withdraw