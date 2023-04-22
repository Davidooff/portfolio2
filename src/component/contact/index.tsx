import { useRef, useState, useEffect, useContext } from "react";
import ErrContext, { ErrContextType } from "../error/context";
import "./contact.css";

const Contact = () => {
  const { setIsErr } = useContext<ErrContextType>(ErrContext);
  const lineRef = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState(0);

  const clickHandler = () => {
    setIsErr(true);
  };

  useEffect(() => {
    if (lineRef.current) {
      setWidth(lineRef.current.offsetWidth);
    }
  }, []);
  return (
    <section className="contact">
      <h2>Contact Us</h2>
      <div className="contact-content">
        <div className="contact-lines">
          <div className="contact-lines__el contact-lines__el1"></div>
          <div
            className="contact-lines__el contact-lines__el2"
            ref={lineRef}
            style={{
              marginTop: width * 0.595 + "px",
              transform: "scale(1.565) rotate(-50deg)",
            }}
          ></div>
          <div
            className="contact-lines__el contact-lines__el3"
            style={{
              marginTop: 2 * width * 0.595 + "px",
            }}
          >
            {/* Css for this class u can search in components/main/main.css */}
            <div className="main-lines__el1__way-arr"></div>
            <div className="main-lines__el1__way-arr"></div>
          </div>
        </div>
        <div className="contact-form">
          <form
            onSubmit={(e) => e.preventDefault()}
            style={{
              height: 2 * width * 0.595 - 100 + "px",
            }}
          >
            <div className="input-container">
              <span className="input-descript">Name: </span>
              <input type="text" />
            </div>
            <div className="input-container">
              <span className="input-descript">Surname: </span>
              <input type="text" />
            </div>
            <div className="input-container">
              <span className="input-descript">E-mail: </span>
              <input type="text" />
            </div>
            <div className="input-container input-textarea">
              <span className="textarea-descript input-descript">Message:</span>
              <textarea></textarea>
            </div>
            <button className="btn" onClick={clickHandler}>
              Contact Us
            </button>
          </form>
          <div className="under-lines">
            <ul>
              <li></li>
              <li></li>
              <li></li>
              <li className="tranparent"></li>
              <li></li>
              <li></li>
              <li></li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Contact;
