import { Link, useParams } from 'react-router-dom'
import { FaTimes } from 'react-icons/fa';
import {data} from '../data'


const Withdraw = ({match, currentUpdateBalance, setCurrentUpdateBalance, setMessage, setShowWithdraw, saveUpdateBalance, setSaveUpdateBalance, amount, setAmount}) => {
   
    let { id, type } = useParams();

    const getData = (idx) =>{ 
        const realData = data.filter(itm => itm.id === idx )
        return realData    
    }
    const singleData = getData(id)    

    const savingsWithdraw = (type) =>{
      let total
      if(singleData){
        if(type === 'Savings'){
           total = saveUpdateBalance - parseFloat(amount)  
          if(total >= 1000){
            setSaveUpdateBalance(total) 
            setMessage(`${saveUpdateBalance}, ${amount}, ${new Date().toLocaleString()}`)             
          }else{
            alert('insufficient funds')
          }
                
        }else if(type === 'Current'){
          total = currentUpdateBalance - parseFloat(amount)
          if(total > -100000){
            setCurrentUpdateBalance(total) 
            setMessage(`${currentUpdateBalance}, ${amount}, ${new Date().toLocaleString()}`)             
          }else{
            alert('insufficient funds')
          }
        }
      }
      setShowWithdraw(false)
    }

    return (
        <div className = 'stylez' >
            <div className = 'cont'>
                <header className = 's-head'>
                    <div className="nav">
                        <header>
                            <h4>AMOUNT</h4>
                        </header>
                    </div>

                    <div>
                       <Link className = "lnk" to = '/'> <FaTimes  onClick = {() => setShowWithdraw(false)}/> </Link>
                    </div>

                </header>
                    <div className = 'amt'>
                        <input type="number" min= "1" name="amount"  placeholder = 'eg 1,000,000' 
                         value={amount} onChange={(e)=>setAmount(e.target.value)}
                         />
                    
                    </div>
                    <button onClick = {()=> savingsWithdraw(id, type)} className="btn btn-sm btn-danger dep_btn">WITHDRAW</button>
              
            </div>
        </div>
    )
}
export  default Withdraw