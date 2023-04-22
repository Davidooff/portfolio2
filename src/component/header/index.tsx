import { useState } from "react";
import logo from "../../assets/logo.png";
import "./header.css";

const Header = () => {
  const [isOpen, setisOpen] = useState(false);
  const open = (): void => {
    setisOpen(!isOpen);
  };

  function handleResize() {
    setisOpen(false);
  }

  window.addEventListener("resize", handleResize);

  return (
    <>
      <header
        className="header"
        style={{
          height: isOpen ? "311px" : "65px",
        }}
      >
        <img src={logo} alt="" />
        <nav>
          <ul>
            <li>About App</li>
            <li>Store</li>
            <li>Info</li>
            <li>Contact</li>
          </ul>
        </nav>
        <div className="open-menu" onClick={open}>
          <div className="open-menu-line"></div>
          <div className="open-menu-line"></div>
          <div className="open-menu-line"></div>
        </div>
      </header>
    </>
  );
};
export default Header;
