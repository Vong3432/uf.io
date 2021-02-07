import React, {useState, useEffect} from 'react'
import prettify from 'html-prettify'

const Code = ({ code, css, html }) => {
    
    const [currentTab, setCurrentTab] = useState("")

    useEffect(() => {
        
        if(code)
            setCurrentTab("HTML");

        return () => {
            console.log('cleanup')
        }
    }, [code])

    return (
        <div className="editor-container">  
            {code && <div className="editor-tabs">
                {["HTML", "CSS", "JS"].map((tab) => <button onClick={() => setCurrentTab(tab)} className={`${currentTab === tab ? 'selected' : ''}`}>{tab}</button>)}
            </div>}                      
            {code ? <pre className="prettyprint">{currentTab === "HTML" ? html : currentTab === "CSS" ? css : currentTab === "JS" ? 'js' : ''}</pre> : <h3>Click a component to view source code.</h3> }            
        </div>
    )
}

export default Code
