function Form(props){
  let  onClickButton =(e)=> e.preventDefault();
    return(
        <form className="form">
         <input placeholder="Enter Name" />
          <button  onClick={onClickButton} >Submit</button>
        </form>
    )
}


export default Form;