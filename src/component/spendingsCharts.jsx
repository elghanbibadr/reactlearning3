function SpendingCharts(props){
  return(
   <div className="spendingsChart">
     <div className="spending-amountBox">
        <h4 className="spending-amount">{props.amount}</h4>
     </div>
        <div className= {`${props.height} spendBox`} ></div>
         <p className="spending-day">{props.day}</p>
   </div>
  )
}


export default SpendingCharts;