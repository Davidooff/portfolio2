import "./App.css";
import Header from "./component/header";
import Main from "./component/main";
import Features from "./component/features";
import About from "./component/about";
import Contact from "./component/contact";
import New from "./component/new";
import OurApp from "./component/our-app";
import NewsLeter from "./component/news-leter";
import Footer from "./component/footer";
import Error from "./component/error";

import ErrContext from "./component/error/context";
import { useState } from "react";

function App() {
  const [isErr, setIsErr] = useState<boolean | null>(false);
  return (
    <ErrContext.Provider value={{ isErr, setIsErr }}>
      <Header />
      <Main />
      <Features />
      <About />
      <Contact />
      <New />
      <OurApp />
      <NewsLeter />
      <Footer />
      <Error />
    </ErrContext.Provider>
  );
}

export default App;
