import React,{useState} from 'react'
import"./Question.css"
import {AiOutlinePlus,AiOutlineMinus} from 'react-icons/ai'
const Question = ({title,answer}) => {
    const[showAnswer,setShowAnswer] = useState(false);
    const handelClick =()=>{
        setShowAnswer(!showAnswer)
    }
    return (
        <div className='container question'>
            <div className='question-title'>
                <h4>{title}</h4>
                <button className='question-icon' onClick={handelClick}>
                    {showAnswer ? <AiOutlineMinus color="red"/>:<AiOutlinePlus color="#1f93ff" />}
                </button>
            </div>
            <div className='question-answer'>
                {showAnswer &&(<p className='u-text-dark'>{answer}</p>)}
            
            </div>
        </div>
    )
}

export default Question
