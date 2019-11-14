import React, { Component } from "react";
import { Container, Row, Col, Button, Form, Spinner } from "react-bootstrap";
import UilHeart from "@iconscout/react-unicons/icons/uil-heart";
import UilPlus from "@iconscout/react-unicons/icons/uil-plus";
import UilSmile from "@iconscout/react-unicons/icons/uil-smile";

import TextLoop from "react-text-loop";

class Landing extends Component {
  state = {
    name: "Greg"
  };
  renderHeaderText() {
    var options = [
      "Toatally Compatable",
      "Get Doated On",
      "Your Relationship Antidoat"
    ];
    var op = options[Math.floor(Math.random() * options.length)];
    return op;
  }
  render() {
    return (
      <div className="landing-container center-everything">
        <Container className="center-everything">
          <Row>
            <Col>
              {/* <TextLoop>
                <h1>Toatally Compatable</h1>
                <h1>Get Doated On</h1>
                <h1>Your Relationship Antidoat</h1>
              </TextLoop> */}

              <div className="center-everything-row">
                {/* <UilHeart size="70" color="#000000" />
                <UilPlus size="70" color="#000000" />
                <img
                  className="oatly-logo-small"
                  src={
                    "https://cdn.shopify.com/s/files/1/2113/2635/t/29/assets/logo.png?2028"
                  }
                /> */}
              </div>
              <div>
                {/* <h1>{this.renderHeaderText()}</h1> */}
                {/* <p>
                  Let's be honest. Finding love is not quite like is used to be.
                  The days of high school sweethearts, prom dates, and
                  daydreaming have been replaced by swipes, superlikes, and
                  miserable pickup lines.
                </p>
                <p>
                  As if this wasn't enough, event going on dates has changed.
                  Finding enough common ground to hold a steady conversation is
                  getting harder and harder, and trust us, talking about your
                  love of The Daily is only good for the first three dates.
                </p> */}
                <h1>Let's Fix Loneliness</h1>
                {/* <h5>A Dating Service for Oat Milk Drinkers</h5> */}
                <div className="center-everything-row">
                  <UilSmile size="100" color="#000000" />
                  <UilPlus size="70" color="#000000" />
                  <UilSmile size="100" color="#000000" />
                  <UilPlus size="70" color="#000000" />
                  <img
                    className="oatly-logo-small"
                    src={
                      "https://cdn.shopify.com/s/files/1/2113/2635/t/29/assets/logo.png?2028"
                    }
                  />
                  <h1>=</h1>
                  <UilHeart size="90" color="#000000" />
                </div>
                <br />
                <h2>
                  Happiness Awaits, text <span className="heavier">LOVE</span>{" "}
                  to <span className="heavier">(571) 206-0489</span> to get
                  started
                </h2>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Landing;
