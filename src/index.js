import React from 'react';
import { useState } from 'react';
import ReactDOM from 'react-dom';
import  mexp  from 'math-expression-evaluator';


function InputField(props){

  return <div className="valueField">

    <input type="text" value={props.data} readOnly={true} />

  </div>

}

function Button(props){

  return <div className="buttons">

      <button className="clear" onClick={e => props.handleClick(e.target.innerHTML)}>C</button>
      <button onClick={e => props.handleClick(e.target.innerHTML)}>/</button>
      <button onClick={e => props.handleClick(e.target.innerHTML)}>*</button>
      <button onClick={e => props.handleClick(e.target.innerHTML)}>7</button>
      <button onClick={e => props.handleClick(e.target.innerHTML)}>8</button>
      <button onClick={e => props.handleClick(e.target.innerHTML)}>9</button>
      <button onClick={e => props.handleClick(e.target.innerHTML)}>-</button>
      <button onClick={e => props.handleClick(e.target.innerHTML)}>4</button>
      <button onClick={e => props.handleClick(e.target.innerHTML)}>5</button>
      <button onClick={e => props.handleClick(e.target.innerHTML)}>6</button>
      <button className="plus" onClick={e => props.handleClick(e.target.innerHTML)}>+</button>
      <button onClick={e => props.handleClick(e.target.innerHTML)}>3</button>
      <button onClick={e => props.handleClick(e.target.innerHTML)}>2</button>
      <button onClick={e => props.handleClick(e.target.innerHTML)}>1</button>
      <button onClick={e => props.handleClick(e.target.innerHTML)}>0</button>
      <button onClick={e => props.handleClick(e.target.innerHTML)}>00</button>
      <button onClick={e => props.handleClick(e.target.innerHTML)}>.</button>
      <button className="equal" onClick={e => props.handleClick(e.target.innerHTML)}>=</button>

      

    </div>

}



function Calculator(){

  const [value, setValue] = useState("");

  function changeValue(addition){

    if(addition === "C"){
      return setValue("")
    }

    if(addition === "="){
      return setValue(mexp.eval(value))
    }

    setValue(value + addition)

  }


  return <div className="container">

    <InputField data={value} />
    <Button handleClick={changeValue} />

  </div>


}

const el = <Calculator />

ReactDOM.render(el, document.getElementById('root'));
