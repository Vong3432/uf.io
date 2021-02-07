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

        setSelectedComponent((prev) => ({
            ...prev,
            general: __general,
            template: template,
            css: componentList[index].style,
            html: componentList[index].html
        }))
    }

    return (
        <>
            <div className="grid">
                <div className="left">
                    {                        
                        componentList.map((item, index) =>                          
                            <ComponentWidget key={index} onSelectComponent={onSelectComponent} source={source} index={index} item={item} />
                        )
                    }
                </div>
                <Code html={selectedComponent.html} css={selectedComponent.css} code={selectedComponent.general} />
            </div>
        </>
    )
}

export default WidgetPage

// Render component
const ComponentWidget = ({ source, item, onSelectComponent, index }) => {

    let __general = require(`../../sources/${source}/${item.name}.js`);
    let template = { __html: __general };

    return (
        <span onClick={() => onSelectComponent(index)} dangerouslySetInnerHTML={template}></span>
    )
}
