import "./new.css";
import ilustration1 from "../../assets/new/ilustration1.png";
import ilustration2 from "../../assets/new/ilustration2.png";
import { useRef, useState, useEffect } from "react";

const New = () => {
  const lineRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  const nullHeight = () => {
    if (lineRef.current && lineRef.current.offsetHeight > 0) {
      setHeight(lineRef.current.offsetHeight);
    } else {
      setInterval(() => nullHeight(), 100);
    }
  };

  useEffect(() => {
    if (lineRef.current) {
      console.log(lineRef.current);

      nullHeight();
    }
  }, []);

  function handleResize() {
    if (lineRef.current) {
      setHeight(lineRef.current.offsetHeight);
    }
  }

  window.addEventListener("resize", handleResize);

  return (
    <section className="new">
      <div className="first-raw raw">
        <img src={ilustration1} alt="" />
        <div className="first-raw-content">
          <h2>
            New <br /> Sensarion
          </h2>
          <div className="new-lines">
            <div
              className="new-lines-el"
              style={{
                height: "100%",
              }}
            ></div>
            <div
              className="new-lines-el new-lines-el2"
              ref={lineRef}
              style={{
                marginLeft: height * 0.269 + "px",
                marginRight: height * 0.269 + "px",
                transform: "scaleY(1.14)",
                rotate: "30deg",
              }}
            ></div>
            <div className="new-lines-el new-lines-el3">
              <div className="new__way-arr"></div>
              <div className="new__way-arr"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="second-raw raw">
        <div className="second-raw-text">
          <h2>New Filters</h2>
          <p>
            Lorem ipsum dolor sit amet, consec tetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud
          </p>
        </div>
        <img src={ilustration2} alt="" />
      </div>
    </section>
  );
};
export default New;
