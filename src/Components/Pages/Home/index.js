import React from 'react'
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

export default function index() {
    return (
        <React.Fragment>
            <Main />
            <About />
            <Services />
            <Experience />
            <Teams />
            <Payments />
            <Projects />
            <Ourclients />
            <News />
            <Newsletter />
        </React.Fragment>
    )
}
