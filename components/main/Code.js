import React, {useState, useEffect} from 'react'
import prettify from 'html-prettify'
import { LightAsync as SyntaxHighlighter} from 'react-syntax-highlighter'
import { atomOneDarkReasonable } from 'react-syntax-highlighter/dist/cjs/styles/hljs';

const Code = ({ code, css, html, js }) => {
    
    const [currentTab, setCurrentTab] = useState("")

    useEffect(() => {

        console.table(SyntaxHighlighter.supportedLanguages);
        
        if(code)
            setCurrentTab("html");

        return () => {
            console.log('cleanup')
        }
    }, [code])    
    

    return (
        <div className="editor-container">  
            {code && <div className="editor-tabs">
                {["html", "css", "javascript"].map((tab) => <button onClick={() => setCurrentTab(tab)} className={`${currentTab === tab ? 'selected' : ''}`}>{tab.toUpperCase()}</button>)}
            </div>}                      
            {/* {code ? <pre className="prettyprint">{currentTab === "html" ? html : currentTab === "css" ? css : currentTab === "javascript" ? js : ''}</pre> : <h3>Click a component to view source code.</h3> }             */}
            {code ? <SyntaxHighlighter style={atomOneDarkReasonable} language={currentTab === "html" ? "htmlbars" : currentTab}>{currentTab === "html" ? html : currentTab === "css" ? css : currentTab === "javascript" ? js : ''}</SyntaxHighlighter> : <h3>Click a component to view source code.</h3> }            
        </div>
    )
}

export default Code
