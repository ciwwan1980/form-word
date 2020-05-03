import React,{useState} from 'react';

function Form () {
const [message,setMessage]=useState("")
const [words,setWords]=useState([])
const [word,setWord]=useState("")
const [full,setFull]=useState(false)


 const handleSubmit=(event)=>{
    event.preventDefault();
      
    }
    
    const addWord=()=>{
    setWords(...words,word)
    // setWord("")
        }

return (
            <div>
            
<article>
    <h1>Generate Password</h1>
    
  <form onSubmit={handleSubmit} className="flex">
 
        <div className="container">
  
        <div>
        <label>Add word </label>
        </div>
        <div className="input">
        <input name="message"  />
        </div>

       <div className="button">   
       <p></p>
        <button  >Shwo me the Message</button>
        <button onClick={addWord} >Add new word</button>
        </div>
  </div>
    </form> 
 
</article>
            </div>
        )
    }

export default Form