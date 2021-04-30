
import { FaTimes } from 'react-icons/fa';
import {WITHDRAWAL} from '../utils/const'
import { useContext, useRef } from 'react';
import { AccountContext } from '../context';

const AmountDialogue = ({ setShow, show, details:{id, type, action} }) => {
   
    const amountEle = useRef();
    const context = useContext(AccountContext);    

    const handleDone = () => {

        if (action === WITHDRAWAL ){
            context.withDraw(id,type, amountEle.current.value)

        }else{
           context.deposit(id,type, amountEle.current.value) 
        }
        setShow(false)
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
                    <FaTimes  onClick = {() => setShow(false)} />
                    </div>

                </header>
                
                <div className = 'amt'>
                    <input type="number" min= "1" name="amount" ref={amountEle}  placeholder = 'eg 1,000,000' />
                </div>

                <button onClick = {()=> handleDone()} className="btn btn-sm btn-success dep_btn">DONE </button>
                
            </div>
        </div>
    )
}
export  default AmountDialogue