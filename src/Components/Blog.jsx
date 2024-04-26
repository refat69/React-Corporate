import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import { Fragment } from "react";
import blog1Image from "../assets/images/blog1.jpg";
import blog2Image from "../assets/images/blog2.jpg";
import blog3Image from "../assets/images/blog3.jpg";

const blogData = [
  {
    id: 1,
    image: blog1Image,
    time: "15 Nov 2016",
    title: "Coffee Lovers",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt, asperiores eaque quibusdam eum quod cum nesciunt.",
    link: "https://www.google.com",
  },
  {
    id: 2,
    image: blog2Image,
    time: "10 Nov 2016",
    title: "Tips for UI Design",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt, asperiores eaque quibusdam eum quod cum nesciunt.",
    link: "https://www.facebook.com",
  },
  {
    id: 3,
    image: blog3Image,
    time: "07 Nov 2016",
    title: "Beautiful Day",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt, asperiores eaque quibusdam eum quod cum nesciunt.",
    link: "https://www.twitter.com",
  },
];

export const Blog = () => {
  return (
    <Fragment>
      <section id="blog" className="block blog-block">
        <Container fluid>
          <div className="title-holder">
            <h2>Latest from blog</h2>
            <div className="subtitle">get our latest news from blog</div>
          </div>
          <Row>
            {blogData.map((blog) => {
              return (
                <Col sm={4} key={blog.id}>
                  <div className="holder">
                    <Card>
                      <Card.Img variant="top" src={blog.image} />
                      <Card.Body>
                        <time>{blog.time}</time>
                        <Card.Title>{blog.title}</Card.Title>
                        <Card.Text>{blog.description}</Card.Text>
                        <a href={blog.link} className="btn btn-primary">
                          Read More <i className="fas fa-chevron-right"></i>
                        </a>
                      </Card.Body>
                    </Card>
                  </div>
                </Col>
              );
            })}
          </Row>
        </Container>
      </section>
    </Fragment>
  );
};
