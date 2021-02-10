import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import WidgetPage from '../../components/widget/Widget'
import Head from 'next/head'

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
                <Head>
                    <title>UF.io - {pid.toUpperCase()}</title>
                    <meta name="description" content="Made for developers to explore ux-first components." />
                    {/* <link rel="icon" href="/assets/svg/logo.svg" /> */}

                    <meta property="og:title" content="UF.io - Open-source UX first components for developers" />
                    <meta property="og:description" content="Made for developers to explore ux-first components." />
                    {/* <meta property="og:image" content="https://pixelify.vercel.app/assets/img/meta.png"/> */}
                    {/* <meta property="og:url" content="https://pixelify.vercel.app/"></meta> */}

                    <meta name="twitter:title" content="UF.io - Open-source UX first components for developers" />
                    <meta name="twitter:description" content="Made for developers to explore ux-first components." />
                    {/* <meta name="twitter:image" content="https://pixelify.vercel.app/assets/img/meta.png" /> */}
                    {/* <meta name="twitter:card" content="https://pixelify.vercel.app/assets/img/meta.png"></meta> */}
                </Head>
                <WidgetPage source={pid} />
            </>}            
        </div>
    )
}

export default ComponentDetail
