import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Pagination from "react-bootstrap/Pagination";
import { Fragment } from "react";
import work1Image from "../assets/images/img1.jpg";
import work2Image from "../assets/images/img2.jpg";
import work3Image from "../assets/images/img3.jpg";
import work4Image from "../assets/images/img4.jpg";
import work5Image from "../assets/images/img5.jpg";
import work6Image from "../assets/images/img6.jpg";
import work7Image from "../assets/images/img7.jpg";
import work8Image from "../assets/images/img8.jpg";
import work9Image from "../assets/images/img9.jpg";

const worksData = [
  {
    id: 1,
    link: "https://www.google.com",
    image: work1Image,
    title: "Lonely Path",
    subtitle: "Web Design",
  },
  {
    id: 2,
    link: "https://www.google.com",
    image: work2Image,
    title: "Photographer Girl",
    subtitle: "Branding",
  },
  {
    id: 3,
    link: "https://www.google.com",
    image: work3Image,
    title: "The Difference",
    subtitle: "Web Design",
  },
  {
    id: 4,
    link: "https://www.google.com",
    image: work4Image,
    title: "Nature Patterns",
    subtitle: "Branding",
  },
  {
    id: 5,
    link: "https://www.google.com",
    image: work5Image,
    title: "The Difference",
    subtitle: "Photography",
  },
  {
    id: 6,
    link: "https://www.google.com",
    image: work6Image,
    title: "Winter Sonata",
    subtitle: "Web Design",
  },
  {
    id: 7,
    link: "https://www.google.com",
    image: work7Image,
    title: "Lonely Path",
    subtitle: "Branding",
  },
  {
    id: 8,
    link: "https://www.google.com",
    image: work8Image,
    title: "Appreciation",
    subtitle: "Photography",
  },
  {
    id: 9,
    link: "https://www.google.com",
    image: work9Image,
    title: "Happy Days",
    subtitle: "Web Design",
  },
];

let active = 2;
let items = [];
for (let number = 1; number <= 5; number++) {
  items.push(
    <Pagination.Item key={number} active={number === active}>
      {number}
    </Pagination.Item>,
  );
}
export const Works = () => {
  return (
    <Fragment>
      <section id="works" className="block works-block">
        <Container fluid>
          <div className="title-holder">
            <h2>Our works</h2>
            <div className="subtitle">our awesome works</div>
          </div>
          <Row className="portfoliolist">
            {worksData.map((works) => {
              return (
                <Col sm={4} key={works.id}>
                  <div className="portfolio-wrapper">
                    <a href={works.link}>
                      <Image src={works.image} />
                      <div className="label text-center">
                        <h3>{works.title}</h3>
                        <p>{works.subtitle}</p>
                      </div>
                    </a>
                  </div>
                </Col>
              );
            })}
          </Row>
          <Pagination>{items}</Pagination>
        </Container>
      </section>
    </Fragment>
  );
};
