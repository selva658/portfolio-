import { Container } from "./styles";
import Selva from "../../assets/experience.jpg";
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
          <p>De signation : Full Stack Web Developer</p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.2 * 1000} style={{ marginTop: "2rem", marginBottom: "2rem" }}>
          <p>Started on : April 2022 - Present</p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.2 * 1000} style={{ marginTop: "2rem", marginBottom: "2rem" }}>
          <p>As a Full Stack Developer, I have played a key role in developing
and maintaining web applications using Vue.js on the Front-end
and Python Flask on the Back-end.</p>
        </ScrollAnimation>
       
      </div>
      <div className="about-image">
        <ScrollAnimation animateIn="fadeInRight" delay={0.20 * 1000}>
          <img src={Selva} alt="Selvakumar" />
        </ScrollAnimation>
      </div>
    </Container>
  )
}
