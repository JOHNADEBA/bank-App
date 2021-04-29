import { Link, useParams } from 'react-router-dom'
import { FaTimes } from 'react-icons/fa';
import {data} from '../data'

const Deposit = ({currentUpdateBalance, setCurrentUpdateBalance, setMessage, setShowModal, saveUpdateBalance, setSaveUpdateBalance, amount, setAmount}) => {
   
    const { id, type } = useParams();
console.log(id, type);
    const getData = (idx, type) =>{ 

        const realData = data.filter(itm => itm.id === idx && itm.type === type)
        return realData         
           
    }
        

    const deposit = () =>{
        const singleData = getData(id, type)
        console.log(singleData);
        let total
        if(singleData){
            if(singleData.type === 'Savings'){
                total = parseFloat(amount) + saveUpdateBalance
                setSaveUpdateBalance(total) 
                setMessage(`${saveUpdateBalance}, ${amount}, ${new Date().toLocaleString()}`)
                          
            }
            else {
                total = parseFloat(amount) + currentUpdateBalance
                setCurrentUpdateBalance(total)
                setMessage(`${currentUpdateBalance}, ${amount}, ${new Date().toLocaleString()}`)
                
            }  
            setShowModal(false)       
        }
        
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
                      <Link className = "lnk" to = '/'> <FaTimes  onClick = {() => setShowModal(false)}/> </Link>
                    </div>

                </header>
                {/* <form onSubmit={handleSubmit}> */}
                    <div className = 'amt'>
                        <input type="number" min= "1" name="amount"  placeholder = 'eg 1,000,000' 
                         value={amount} onChange={(e)=>setAmount(e.target.value)}
                         />
                    
                    </div>
                    <button onClick = {()=> deposit()} className="btn btn-sm btn-success dep_btn">DEPOSIT</button>
                {/* </form> */}
            </div>
        </div>
    )
}
export  default Deposit