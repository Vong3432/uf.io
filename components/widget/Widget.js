import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Code from '../main/Code'
import jsonFile from '../../data/data.json'

const WidgetPage = ({ source }) => {

    const [selectedComponent, setSelectedComponent] = useState({
        general: null,
        template: null,
        style: null,
        html: null,
        script: null
    })

    const [activeIndex, setActiveIndex] = useState(null)

    const [componentList, setComponentList] = useState([])

    useEffect(() => {      

        async function fetchComponents() {
            console.log(jsonFile)

            const list = jsonFile.filter((item) => item.source === source);

            console.log(list)

            if(list && list.length > 0)
                setComponentList(list[0].components);

        }

        fetchComponents();
    }, [source])

    const onSelectComponent = (index) => {
        let __general = require(`../../sources/${source}/${componentList[index].name}.js`);
        let template = { __html: __general };

        setActiveIndex(index);

        setSelectedComponent((prev) => ({
            ...prev,
            general: __general,
            template: template,
            css: componentList[index].css,
            html: componentList[index].html,
            js: componentList[index].js,
        }))
    }

    return (
        <>
            <div className="grid">
                <div className="left">
                    {                        
                        componentList.map((item, index) =>                          
                            <ComponentWidget key={index} activeIndex={activeIndex} onSelectComponent={onSelectComponent} source={source} index={index} item={item} />
                        )
                    }
                </div>
                <Code 
                    html={selectedComponent.html} 
                    css={selectedComponent.css} 
                    js={selectedComponent.js} 
                    code={selectedComponent.general} 
                />
            </div>
        </>
    )
}

export default WidgetPage

// Render component
const ComponentWidget = ({ source, item, onSelectComponent, index, activeIndex }) => {

    let __general = require(`../../sources/${source}/${item.name}.js`);
    let template = { __html: __general };

    return (
        <div className="component-container">
            <span onClick={() => onSelectComponent(index)} dangerouslySetInnerHTML={template}></span>
            <p className={`component-tag ${activeIndex === index && 'active'} `}>{item.name}</p>
        </div>
    )
}
