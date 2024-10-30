"use client";
import React from "react";
import { Col, Row } from "antd";
import Image from "next/image";
import GameTopupForm from "../GameTopupForm.jsx";
import PromoCodeSection from "../PromoCodeSection.jsx";
import PaymentMethodSection from "../PaymentMethodSection.jsx";
import ListDiamond from "../ListDiamond.jsx";
import { useMediaQuery } from "react-responsive";
import MobileViewDetail from "../MobilleViewDetail.jsx";
import FooterPay from "../FooterPay.jsx";
import DeskstopViewDetail from "../DeskstopViewDetail.jsx";

const View = () => {
  const isMobile = useMediaQuery({ maxWidth: 768 });

  return (
    <div style={{ width: "100vw" }}>
      <div
        style={{
          backgroundColor: "white",
          width: "100%",
          height: isMobile ? "50vh" : "200px",
        }}
      ></div>
      <div
        style={{
          width: isMobile ? "100%" : "90%",
          margin: "auto",
          padding: "16px",
          marginTop: isMobile ? "-300px" : "-200px",
        }}
      >
        <div>
          {isMobile ? (
            <MobileViewDetail />
          ) : (
            <div>
              <img
                src="/images/banner.png"
                style={{
                  width: "100%",
                  height: "180px",
                }}
                alt=""
              />
              <DeskstopViewDetail />
            </div>
          )}
        </div>
        <Row
          style={{
            width: "100%",
            padding: isMobile ? "0px" : "0px 20px",
            marginTop: isMobile ? "70px" : "50px",
          }}
          gutter={[16, 16]}
        >
          <Col xs={24} sm={24} md={16} lg={16}>
            <div
              style={{
                backgroundColor: "rgba(40, 40, 40, 1)",
                borderRadius: "10px",
                padding: "16px",
              }}
            >
              <h1>Pilih Product</h1>
              <button
                style={{
                  padding: "16px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  backgroundColor: "transparent",
                  border: "1px solid white",
                  borderRadius: "10px",
                  marginTop: "20px",
                }}
              >
                <Image
                  src="/images/diamond.png"
                  alt=""
                  width={40}
                  height={40}
                />
                <h3>Diamond</h3>
              </button>
              <div
                style={{
                  width: "100%",
                  marginTop: "20px",
                }}
              >
                <hr style={{ borderColor: "gray" }} />
              </div>
              <ListDiamond />
            </div>
          </Col>
          <Col xs={24} sm={24} md={8} lg={8}>
            <div
              style={{
                backgroundColor: "rgba(40, 40, 40, 1)",
                borderRadius: "10px",
              }}
            >
              <GameTopupForm />
            </div>
            <div
              style={{
                backgroundColor: "rgba(40, 40, 40, 1)",
                borderRadius: "10px",
                marginTop: 20,
                padding: 20,
              }}
            >
              <PromoCodeSection />
            </div>
            <div
              style={{
                backgroundColor: "rgba(40, 40, 40, 1)",
                borderRadius: "10px",
                marginTop: 20,
              }}
            >
              <PaymentMethodSection />
            </div>
          </Col>
        </Row>
      </div>
      <FooterPay />
    </div>
  );
};

export default View;
