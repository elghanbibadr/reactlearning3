 import { useState } from "react";

function SpendingCharts(props){
    let [isOpen,setOpen]=useState(false);
     let handleClick=() => setOpen(current => !current);
  
  return(
   <div className="spendingsChart" >
     <div className={`spending-amountBox ${isOpen ? 'visible':'hidden'}`}>
        <h4 className= 'spending-amount'>{props.amount}</h4>
        </div>
        <div onClick={handleClick}  className= {`${props.height}  spendBox`} ></div>
         <p className="spending-day">{props.day}</p>
   </div>
  )
}


export default SpendingCharts;