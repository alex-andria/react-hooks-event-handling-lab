// Code Keypad Component Here
import React from "react";

function Keypad(){
    function handleSubmit(event){
        event.preventDefault();
        console.log("I submit")
    }

    function handleChange(event){
        // console.log(`${event.target.name}: ${event.target.value}`);
        console.log('Entering password...');
    }
  
    return(
    <div>
        <form onSubmit={handleSubmit}>
            <input 
            type="password" 
            name="password" 
            onChange={handleChange}
            placeholder="Enterting password..." 
            />
            <button>Submit</button>
        </form>
    </div> 
    );  
}

export default Keypad;
