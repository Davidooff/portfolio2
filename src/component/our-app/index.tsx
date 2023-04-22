import { useRef, useState, useEffect } from "react";
import "./ourapp.css";

const OurApp = () => {
  const lineRef = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState(0);
  useEffect(() => {
    console.log("ref");
    if (lineRef.current) {
      console.log(lineRef.current);

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
    <section className="our-app">
      <h2>Our App</h2>
      <p>Download our application for free and enjoy all its content</p>
      <button className="btn">Download</button>
      <div className="our-app-lines">
        <div className="our-app-lines-el"></div>
        <div
          className="our-app-lines-el our-app-lines-el2"
          ref={lineRef}
          style={{
            transform: "scaleX(1.031)",
            marginTop: width * 0.131 + "px",
            marginBottom: width * 0.131 + "px",
          }}
        ></div>
        <div className="our-app-lines-el">
          <div className="our-app-arrow-lines"></div>
          <div className="our-app-arrow-lines"></div>
        </div>
      </div>
    </section>
  );
};
export default OurApp;
