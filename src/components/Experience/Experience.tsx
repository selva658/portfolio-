import { Container } from "./styles";
import Selva from "../../assets/experience.jpg";
import Programmer from "../../assets/programmer.gif";
import ScrollAnimation from "react-animate-on-scroll";


export function Experience() {
  return (
    <Container id="about">
      <div className="about-text">
        <ScrollAnimation animateIn="fadeInLeft">
          <h2>Professional Experience</h2>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.1 * 1000}>
          <p>Company : Critical Mention an Onclusive Company</p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.2 * 1000} style={{ marginTop: "2rem", marginBottom: "2rem" }}>
          <p>Designation : Full Stack Web Developer</p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.2 * 1000} style={{ marginTop: "2rem", marginBottom: "2rem" }}>
          <p>Started on : April 2022 - Feb 2024</p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.2 * 1000} style={{ marginTop: "2rem", marginBottom: "2rem" }}>
          <p>
          Accomplished software developer with expertise in crafting dynamic and responsive user interfaces using Vue.js, delivering seamless and engaging experiences across various devices. Demonstrated proficiency in leveraging Vue.js components to modularize the codebase, significantly enhancing code reusability and maintainability. Skilled in implementing robust RESTful APIs with Python Flask, facilitating efficient communication between frontend and backend systems. Experienced in integrating third-party APIs, including GIS, to introduce valuable new features and extend application functionality. Committed to ensuring high-quality performance through comprehensive unit testing and proactive bug identification and resolution.</p>
        </ScrollAnimation>
       
      </div>
      <div className="about-image">
        <ScrollAnimation animateIn="fadeInRight" delay={0.20 * 1000}>
          <img src={Selva} alt="Selvakumar" />
        </ScrollAnimation>
      </div>

      <div className="about-text">
        <ScrollAnimation animateIn="fadeInLeft" delay={0.1 * 1000}>
          <p>Company : Orion Innovation</p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.2 * 1000} style={{ marginTop: "2rem", marginBottom: "2rem" }}>
          <p>Designation : Full Stack Web Developer</p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.2 * 1000} style={{ marginTop: "2rem", marginBottom: "2rem" }}>
          <p>Started on : March 2024 - Present</p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.2 * 1000} style={{ marginTop: "2rem", marginBottom: "2rem" }}>
          <p>Experienced in crafting responsive and visually engaging UI components, I have a proven track record of seamlessly integrating front-end designs with back-end services. Through collaborative development practices, I effectively liaise with cross-functional teams to gather requirements, troubleshoot issues, and implement scalable solutions. Adhering to rigorous coding standards and conducting regular code reviews, I prioritize code quality to enhance maintainability and reduce technical debt.</p>
        </ScrollAnimation>
       
      </div>
    
      <div className="about-image">
        <ScrollAnimation animateIn="fadeInRight" delay={0.20 * 1000}>
          <img src={Programmer} alt="Selvakumar" />
        </ScrollAnimation>
      </div>

    </Container>
  )
}
