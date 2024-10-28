"use client";
import React from "react";
import { Layout, Card, Row, Col, Badge, Typography, Carousel } from "antd";
import styled from "@emotion/styled";
import GameFinder from "../GameFinder";
import GameCards from "../GameCards";

const { Header, Content } = Layout;
const { Title, Text } = Typography;

// Styled Components
const StyledCarousel = styled(Carousel)`
  .slick-dots li button {
    background: white;
  }
  .slick-dots li.slick-active button {
    background: white;
  }
`;

const StyledContent = styled(Content)`
  min-height: 100vh;
  background: #121212;
`;

const GameCard = styled(Card)`
  background: #2a2a2a;
  border-radius: 12px;
  border: none;
  overflow: hidden;

  .ant-card-cover img {
    border-radius: 12px 12px 0 0;
  }

  .ant-card-body {
    padding: 12px;
  }

  &:hover {
    transform: translateY(-5px);
    transition: all 0.3s ease;
  }
`;

const FlashSaleSection = styled.div`
  padding: 24px;
  border-radius: 12px;
  margin: 24px 0;
  margin-top: 100px;
`;

const CountdownTimer = styled.div`
  display: flex;
  gap: 8px;
  margin-top: 5px;
  margin-left: 10px;
  .time-box {
    background: #ff4d4f;
    color: white;
    padding: 4px 8px;
    border-radius: 4px;
  }
`;

export default function View({ games, carouselContent }) {
  return (
    <StyledContent>
      <div
        style={{
          backgroundImage: "url('./images/background.jpeg')",
        }}
      >
        <div
          style={{
            maxWidth: 1200,
            margin: "0 auto",
            padding: "24px",
          }}
        >
          <StyledCarousel autoplay>
            {carouselContent.map((content, index) => (
              <div key={index}>
                <div
                  style={{
                    height: 400,
                    background:
                      "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                    borderRadius: 12,
                    padding: 32,
                    color: "white",
                  }}
                >
                  <Title level={2} style={{ color: "white" }}>
                    {content.title}
                  </Title>
                  <Text style={{ color: "white" }}>{content.description}</Text>
                </div>
              </div>
            ))}
          </StyledCarousel>

          <Title level={3} style={{ color: "white", marginTop: 20 }}>
            Starlight November 2023: Melissa Nightwalker
          </Title>
          <Title level={5} style={{ color: "white", margin: 0 }}>
            Segera dapatkan skin startlight Melissa Nightwalker dengan topup
            murah hanya di VocaGame.
          </Title>

          {/* Flash Sale Section */}
          <FlashSaleSection>
            <Row>
              <Col>
                <Title level={3} style={{ color: "white", margin: 0 }}>
                  FLASH SALE
                </Title>
              </Col>
              <Col>
                <CountdownTimer>
                  <span className="time-box">1</span>
                  <span className="time-box">2</span>
                  <span className="time-box">2</span>
                  <span className="time-box">5</span>
                </CountdownTimer>
              </Col>
            </Row>

            <Text style={{ color: "white" }}>
              Segera dapatkan penawaran terbatas dari kami, jangan sampai
              ketinggalan
            </Text>
            <div style={{ marginTop: 20 }}></div>
            <GameCards />
          </FlashSaleSection>
        </div>
      </div>
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "24px",
        }}
      >
        <div style={{ marginTop: 48 }}>
          <Title level={3} style={{ color: "white" }}>
            Temukan Game Favorit
          </Title>
          <GameFinder games={games} />
        </div>
      </div>
    </StyledContent>
  );
}
