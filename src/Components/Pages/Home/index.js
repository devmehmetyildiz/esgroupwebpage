import React, { useEffect } from 'react'
import About from "./About"
import Experience from "./Experience"
import Main from "./Main"
import News from "./News"
import Newsletter from "./Newsletter"
import Ourclients from "./Ourclients"
import Payments from "./Payments"
import Projects from "./Projects"
import Services from "./Services"
import Teams from "./Teams"

export default function Index() {

    useEffect(() => {
        window.scrollTo(0, 0)
    },[])

    return (
        <React.Fragment>
            <Main />
            <About />
            <Teams />
            <Services />
        </React.Fragment>
    )
}
