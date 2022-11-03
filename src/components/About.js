import React from 'react';
import Art1 from '../img/art1.png';
import Art2 from '../img/art2.png';
import Art3 from '../img/art4.png';
import Art4 from '../img/art5.png';
import Art6 from '../img/art7.png';
import Art9 from '../img/Art9.jpg';

export const About = () => {
    return (
        <div className='about-page' id="about">
            
            <div className='tools'>
                <h2 className='about-heading'>My Skills and Software</h2>
                <p>I can build web sites and apps from concept, layout and interactive elements to backend/server-side and databases.</p>

                <div className='tool-imgs'>
                    <div>
                        <h6>Languages</h6>
                        <div>
                            <p>HTML</p>
                            <p>CSS</p>
                            <p>Typescript</p>
                            <p>JavaScript</p>
                        </div>
                    </div>
                    <div>
                        <h6>Frontend libraries & frameworks</h6>
                        <div>
                        <p>Bootstrap</p>
                        <p>Jquery</p>
                        <p>Angular</p>
                        <p>Angular Material</p>
                        <p>React</p>
                        <p>React Redux</p>
                        </div>
                                
                    </div>
                    <div>
                        <h6>Backend and other libraries</h6>
                        <div>
                        <p>Node JS</p>
                        <p>CORS</p>
                        <p>Axios</p>
                        <p>Parcel</p>
                        <p>serverless</p>
                        <p>propTypes</p>
                        <p>Recharts</p>
                        </div>
                    </div>
                    <div>
                        <h6>Testing & QA</h6>
                        <div>
                            <p>Postman</p>
                            <p>Jest</p>
                            <p>Enzyme</p>
                            <p>Cucumber</p>
                            <p>Puppeteer</p>
                        </div>
                    </div>
                    <div>
                        <h6>Documentation</h6>
                        <div>
                            <p>JSDoc</p>
                            <p>TypeDoc</p>
                        </div>
                    </div>
                    <div>
                        <h6>Web services & databases</h6>
                        <div>
                            <p>GitHub</p>
                            <p>AWS</p>
                            <p>MongoDb</p>
                            <p>postgreSQL</p>
                            <p>Goggle Firestore</p>
                            <p>Heroku</p>
                            <p>Netlify</p>
                        </div>
                    </div>
                    <div>
                        <h6>Mobile Apps</h6>
                        <div>
                            <p>PWA</p>
                            <p>React Native</p>
                            <p>Android Studio</p>
                            <p>Expo</p>
                        </div>
                    </div>
                </div>
            </div>
            <h2 className='about-heading'>Who I am</h2>
            <div className='about-explore'>

            </div>

            <div className="about-art">
                <div className='about-colordes'>
                    <img src={Art9} width="30%" alt="art"></img>
                    <div>

<p><span className="color">Capture the moment….</span>  That's what I'm really passionate about. Real moments and scenes captured in a natural and spontaneous way.</p>
<p> Here is my favorit quote : “Look deep into nature, and then you will understand everything better.” </p>
<p>I like to travel to experience the country’s culture, people, food and history.Travel takes us out of our comfort zones and inspires us to see, taste and try new things. It constantly challenges us, not only to adapt to and explore new surroundings, but also to engage with different people, to embrace adventures as they come and to share new and meaningful experiences with friends and loved ones. </p>
<p>Here are some of my Photos:</p>
</div>

                </div>
                <div className="about-imgs">
                    <div className='column'>
                        <img className='item1' src={Art1} alt="abstract"></img>
                        <img className='item2' src={Art2}  alt="landscape" width="100%"></img>
                    </div>
                    <div className='column'>
                        <img className='item4' src={Art4}  alt="ganesh" width="100%"></img>
                    </div>
                    <div className='column'>
                        <img className='item3' src={Art3}  alt="landscape" width="100%"></img>
                        <img className='item6' src={Art6}  alt="landscape" width="100%"></img>
                    </div>
                </div>

            </div>

            <div className="about-background">
                <h3>My Background</h3>
                <p>I’m a full-stack web developer with a background in Architecture. I worked several years as designer in different offices.</p>
                <p>
                </p>
            </div>

            <div className="about-developer">
                <h3>Turning into a web developer</h3>
                <p>I studied landscape architecture at university and spent the early years of my career planning and designing outdoor spaces. After working at different landscape architecture firms in Germany, I realized that something was still missing.
I was keen to move from the outdoor landscape to the digital world, and I knew that this would require a different skillset. Therefore, I decided to take another path and start a Full stack Web developer course in Careerfoundry.
It will still take work to learn the basics and you will never stop learning the more advanced stuff, because it is always evolving and changing.

I am really looking forward to this new challenge



                </p>
            </div>

            <p className="goals">Starting as a junior developer, I want to start with an employer where there are more chances
                for learning
                and creating things. I value respect, hard work, personal growth, financial independence, and a comfortable
                income, and therefore reflect these attributes in my work and abilities. </p>
            <div className='about-contact'><a target="_blank"  rel="noopener noreferrer"  href="#contact"> Get in touch</a></div>



        </div>

    )
}