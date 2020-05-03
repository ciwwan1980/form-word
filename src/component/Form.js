import React,{useState} from 'react';

function Form () {
const [message,setMessage]=useState("")
const [words,setWords]=useState([])
const [word,setWord]=useState("")
const [full,setFull]=useState(false)


 const handleSubmit=(event)=>{
    event.preventDefault();
      
    }
    
     const  addWord=()=>{

        if(words.length<3){
               setWords([...words,word])
             setWord("")
        }
        if(words.length===2){
            setMessage("now you may click on show me messsage")
          
            setTimeout(() => {
                setMessage("")
            }, 3000);
            setWord("")
        }
    
    }

    const showMessage=()=>{


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
        
        <input name="message" value="hello there" onChange={(e)=>setWord(e.target.value)} />
       
        </div>

       <div className="button">   
       <p>{message}</p>
        <button  onClick={showMessage} >Shwo me the Message</button>
        <button onClick={addWord} >Add new word</button>
        </div>
  </div>
    </form> 
 
</article>
            </div>
        )
    }

export default Form