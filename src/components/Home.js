import React from 'react';
import { Navigation } from './Navbar';
import { Projects } from './Projects';
import { About } from './About';
// import { Contact } from './Contact';
import { Footer } from './Footer';
import { Profile } from './Profile';

export const Home = () => {
    return (
        <div id="home">
            <Navigation />
            <Profile />
            <Projects />
            <About />
            <Footer />
        </div>
    )
}

