import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import { Fragment } from "react";
import team1Image from "../assets/images/team1.jpg";
import team2Image from "../assets/images/team2.jpg";
import team3Image from "../assets/images/team3.jpg";
import team4Image from "../assets/images/team4.jpg";
import team5Image from "../assets/images/team5.jpg";
import team6Image from "../assets/images/team6.jpg";
import team7Image from "../assets/images/team7.jpg";
import team8Image from "../assets/images/team8.jpg";

const teamsData = [
  {
    id: 1,
    image: team1Image,
    fbLink: "https://www.facebook.com",
    twitterLink: "https://www.twitter.com",
    linkedinLink: "https://www.linkedin.com",
    name: "Gabriel Hart",
    designation: "CEO",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui facilis, totam maiores.",
  },
  {
    id: 2,
    image: team2Image,
    fbLink: "https://www.facebook.com",
    twitterLink: "https://www.twitter.com",
    linkedinLink: "https://www.linkedin.com",
    name: "David Antony",
    designation: "Manager",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui facilis, totam maiores.",
  },
  {
    id: 3,
    image: team3Image,
    fbLink: "https://www.facebook.com",
    twitterLink: "https://www.twitter.com",
    linkedinLink: "https://www.linkedin.com",
    name: "Nicholas Perry",
    designation: "UX Designer",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui facilis, totam maiores.",
  },
  {
    id: 4,
    image: team4Image,
    fbLink: "https://www.facebook.com",
    twitterLink: "https://www.twitter.com",
    linkedinLink: "https://www.linkedin.com",
    name: "Sarah Wills",
    designation: "Developer",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui facilis, totam maiores.",
  },
  {
    id: 5,
    image: team5Image,
    fbLink: "https://www.facebook.com",
    twitterLink: "https://www.twitter.com",
    linkedinLink: "https://www.linkedin.com",
    name: "Sophia Pitt",
    designation: "Developer",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui facilis, totam maiores.",
  },
  {
    id: 6,
    image: team6Image,
    fbLink: "https://www.facebook.com",
    twitterLink: "https://www.twitter.com",
    linkedinLink: "https://www.linkedin.com",
    name: "Taylor Lopez",
    designation: "Developer",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui facilis, totam maiores.",
  },
  {
    id: 7,
    image: team7Image,
    fbLink: "https://www.facebook.com",
    twitterLink: "https://www.twitter.com",
    linkedinLink: "https://www.linkedin.com",
    name: "Ryan Giggs",
    designation: "Content Writer",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui facilis, totam maiores.",
  },
  {
    id: 8,
    image: team8Image,
    fbLink: "https://www.facebook.com",
    twitterLink: "https://www.twitter.com",
    linkedinLink: "https://www.linkedin.com",
    name: "David Smith",
    designation: "SEO Expert",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui facilis, totam maiores.",
  },
];

export const Team = () => {
  return (
    <Fragment>
      <section id="teams" className="block teams-block">
        <Container fluid>
          <div className="title-holder">
            <h2>Our teams</h2>
            <div className="subtitle">some of our experts</div>
          </div>
          <Row>
            {teamsData.map((teams) => {
              return (
                <Col sm={3} key={teams.id}>
                  <div className="image">
                    <Image src={teams.image} />
                    <div className="overlay">
                      <div className="socials">
                        <ul>
                          <li>
                            <a href={teams.fbLink}>
                              <i className="fab fa-facebook-f"></i>
                            </a>
                          </li>
                          <li>
                            <a href={teams.twitterLink}>
                              <i className="fab fa-twitter"></i>
                            </a>
                          </li>
                          <li>
                            <a href={teams.linkedinLink}>
                              <i className="fab fa-linkedin-in"></i>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="content">
                    <h3>{teams.name}</h3>
                    <span className="designation">{teams.designation}</span>
                    <p>{teams.description}</p>
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
