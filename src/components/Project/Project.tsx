import { Container } from "./styles";
// import githubIcon from "../../assets/github.svg"
// import DownloadApp from '../../assets/download.png'
import externalLink from "../../assets/external-link.svg"
import ScrollAnimation from "react-animate-on-scroll";
import lybrate from "../../assets/lybrate.jpeg"
import youtube from "../../assets/youtube.jpeg"
import weather from "../../assets/weather.jpeg"
import calculator from "../../assets/calculator.jpeg"
import imgur from "../../assets/imgur.jpeg"
import news from "../../assets/newsapp.jpeg"
import bookmyshow from "../../assets/bookmyshow.jpeg"

export function Project() {
  return (
    <Container id="project">
      <h2>My Projects</h2>
      <div className="projects">

  

      <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
            <a href="https://github.com/selva658/Lybrate_Clone_Project" target="_blank" rel="noreferrer">
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b " stroke-width="1" stroke-linecap="round" stroke-linejoin="round" ><title>Github</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
             </a>
              <div className="project-links">
                <a href="https://selva658.github.io/Lybrate_Clone_Project/" target="_blank" rel="noreferrer">
                  <img src={externalLink} alt="Visit site" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>Lybrate Lite</h3>
              <img className="Myproject" src={lybrate} alt="Selvakumar" />
              <div>
              Lybrate is a mobile healthcare technology company that developed an online platform to connect doctors and patients.
              </div>
              <p className="container">
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>HTML</li>
                <li>CSS</li>
                <li>Javascript</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
            <a href="https://github.com/selva658/youtube-clone" target="_blank" rel="noreferrer">
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b " stroke-width="1" stroke-linecap="round" stroke-linejoin="round" ><title>Github</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
             </a>
              <div className="project-links">
                <a href="https://selva658.github.io/youtube-clone/" target="_blank" rel="noreferrer">
                  <img src={externalLink} alt="Visit site" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>You Tube Lite</h3>
              <img className="Myproject" src={youtube} alt="Selvakumar" />
              <div>
              Experience the essence of YouTube in this meticulously crafted clone, offering seamless video sharing, user-friendly interfaces, and immersive content discovery.
              </div>
            </div>
            <footer>
              <ul className="tech-list">
                <li>HTML</li>
                <li>CSS</li>
                <li>Javascript</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
            <a href="https://github.com/selva658/weather-app" target="_blank" rel="noreferrer">
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b " stroke-width="1" stroke-linecap="round" stroke-linejoin="round" ><title>Github</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
             </a>
              <div className="project-links">
                <a href="https://weather-app-selva658.vercel.app/" target="_blank" rel="noreferrer">
                  <img src={externalLink} alt="Visit site" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>Weather App</h3>
              <img className="Myproject" src={weather} alt="Selvakumar" />
              <div>
              Weather forecast systems and applications predict weather conditions based on multiple parameters.
              </div>
            </div>
            <footer>
              <ul className="tech-list">
                <li>Vue JS</li>
                <li>CSS</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
            <a href="https://github.com/selva658/calculator-app" target="_blank" rel="noreferrer">
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b " stroke-width="1" stroke-linecap="round" stroke-linejoin="round" ><title>Github</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
             </a>
              <div className="project-links">
                <a href="https://calculator-app-navy-two.vercel.app/" target="_blank" rel="noreferrer">
                  <img src={externalLink} alt="Visit site" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>Calculator App</h3>
              <img className="Myproject" src={calculator} alt="Selvakumar" />
              <div>
              Developed a user-friendly calculator application that simplifies mathematical operations with an intuitive interface and robust functionality.
              </div>

            </div>
            <footer>
              <ul className="tech-list">
                <li>Vue Js</li> 
                <li>CSS</li>              
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
            <a href="https://github.com/selva658/Imgur_Clone" target="_blank" rel="noreferrer">
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b " stroke-width="1" stroke-linecap="round" stroke-linejoin="round" ><title>Github</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
             </a>
              <div className="project-links">
                <a href="https://imgur-clone-tau.vercel.app/" target="_blank" rel="noreferrer">
                  <img src={externalLink} alt="Visit site" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>Imgur Lite</h3>
              <img className="Myproject" src={imgur} alt="Selvakumar" />
              <div>
              Imgur is an online image sharing and image hosting service with a focus on social gossip.
              </div>
            </div>
            <footer>
              <ul className="tech-list">
              <li>HTML</li>
                <li>CSS</li>
                <li>Javascript</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
            <a href="https://github.com/selva658/News-app" target="_blank" rel="noreferrer">
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b " stroke-width="1" stroke-linecap="round" stroke-linejoin="round" ><title>Github</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
             </a>
              <div className="project-links">
                <a href="https://github.com/selva658/News-app" target="_blank" rel="noreferrer">
                  <img src={externalLink} alt="Visit site" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>News App</h3>
              <img className="Myproject" src={news} alt="Selvakumar" />
              <div>  
             A news app designed to deliver curated, real-time updates on global events, offering users personalized content recommendations and intuitive navigation for seamless browsing.
              </div>
            </div>
            <footer>
              <ul className="tech-list">
                <li>Vue Js</li>
                <li>CSS</li>
                <li>Bootstrap</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

         <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
            <a href="https://github.com/selva658/BookMyShow-Clone" target="_blank" rel="noreferrer">
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b " stroke-width="1" stroke-linecap="round" stroke-linejoin="round" ><title>Github</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
             </a>
              <div className="project-links">
                <a href="https://github.com/selva658/BookMyShow-Clone" target="_blank" rel="noreferrer">
                  <img src={externalLink} alt="Visit site" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>Book My Show Lite</h3>
              <img className="Myproject" src={bookmyshow} alt="Selvakumar" />
              <div>
              A movie show app designed to streamline the process of discovering and booking movie tickets, offering users a seamless experience to browse showtimes and theater locations.
              </div>
            </div>
            <footer>
              <ul className="tech-list">
                <li>React Js</li>
                <li>Material UI</li>
                <li>CSS</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation> 

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
            <a href="https://github.com/selva658/Lybrate_backend" target="_blank" rel="noreferrer">
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b " stroke-width="1" stroke-linecap="round" stroke-linejoin="round" ><title>Github</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
             </a>
              <div className="project-links">
                <a href="https://github.com/selva658/Lybrate_backend" target="_blank" rel="noreferrer">
                  <img src={externalLink} alt="Visit site" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>Lybrate Lite using Node Js</h3>
              <img className="Myproject" src={lybrate} alt="Selvakumar" />
              <div>
              Lybrate is a mobile healthcare technology company that developed an online platform to connect doctors and patients.
              </div>
            </div>
            <footer>
              <ul className="tech-list">
                <li>EJS</li>
                <li>Node Js</li>  
                <li>MongoDB</li>            
              </ul>
            </footer>
          </div>
        </ScrollAnimation>
       

      </div>
    </Container>
  );
}