import React from 'react'
import {MdOutlineLibraryBooks} from 'react-icons/md'
import Question from './Question'
import {questions} from './data'
const Faq = () => {
    return (
        <section id="faq">
            <div className='container faq'>
            <div className='u-title'>
                    <MdOutlineLibraryBooks color="orangered" size={30} />
                    <h2>FAQS</h2>
                    <p className='u-text-small u-text-dark'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium dicta aliquam perspiciatis omnis at temporibus consequatur! Repudiandae, quaerat sapiente! Doloremque voluptatum hic in amet voluptatem ab quibusdam tenetur molestiae architecto.
                    </p>  
            </div>
            <div className='questions'>
                {questions.map((question)=>(

                        <Question
                        key={question.id}
                        title={question.title}
                        answer={question.answer}/>
                ))}
             </div> 
            </div>
        </section>
    )
}

export default Faq
