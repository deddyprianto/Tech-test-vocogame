"use client";

import React from "react";
import { Card, Typography, Space, Flex, Badge } from "antd";
import styled from "@emotion/styled";
import Image from "next/image";

const { Text } = Typography;

// Styled components for custom styling
const CardWrapper = styled.div`
  position: relative;
`;

const StyledCard = styled(Card)`
  .ant-card-body {
    padding: 20px;
    background: linear-gradient(
      145deg,
      rgba(40, 40, 40, 0.9) 0%,
      rgba(20, 20, 20, 0.9) 100%
    );
  }
  background: #1e1e1e;
  border: 1px solid #404040;
  border-radius: 8px;
  overflow: hidden;
`;

const DiamondProductCard = ({ data }) => {
  return (
    <Badge.Ribbon text="15%" color="white">
      <CardWrapper>
        <StyledCard>
          <Space
            direction="vertical"
            size="small"
            style={{ width: "100%", padding: "16px" }}
          >
            <Flex justify="space-between" align="center">
              <Text
                style={{
                  color: "white",
                  fontSize: "24px",
                  fontWeight: 600,
                  margin: 0,
                }}
              >
                {data.name}
              </Text>
              <Image
                style={{
                  position: "absolute",
                  top: 50,
                  right: 4,
                }}
                src={data.iconUrl}
                width={50}
                height={50}
              />
            </Flex>

            <Text
              style={{
                color: "#9CA3AF",
                fontSize: "14px",
                display: "block",
                margin: 0,
              }}
            >
              (10839 + 2137 Bonus)
            </Text>

            <Space direction="vertical" size={4} style={{ marginTop: "16px" }}>
              <Text
                style={{
                  color: "#4ADE80",
                  fontSize: "20px",
                  fontWeight: 600,
                  margin: 0,
                }}
              >
                Rp {data.price},-
              </Text>
              <Text
                style={{
                  color: "#6B7280",
                  textDecoration: "line-through",
                  margin: 0,
                }}
              >
                Rp {data.priceDiscount},-
              </Text>
            </Space>
          </Space>
        </StyledCard>
      </CardWrapper>
    </Badge.Ribbon>
  );
};

export default DiamondProductCard;
