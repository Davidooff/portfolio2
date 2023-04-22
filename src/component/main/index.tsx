import "./main.css";
import { useRef, useEffect, useState } from "react";
import ilustration from "../../assets/main/ilustration.png";

const Main = () => {
  const lineRef = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState(0);
  useEffect(() => {
    console.log("ref");
    if (lineRef.current) {
      setWidth(lineRef.current.offsetWidth);
    }
  }, []);

  function handleResize() {
    if (lineRef.current) {
      setWidth(lineRef.current.offsetWidth);
    }
  }

  window.addEventListener("resize", handleResize);

  return (
    <section className="main">
      <div className="main-content">
        <div className="main-lines">
          <div className="main-lines__el main-lines__el1">
            <div className="main-lines__el1__way-arr"></div>
            <div className="main-lines__el1__way-arr"></div>
          </div>
          <div
            className="main-lines__el main-lines__el2"
            ref={lineRef}
            style={{
              marginTop: width * 0.285 + "px",
              transform: "scaleX(" + 1 / Math.cos(Math.PI / 6) + ")",
            }}
          ></div>
          <div
            className="main-lines__el main-lines__el3"
            style={{
              marginTop: 2 * width * 0.285 + "px",
            }}
          ></div>
        </div>
        <div className="main-text">
          <h1>
            <label className="space-betwen">
              <div> The </div> <div> new </div>
            </label>
            app ~~ to <div className="text-aligin-right"> connect </div>
            people
          </h1>
          <div className="btn">Download Now</div>
        </div>
      </div>
      <img className="main-ilustration" src={ilustration} alt="" />
    </section>
  );
};
export default Main;
