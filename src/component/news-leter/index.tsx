import { useContext } from "react";
import ErrContext, { ErrContextType } from "../error/context";
import "./news-leter.css";

const NewsLeter = () => {
  const { setIsErr } = useContext<ErrContextType>(ErrContext);

  const clickHandler = () => {
    setIsErr(true);
  };
  return (
    <section className="news-leter">
      <aside className="news-leter-dsc">
        <h2>Newsletter</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
        </p>
      </aside>
      <aside className="news-leter-form">
        <form onSubmit={(e) => e.preventDefault()}>
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
          <button className="btn" onClick={clickHandler}>
            Subscribe Now
          </button>
          <p>
            * Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam,
          </p>
        </form>
      </aside>
    </section>
  );
};
export default NewsLeter;
