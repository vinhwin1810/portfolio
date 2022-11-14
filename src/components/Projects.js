import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/1.png";
import projImg2 from "../assets/img/2.png";
import projImg3 from "../assets/img/3.png";
import projImg4 from "../assets/img/4.png";
import projImg5 from "../assets/img/5.png";
import projImg6 from "../assets/img/6.png";
import projImg7 from "../assets/img/7.png";
import projImg8 from "../assets/img/8.png";
import projImg9 from "../assets/img/9.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Projects = () => {
  const projects1 = [
    {
      title: "Union College",
      description: "Fuck you",
      imgUrl: projImg1,
    },
    {
      title: "CPH 706",
      description: "Kiss",
      imgUrl: projImg2,
    },
    {
      title: "Virtual",
      description: "You draw",
      imgUrl: projImg3,
    },
  ];
  const projects2 = [
    {
      title: "Buy Meat",
      description: "Mad",
      imgUrl: projImg4,
    },
    {
      title: "No idea",
      description: "Beo",
      imgUrl: projImg5,
    },
    {
      title: "Pretty",
      description: "sexy",
      imgUrl: projImg6,
    },
  ];
  const projects3 = [
    {
      title: "Hai Phong",
      description: "ilysm",
      imgUrl: projImg7,
    },
    {
      title: "Travezia",
      description: "just fucked",
      imgUrl: projImg8,
    },
    {
      title: "Some Cafe shop",
      description: "make up",
      imgUrl: projImg9,
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>Gallery</h2>
                  <p>This is our photo Gallery</p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                    >
                      <Nav.Item>
                        <Nav.Link eventKey="first">Us</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">You</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Us again</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content
                      id="slideInUp"
                      className={
                        isVisible ? "animate__animated animate__slideInUp" : ""
                      }
                    >
                      <Tab.Pane eventKey="first">
                        <Row>
                          {projects1.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <Row>
                          {projects2.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <Row>
                          {projects3.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt=""></img>
    </section>
  );
};
