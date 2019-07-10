import React, { Component } from "react";
import { TimelineLite } from "gsap/all";
import { dataArray } from "./scripts/data.js";
import Headshot from "../../resources/pics/tface.jpg";
import "./style/style.css";
import Flippy, { FrontSide, BackSide } from "react-flippy";
import {
  Media,
  Card,
  CardTitle,
  CardText,
  Button,
  ListGroup,
  ListGroupItem,
  ListGroupItemHeading,
  ListGroupItemText,
  FormGroup,
  Input
} from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedinIn,
  faGithub,
  faStackOverflow
} from "@fortawesome/free-brands-svg-icons";
import { Player, ControlBar } from "video-react";
import "../../../node_modules/video-react/dist/video-react.css";
class Header extends Component {
  constructor(props) {
    super(props);
    // cards, elements tha will be used in the tween
    this.cards = [];
    // the timeline instance
    this.tl = new TimelineLite({ paused: true });
  }
  componentDidMount() {
    this.tl.staggerTo(this.cards, 0.5, { autoAlpha: 1, y: -20 }, 0.1);
  }
  render() {
    const elements = dataArray.map((element, index) => {
      return (
        <div
          key={element.id}
          className="col-10 col-sm-10 col-md-10 col-lg-6 col-xl-4 card-element mt-4 mb-4 mx-auto"
          ref={div => (this.cards[index] = div)}
        >
          <Flippy
            id={index}
            ref={r => (element.flippyHorizontal = r)}
            flipOnClick={false}
            flipDirection="horizontal"
          >
            <FrontSide style={{ backgroundColor: "#333", borderColor: "#333" }}>
              <Card
                className="m-1 p-0"
                body
                inverse
                style={{ backgroundColor: "#333", borderColor: "#333" }}
              >
                <CardTitle className="mt-0">{element.name}</CardTitle>
                <CardText className="info">{element.info}</CardText>
                <CardText className="techused">
                  Technologies Used: {element.techUsed}
                </CardText>
                <Button
                  className="btn-sm"
                  id={element.btnID}
                  style={{ marginBottom: ".5rem" }}
                  onClick={() => element.flippyHorizontal.toggle()}
                >
                  Click For Demo
                </Button>
              </Card>
            </FrontSide>
            <BackSide
              className="container bkSide text-center"
              style={{ backgroundColor: "#333", borderColor: "#333" }}
            >
              <div className="container text-center">
                <Player className="picsTest" fluid={false} playsInline={true}>
                  <source
                    src={require("../../resources/videos" + element.video)}
                  />
                  <ControlBar disableCompletely={true} className="my-class" />
                </Player>
              </div>
              <div>
                <Button
                  id={element.btnID}
                  onClick={() => element.flippyHorizontal.toggle()}
                  className="btn btn-md btnBack mx-auto"
                >
                  Go Back
                </Button>
              </div>
            </BackSide>
          </Flippy>
        </div>
      );
    });

    this.tl
      .kill()
      .clear()
      .pause(0);
    return (
      <div className="container">
        <div className="row mt-3">
          <div className="mx-auto col-10 col-sm-10 col-md-8 col-lg-7 col-xl-6 mx-auto">
            <Flippy
              ref={r => (this.flippyHorizontal = r)}
              flipOnClick={false}
              flipDirection="horizontal"
            >
              <FrontSide>
                <Card
                  // className=""
                  body
                  inverse
                  style={{ backgroundColor: "#333", borderColor: "#333" }}
                >
                  <Media className="mx-auto mb-4">
                    <Media
                      className="headshot"
                      src={Headshot}
                      object
                      alt="headshot of spacetrev"
                    />
                  </Media>
                  <Button
                    className="text-center btn btn-sm m-1"
                    onClick={() => this.flippyHorizontal.toggle()}
                  >
                    Flip for contact
                  </Button>
                  <CardTitle className="mx-auto cardtitle">
                    <h1 className="cardTitle">Trevor Benavides</h1>
                  </CardTitle>
                  <CardText className="mx-auto cardText">
                    Software Developer
                  </CardText>
                  <CardText className="mx-auto cardText2">
                    Apps/Projects
                  </CardText>

                  <div className="mx-auto">
                    <Button
                      // flipOnClick={true}
                      className="btn-md m-1"
                      onClick={() => this.tl.play()}
                    >
                      Show
                    </Button>
                    <Button
                      className="btn-md m-1"
                      onClick={() => this.tl.reverse()}
                    >
                      Hide
                    </Button>
                  </div>
                </Card>
              </FrontSide>
              <BackSide>
                <Card
                  // className=""
                  body
                  inverse
                  style={{ backgroundColor: "#333", borderColor: "#333" }}
                >
                  <CardTitle className="mx-auto cardtitle">
                    <h1 id="backTitle" className="cardTitle">Contact</h1>
                  </CardTitle>
                  <ListGroup className="listgroup">
                  <h5 className="text-center mt-3 links">Links</h5>
                    <div className="row mx-auto">
                      <ListGroupItem
                        style={{ backgroundColor: "#333", borderColor: "#333" }}
                        className="text-center contact-icons"
                      >
                        <ListGroupItemHeading>
                          {" "}
                          <FontAwesomeIcon
                            size="lg"
                            className="iconz mx-auto"
                            icon={faLinkedinIn}
                          />
                        </ListGroupItemHeading>
                        <Button
                          target="_blank"
                          href="https://linkedin.com/in/spacetrev"
                          className="btn btn-sm"
                          outline
                        >
                          Go
                        </Button>
                      </ListGroupItem>
                      <ListGroupItem
                        style={{ backgroundColor: "#333", borderColor: "#333" }}
                        className="text-center contact-icons"
                      >
                        <ListGroupItemHeading>
                          {" "}
                          <FontAwesomeIcon
                            size="lg"
                            className="iconz mx-auto"
                            icon={faGithub}
                          />
                        </ListGroupItemHeading>
                        <Button
                          target="_blank"
                          href="https://github.com/spacetrev"
                          className="btn btn-sm"
                          outline
                        >
                          Go
                        </Button>
                      </ListGroupItem>
                      <ListGroupItem
                        style={{ backgroundColor: "#333", borderColor: "#333" }}
                        className="text-center contact-icons"
                      >
                        <ListGroupItemHeading>
                          {" "}
                          <FontAwesomeIcon
                            size="lg"
                            className="iconz mx-auto"
                            icon={faStackOverflow}
                          />
                        </ListGroupItemHeading>
                        <Button
                          target="_blank"
                          href="http://stackoverflow.com/story/spacetrev"
                          className="btn btn-sm"
                          outline
                        >
                          Go
                        </Button>
                      </ListGroupItem>
                    </div>
                    <div className="row mx-auto">
                      <ListGroupItem
                        style={{ backgroundColor: "#333", borderColor: "#333" }}
                        className="text-center contact-item"
                      >
                        <ListGroupItemHeading>Email</ListGroupItemHeading>
                        <ListGroupItemText className="contact-txt">
                          trevbdev@gmail.com
                        </ListGroupItemText>
                      </ListGroupItem>
                      <ListGroupItem
                        style={{ backgroundColor: "#333", borderColor: "#333" }}
                        className="text-center contact-item"
                      >
                        <ListGroupItemHeading>Phone</ListGroupItemHeading>
                        <ListGroupItemText className="contact-txt">(303)829-9013</ListGroupItemText>
                      </ListGroupItem>
                    </div>
                  </ListGroup>
                  <Button
                    className="text-center btn btn-sm m-1 mt-2 mb-4 flip-for-face"
                    onClick={() => this.flippyHorizontal.toggle()}
                  >
                    Flip for my face
                  </Button>

                  <CardText className="mx-auto cardText2 mt-1">
                    Apps/Projects
                  </CardText>
                  <div className="mx-auto">
                    <Button
                      // flipOnClick={true}
                      className="btn-md m-1"
                      onClick={() => this.tl.play()}
                    >
                      Show
                    </Button>
                    <Button
                      className="btn-md m-1"
                      onClick={() => this.tl.reverse()}
                    >
                      Hide
                    </Button>
                  </div>
                </Card>
              </BackSide>
            </Flippy>
          </div>
        </div>
        <div className="row mt-3">{elements}</div>
      </div>
    );
  }
}

export default Header;
// <CardImg className="picsTest mx-auto" src={require("../../resources/pics" + element.video)}>
// </CardImg>
