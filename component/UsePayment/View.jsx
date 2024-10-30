"use client";
import PaymentTimer from "../PaymentTimer";
import PaymentDetails from "../PaymentDetails";
import { useMediaQuery } from "react-responsive";
import { Col, Row } from "antd";
import QrCode from "../QrCode";

const MLBBPayment = () => {
  const isMobile = useMediaQuery({ maxWidth: 768 });

  return (
    <div
      style={{
        width: isMobile ? "90%" : "80%",
        margin: "auto",
        marginTop: "50px",
      }}
    >
      <Row gutter={[20, 20]}>
        <Col xs={24} md={8} lg={8}>
          <PaymentTimer />
          <QrCode />
        </Col>
        <Col xs={24} md={16} lg={16}>
          <PaymentDetails />
        </Col>
      </Row>
    </div>
  );
};

export default MLBBPayment;
