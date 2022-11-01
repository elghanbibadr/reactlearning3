// import React from "react";
import {useState} from 'react';

function Form(props){
    let [isBlack,isNotBlack]=useState(false);
    function changeBg(){
        isBlack(true)
    }
  let  onClickButton =(e)=> e.preventDefault();
    return(
        <>
        <form className="form">
         <h2 >{props.form_title}</h2>
         <input placeholder={props.placeholder} />
          <button  onClick={onClickButton} >Submit</button>
        </form>
        

        <button onClick={changebg}>
        change color
        </button>

        </>
    
    )
}


export default Form;