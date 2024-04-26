import { Fragment } from "react";
import Carousel from "react-bootstrap/Carousel";
import hero1Image from "../assets/images/img-hero1.jpg";
import hero2Image from "../assets/images/img-hero2.jpg";
import hero3Image from "../assets/images/img-hero3.jpg";
var heroData = [
  {
    id: 1,
    image: hero1Image,
    title: "The perfect design for your website",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab suscipit dicta nulla. Consequuntur obcaecati officiis, labore doloribus non tempore impedit consequatur ab dolor. Explicabo quam repellendus vero omnis, nisi odio!",
    link: "https://www.google.com",
  },
  {
    id: 2,
    image: hero2Image,
    title: "Start Your Future Financial Plan",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab suscipit dicta nulla. Consequuntur obcaecati officiis, labore doloribus non tempore impedit consequatur ab dolor. Explicabo quam repellendus vero omnis, nisi odio!",
    link: "https://www.facebook.com",
  },
  {
    id: 3,
    image: hero3Image,
    title: "Enjoy the Difference",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab suscipit dicta nulla. Consequuntur obcaecati officiis, labore doloribus non tempore impedit consequatur ab dolor. Explicabo quam repellendus vero omnis, nisi odio!",
    link: "https://www.twitter.com",
  },
];
export const AppHero = () => {
  return (
    <Fragment>
      <section id="home" className="hero-block">
        <Carousel>
          {heroData.map((hero) => {
            return (
              <Carousel.Item key={hero.id}>
                <img
                  className="d-block w-100"
                  src={hero.image}
                  alt={"slide " + hero.id}
                />
                <Carousel.Caption>
                  <h2>{hero.title}</h2>
                  <p>{hero.description}</p>
                  <a className="btn btn-primary" href={hero.link}>
                    Learn More <i className="fas fa-chevron-right"></i>
                  </a>
                </Carousel.Caption>
              </Carousel.Item>
            );
          })}
        </Carousel>
      </section>
    </Fragment>
  );
};
