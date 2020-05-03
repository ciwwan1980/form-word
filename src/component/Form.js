import React,{useState} from 'react';
import MainScreen from "./MainScreen"

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
                console.log(words, "words..........")
                console.log(word, "word..........")
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

        if(words.length<3){
        setMessage("please add atleast 3 words")
        setTimeout(() => {
            setMessage("")
        }, 2000);
        }else{
            setFull(true)
        }
 
    
    }
return (
            <div>
            

<article>
    <h1>Generate Password</h1>
    {
        full? <MainScreen words={words}/>:<form onSubmit={handleSubmit} className="flex">
 
        <div className="container">
  
        <div>
        <label>Add word </label>
        </div>
        <div className="input">
        
        <input name="message" value={word} onChange={(e)=>setWord(e.target.value)} />
       
        </div>

       <div className="button">   
       <p>{message}</p>
        <button  onClick={showMessage} >Shwo me the Message</button>
        <button onClick={addWord} >Add new word</button>
        </div>
  </div>
    </form> 
    }
  
 
</article>
            </div>
        )
    }

export default Form