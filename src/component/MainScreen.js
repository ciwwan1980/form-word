import React,{useEffect,useState} from 'react'
import "./mainScreen.css"
export default function MainScreen(props) {

   
const [index,setIndex]= useState(0)

useEffect(()=>{
    let interval;

    interval = setInterval(() => {
        if(index<3){
             setIndex(index+1)
             console.log("interval runni ng")
        }else{
            setIndex(0)
            console.log("clear interval")
        }
       
    }, 2000);

    return ()=>{
        clearInterval(interval)
    }
},[index])
    return (
        <div className="display">
            <h1 >I am a <span>{props.words[index]}</span></h1>
        </div>
    )
}
