import React, { Component } from "react";
import { Container, Row, Col, Button } from "reactstrap";

class Portfolio extends Component {
  render() {
    return (
      <section id="portfolio">
        <Container fluid={true} className="p-0">
          <Row className="no-gutters">
            <Col lg="4" sm="6">
              <a
                className="portfolio-box"
                href="assets/img/portfolio/fullsize/1.jpg"
              >
                <img
                  className="img-fluid"
                  src="assets/img/portfolio/thumbnails/1.jpg"
                  alt=""
                />
                <div className="portfolio-box-caption">
                  <div className="project-category text-white-50">Category</div>
                  <div className="project-name">Project Name</div>
                </div>
              </a>
            </Col>
            <Col lg="4" sm="6">
              <a
                className="portfolio-box"
                href="assets/img/portfolio/fullsize/2.jpg"
              >
                <img
                  className="img-fluid"
                  src="assets/img/portfolio/thumbnails/2.jpg"
                  alt=""
                />
                <div className="portfolio-box-caption">
                  <div className="project-category text-white-50">Category</div>
                  <div className="project-name">Project Name</div>
                </div>
              </a>
            </Col>
            <Col lg="4" sm="6">
              <a
                className="portfolio-box"
                href="assets/img/portfolio/fullsize/3.jpg"
              >
                <img
                  className="img-fluid"
                  src="assets/img/portfolio/thumbnails/3.jpg"
                  alt=""
                />
                <div className="portfolio-box-caption">
                  <div className="project-category text-white-50">Category</div>
                  <div className="project-name">Project Name</div>
                </div>
              </a>
            </Col>
            <Col lg="4" sm="6">
              <a
                className="portfolio-box"
                href="assets/img/portfolio/fullsize/4.jpg"
              >
                <img
                  className="img-fluid"
                  src="assets/img/portfolio/thumbnails/4.jpg"
                  alt=""
                />
                <div className="portfolio-box-caption">
                  <div className="project-category text-white-50">Category</div>
                  <div className="project-name">Project Name</div>
                </div>
              </a>
            </Col>
            <Col lg="4" sm="6">
              <a
                className="portfolio-box"
                href="../assets/img/portfolio/fullsize/5.jpg"
              >
                <img
                  className="img-fluid"
                  src="../assets/img/portfolio/thumbnails/5.jpg"
                  alt=""
                />
                <div className="portfolio-box-caption">
                  <div className="project-category text-white-50">Category</div>
                  <div className="project-name">Project Name</div>
                </div>
              </a>
            </Col>
            <Col lg="4" sm="6">
              <a className="portfolio-box" href="#help">
                <img
                  className="img-fluid"
                  src="assets/img/portfolio/thumbnails/6.jpg"
                  alt=""
                />
                <div className="portfolio-box-caption p-3">
                  <div className="project-category text-white-50">Category</div>
                  <div className="project-name">Project Name</div>
                </div>
              </a>
            </Col>
          </Row>
        </Container>
      </section>
    );
  }
}

export default Portfolio;
