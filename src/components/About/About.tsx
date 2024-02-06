import { Container } from "./styles";
import Selva from "../../assets/selva.jpeg";
import ScrollAnimation from "react-animate-on-scroll";


export function About() {
  return (
    <Container id="about">
      <div className="about-text">
        <ScrollAnimation animateIn="fadeInLeft">
          <h2>Who I am</h2>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.1 * 1000}>
          <p>
          A Full Stack Web Developer based out of Chennai, India.</p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.2 * 1000} style={{ marginTop: "2rem", marginBottom: "2rem" }}>
          <p>
A seasoned software developer with extensive experience in full-stack development, particularly adept in Python, JavaScript, and modern frameworks. Demonstrated proficiency in designing and implementing scalable, efficient solutions across a spectrum of projects. Committed to continual growth and adept at embracing emerging technologies in the ever-evolving landscape of software development
            </p>
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
