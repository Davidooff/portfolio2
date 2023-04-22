import { useContext } from "react";
import ErrContext, { ErrContextType } from "./context";
import errLine from "./img/line.svg";
import cross from "./img/cross.svg";
import server from "./img/server.svg";
import "./error.css";

const Error = () => {
  const { isErr, setIsErr } = useContext<ErrContextType>(ErrContext);

  const handleClick = () => {
    setIsErr(false);
  };

  console.log(isErr);
  if (!isErr) {
    return <></>;
  }
  return (
    <div className="error">
      <div className="error__content">
        <div className="error__content__title">Error</div>
        <p className="error__content__message">It's just a demo of my skills</p>
        <div className="error__content__animation-not-hiden">
          <div className="error__content__animation">
            <div className="strate-line">
              <div className="error__content__animation__start-line"></div>
            </div>
            <div className="error-line">
              <img src={errLine} alt="" className="line" />
              <img src={cross} alt="" className="cross" />
            </div>
          </div>
          <img src={server} alt="" className="server" />
        </div>
        <div className="btn" onClick={handleClick}>
          I undestend
        </div>
      </div>
    </div>
  );
};
export default Error;
