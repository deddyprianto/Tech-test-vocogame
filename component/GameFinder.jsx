import React, { useState, useEffect } from "react";
import { Tabs, Card, Row, Col, Typography, Layout } from "antd";
import { useMediaQuery } from "react-responsive";
import styled from "styled-components";
import { useRouter } from "next/navigation";

const { Title } = Typography;
const { Content } = Layout;

// Styled Components

const StyledContent = styled(Content)`
  padding: 24px;
`;

const StyledTitle = styled(Title)`
  color: #fff !important;
  margin-bottom: 24px !important;
`;

const GameContainer = styled.div`
  background: #1f1f1f;
  border-radius: 12px;
  padding: 16px;
  margin-bottom: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const GameImage = styled.img`
  width: 100%;
  max-width: 280px;
  height: 280px;
  object-fit: cover;
  border-radius: 12px;
  margin-bottom: 12px;
  border: 2px solid rgba(255, 255, 255, 0.1);
`;

const GameTitle = styled.h3`
  color: #fff;
  margin: 8px 0;
  font-size: 18px;
  text-align: center;
`;

const GamePublisher = styled.p`
  color: rgba(255, 255, 255, 0.45);
  margin: 0;
  text-align: center;
`;

const StyledTabs = styled(Tabs)`
  .ant-tabs-nav {
    &::before {
      border-bottom: 1px solid #303030;
    }
  }
  .ant-tabs-tab {
    color: #949494;
    &:hover {
      color: black;
      background-color: white;
      border-radius: 10px;
    }
  }
  .ant-tabs-tab-active .ant-tabs-tab-btn {
    color: #fff !important;
  }
  .ant-tabs-ink-bar {
    background: #1890ff;
  }
`;

const GameFinder = ({ games }) => {
  const router = useRouter();
  const isMobile = useMediaQuery({ maxWidth: 768 });

  const filterGamesByType = (type) => {
    return games.filter((game) => game.category === type);
  };

  const GameCard = ({ game }) => (
    <GameContainer onClick={() => router.push("/detail")}>
      <GameImage alt={game.title} src={game.image} />
      <GameTitle>{game.title}</GameTitle>
      <GamePublisher>{game.publisher}</GamePublisher>
    </GameContainer>
  );

  const GameGrid = ({ games }) => {
    if (games?.length === 0) {
      return (
        <p style={{ color: "#949494", textAlign: "center" }}>Data kosong</p>
      );
    }
    return (
      <Row gutter={[24, 24]}>
        {games.map((game) => (
          <Col key={game.id} xs={24} md={8}>
            <GameCard game={game} />
          </Col>
        ))}
      </Row>
    );
  };

  const items = [
    {
      key: "rekomendasi",
      label: "Rekomendasi",
      children: <GameGrid games={games} />,
    },
    {
      key: "mobile",
      label: "Mobile Game",
      children: <GameGrid games={filterGamesByType("MOBILE")} />,
    },
    {
      key: "pc",
      label: "PC Game",
      children: <GameGrid games={filterGamesByType("PC")} />,
    },
  ];

  return (
    <StyledContent>
      <StyledTabs
        tabPosition={isMobile ? "top" : "left"}
        defaultActiveKey="rekomendasi"
        items={items}
        size={isMobile ? "small" : "large"}
        centered={!isMobile}
      />
    </StyledContent>
  );
};

export default GameFinder;
