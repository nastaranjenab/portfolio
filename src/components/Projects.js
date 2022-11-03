import React from 'react';
import meetupLogin from '../img/meetupLogin.png';
import moviesApp from '../img/movies-app.png';
import Pokedox from '../img/Pokedox.png';
import BackendAPI from '../img/backend-api.png';
import AngularMovies from '../img/Angular-movies.png';
import ChatApp from '../img/chat-app.png';


export const Projects = () => {
    return (
        <div className='projects-page' id="projects">
            <h1>Some of my Projects</h1>

            <div className='meet-app project'>
                <div>
                    <h3>Meet-Up App</h3>
                    <div className='project-brief'>
                        <p>This app was created using React and a test-driven development approach. Its primary function is to show developers around the world events close to them related to web development. It also uses Google's Calendar API.</p>
                        <p>Tools Used: </p>
                        <ul>
                            <li>React</li>
                            <li>O-Auth</li>
                            <li>Jest</li>
                            <li>Jest-Cucumber</li>
                            <li>Puppeteer</li>
                            <li>Recharts</li>
                            <li>Axios</li>
                            <li>AWS</li>
                        </ul>

                        <div className='project-btn'>
                            <div><a target="_blank"  rel="noopener noreferrer" href='https://github.com/nastaranjenab/meet'>Github Repo</a></div>
                            <div><a target="_blank"  rel="noopener noreferrer" href='https://nastaranjenab.github.io/meet/'>Visit Site</a></div>
                        </div>
                    </div>

                </div>
                <div className='project-images'>
                    <img src={meetupLogin} alt="meet-up login page"></img>
                </div>
            </div>

            <div className='myFlix-api project'>

                <div>
                    <h3>MyFlix API</h3>
                    <div className='project-brief'>
                        <p>Movie API

The myFlix movie API is an API that serves a movies and users database. User can add their favourite movies into their account. It is a server-side application and build with Node.js and the framework Express. The API sends responses with information about different movies from the database MongoDB to the client. The connection between the server and the database is implemented using mongoose. As a user you need to crate a profile and log in. To ensure data security, an authentication and authorization process is established using JWT Token. Only encrypted paswords (hashed) are stored in the database providing extra protection.</p>
                        <p>Tools and Technologies Used:</p>
                        <ul>
                            <li>JavaScript</li>
                            <li>Node JS</li>
                            <li>Express</li>
                            <li>Mongoose</li>
                            <li>MongoDB</li>
                            <li>Postman</li>
                            <li>Passport</li>
                            <li>Heroku</li>
                        </ul>

                        <div className='project-btn'>
                            <div><a target="_blank"  rel="noopener noreferrer" href='https://github.com/nastaranjenab/movie_api'>Github Repo</a></div>
                            <div><a target="_blank"  rel="noopener noreferrer" href='https://movieflexworld.herokuapp.com//'>Visit Site</a></div>
                        </div>
                    </div>

                </div>
                <div className='project-images'>
                    <img className='api-img' src={BackendAPI} alt="mongoDB collections"></img>
                    {/* <img className='api-img' src={MoviesList} width="100%" alt="mongoDB collections"></img> */}
                </div>
            </div>

            <div className='movies-app project'>
               
                <div>
                    <h3>Movies App</h3>
                    <div className='project-brief'>
                        <p>myFlix Web App

This is a movie database app that allows users to view movies and add to their favorites. I created the API and database myself, and went on to create the front-end using React and Bootstrap.</p>
                            <p>Checkout the Backend Code on 
                            <a className="git-link" href='https://github.com/Priyanka-koraganji/movies-app'>Github</a></p>
                        <p>Tools Used:</p>
                        <ul>
                            <li>React</li>
                            <li>Parcel</li>
                            <li>React-Redux</li>
                            <li>React-Router-Dom</li>
                            <li>Node JS</li>
                            <li>MongoDB</li>
                            <li>Express</li>
                        </ul>

                        <div className='project-btn'>
                            <div><a target="_blank"  rel="noopener noreferrer" href='https://github.com/nastaranjenab/myFlix-client'>Github Repo</a></div>
                            <div><a target="_blank"  rel="noopener noreferrer" href='https://flourishing-horse-be1ece.netlify.app/'>Visit Site</a></div>
                        </div>
                    </div>

                </div>
                <div className='project-images'>
                    <img className='img' src={moviesApp} alt="movies app"></img>
                    {/* <img className='img' src={moviesUser} width="100%" alt="movies app"></img> */}
                </div>
            </div>

            <div className='movie-app-angular project'>

                <div>
                    <h3>Movies App Using Angular</h3>
                    <div className='project-brief'>
                        <p>
A single page application built using Angular and my own API, the same used for my React app. The app's purpose is the same, letting users view movies and add them to their favorites.</p>
                        <p>Checkout the Backend Code on <a target="_blank"  rel="noopener noreferrer"  className="git-link"
                            href='https://github.com/Priyanka-koraganji/movies-app'>Github</a> </p>
                        <p>Tools and Technologies Used:</p>
                        <ul>
                            <li>Angular</li>
                            <li>Typescript</li>
                            <li>Angular CLI</li>
                            <li>Material Design</li>
                            <li>Angular-cli-ghpages</li>
                            <li>typedoc</li>
                        </ul>

                        <div className='project-btn'>
                            <div><a target="_blank"  rel="noopener noreferrer" href='https://github.com/nastaranjenab/myFlix-Angular-client'>Github Repo</a></div>
                            <div><a target="_blank"  rel="noopener noreferrer" href='https://nastaranjenab.github.io/myFlix-Angular-client/welcome'>Visit Site</a></div>
                        </div>
                    </div>

                </div>
                <div className='project-images'>
                    <img src={AngularMovies} alt="movies app"></img>
                    {/* <img src={angularDialog} width="100%" alt="movies app"></img> */}
                </div>
            </div>

            <div className='chat-app project'>
                
                <div>
                    <h3>Chat App</h3>
                    <div className='project-brief'>
                        <p>It was developed with React Native, supported by Expo. The app provides users with a chat
                            interface and options to share images and their location. It uses the services of Google
                            Firestore for storing/retrieving data and for authentication. Chat mobile application also
                            provides offline functionality.</p>
                        <p>Tools and Technologies Used:</p>
                        <ul>
                            <li>React</li>
                            <li>Gifted chat</li>
                            <li>Expo</li>
                            <li>Google Firebase</li>
                            <li>IOS and Android simulators</li>
                        </ul>
                        <div className='project-btn'>
                            <div><a target="_blank"  rel="noopener noreferrer" href='https://github.com/nastaranjenab/Chat_App'>Github Repo</a></div>
                        </div>
                    </div>


                </div>
                <div className='project-images chat-images'>
                    <img src={ChatApp} alt="movies app"></img>
                    {/* <img src={OfflineChat} width="100%" margin-left="20px" alt="movies app"></img> */}
                </div>
            </div>

            <div className='pokedox-app project'>
                
                <div>
                    <h3>Pokedox App</h3>
                    <div className='project-brief'>
                        <p>The Pokedex app was created with pure Javascript, HTML and CSS. It was my first foray into Javascript, and borrowed data from a Pokemon API.</p>
                        <p>Tools Used:</p>
                        <ul>
                            <li>JS</li>
                            <li>HTML</li>
                            <li>Bootstrap</li>
                            <li>Saas</li>
                        </ul>

                        <div className='project-btn'>
                            <div><a target="_blank"  rel="noopener noreferrer" href='https://github.com/nastaranjenab/simple-js-app.git'>Github Repo</a></div>
                            <div><a target="_blank"  rel="noopener noreferrer" href='https://nastaranjenab.github.io/simple-js-app/'>Visit Site</a></div>
                        </div>
                    </div>

                </div>
                <div className='project-images'>
                    <img className='poke-img' src={Pokedox} alt=""></img>
                </div>
            </div>
            <div className='todo project'>

            </div>
        </div>
    )
}