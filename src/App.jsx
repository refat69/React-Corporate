import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Fragment } from "react";
import { Header } from "./Components/Header";
import { AppHero } from "./Components/AppHero";
import { About } from "./Components/About";
import { Services } from "./Components/Services";
import { Works } from "./Components/Works";
import { Team } from "./Components/Team";
import { Testimonial } from "./Components/Testimonial";
import { Footer } from "./Components/Footer";
import { Price } from "./Components/Price";
import { Blog } from "./Components/Blog";
import { Contact } from "./Components/Contact";

export const App = () => {
  return (
    <Fragment>
      <div className="App">
        <header id="header">
          <Header />
        </header>
        <main>
          <AppHero />
          <About />
          <Services />
          <Works />
          <Team />
          <Testimonial />
          <Price />
          <Blog />
          <Contact />
          <footer id="footer">
            <Footer />
          </footer>
        </main>
      </div>
    </Fragment>
  );
};
