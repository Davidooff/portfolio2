import ilustration from "../../assets/about/ilustration.png";
import "./about.css";

const About = () => {
  return (
    <section className="about">
      <h2>About Us</h2>
      <img src={ilustration} alt="" />
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
      </p>
    </section>
  );
};

export default About;
