import ilustration from "../../assets/Features/ilustration.png";
import "./features.css";

const Features = () => {
  return (
    <section className="features">
      <img src={ilustration} alt="" />
      <div className="features-content">
        <div className="features-text">
          <h2>
            New features <br /> and advanced <br /> services
          </h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud
          </p>
        </div>
        <div className="btn">Read More</div>
      </div>
    </section>
  );
};
export default Features;
