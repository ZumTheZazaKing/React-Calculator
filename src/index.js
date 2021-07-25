import React from 'react';
import { useState } from 'react';
import ReactDOM from 'react-dom';


function InputField(props){

  return <input type="text" value={props.data} />

}

function Button(props){

  return <div>

      <button onClick={}>C</button>
      <button onClick={}>/</button>
      <button onClick={}>*</button>
      <button onClick={}>7</button>
      <button onClick={}>8</button>
      <button onClick={}>9</button>
      <button onClick={}>-</button>
      <button onClick={}>4</button>
      <button onClick={}>5</button>
      <button onClick={}>6</button>
      <button onClick={}>+</button>
      <button onClick={}>3</button>
      <button onClick={}>2</button>
      <button onClick={}>1</button>
      <button onClick={}>0</button>
      <button onClick={}>00</button>
      <button onClick={}>.</button>
      <button onClick={}>=</button>

      

    </div>

}



function Calculator(){

  const [value, setValue] = useState("");

  function changeValue(addition){

    //setValue([...value, addition])

    console.log(addition)

  }


  return <div>

    <InputField data={value} />
    <Button handleClick={changeValue} />

  </div>


}

const el = <Calculator />

ReactDOM.render(el, document.getElementById('root'));
