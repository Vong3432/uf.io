import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import WidgetPage from '../../components/widget/Widget'

// https://stackoverflow.com/a/56394170/10868150

const ComponentDetail = () => {

    const router = useRouter()
    const [isLoading, setIsLoading] = useState(true)
    const { pid } = router.query;      

    useEffect(() => {
        if(pid) {                   
            setIsLoading(false)            
        }
    }, [pid])

    return (
        <div className="">
            {isLoading ? 'Loading' : <>
                <WidgetPage source={pid} />
            </>}            
        </div>
    )
}

export default ComponentDetail
