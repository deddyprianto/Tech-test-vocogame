"use client";
import React from "react";

import { Layout, Row, Col, Typography } from "antd";

const { Footer } = Layout;
const { Title, Text } = Typography;
import styled from "@emotion/styled";

// Styled Components

const Logo = styled.div`
  color: white;
  font-size: 20px;
  display: flex;
  align-items: center;
  gap: 8px;
`;

const FooterComponent = () => {
  return (
    <Footer style={{ background: "#1a1a1a", color: "white" }}>
      <Row gutter={[32, 32]}>
        <Col span={6}>
          <Logo>YOURWEBSITE LOGO</Logo>
        </Col>
        <Col span={6}>
          <Title level={4} style={{ color: "white" }}>
            PETA SITUS
          </Title>
          <ul style={{ listStyle: "none", padding: 0 }}>
            <li>Beranda</li>
            <li>Semua Game</li>
            <li>Masuk</li>
            <li>Daftar</li>
          </ul>
        </Col>
        <Col span={6}>
          <Title level={4} style={{ color: "white" }}>
            TOP UP LAINNYA
          </Title>
          <ul style={{ listStyle: "none", padding: 0 }}>
            <li>Mobile Legends</li>
            <li>Free Fire</li>
            <li>PUBG Mobile</li>
            <li>Undawn</li>
          </ul>
        </Col>
        <Col span={6}>
          <Title level={4} style={{ color: "white" }}>
            IKUTI KAMI
          </Title>
          {/* Add social media icons here */}
          <Title level={4} style={{ color: "white", marginTop: 24 }}>
            PERTANYAAN BISNIS
          </Title>
          <Text style={{ color: "white" }}>contact@email.id</Text>
        </Col>
      </Row>
      <div
        style={{
          marginTop: 48,
          textAlign: "center",
          borderTop: "1px solid #333",
          paddingTop: 24,
        }}
      >
        <Row justify="space-between">
          <Col>© PT BERMAIN BERSAMA INDONESIA, 2023</Col>
          <Col>
            <span style={{ marginRight: 24 }}>Kebijakan Privasi</span>
            <span style={{ marginRight: 24 }}>Terms of Service</span>
            <span>Hubungi Kami</span>
          </Col>
        </Row>
      </div>
    </Footer>
  );
};

export default FooterComponent;
