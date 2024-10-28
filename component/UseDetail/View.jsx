import React from "react";
import DiamondProductCard from "../DiamondProductCard.jsx";
import { Col, Row } from "antd";

const View = () => {
  return (
    <div style={{ width: "100vw" }}>
      <div
        style={{
          height: "200px",
          backgroundColor: "white",
          width: "100%",
        }}
      ></div>
      <div
        style={{
          width: "90%",
          margin: "auto",
          padding: "16px",
          marginTop: "-200px",
        }}
      >
        <img src="/images/banner.png" width="100%" height={480} />
        <div
          style={{
            backgroundColor: "rgba(40, 40, 40, 1)",
          }}
        ></div>
        {/* <Row>
          <Col>
            <DiamondProductCard />
          </Col>
          <Col>
            <DiamondProductCard />
          </Col>
        </Row> */}
      </div>
    </div>
  );
};

export default View;
