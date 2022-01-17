import React from 'react'
import './App.css'
import {Header,Navbar,Features,Download,Subscribe,Faq,Footer} from'./component/index'
function App() {
    return (
        <>
            <header className='header-bg'>
                <Navbar />
                <Header />
            </header>  
            <Features />      
            <Download />      
            <Subscribe />      
            <Faq/>  
            <Footer />    
        </>
    )
}

export default App
