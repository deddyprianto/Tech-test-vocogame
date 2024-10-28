import React from "react";
import { Row, Col, Card, Image, Typography } from "antd";
import { useMediaQuery } from "react-responsive";
import styled from "styled-components";

const { Text } = Typography;

const ScrollContainer = styled.div`
  @media (max-width: 768px) {
    overflow-x: auto;
    white-space: nowrap;
    -webkit-overflow-scrolling: touch;
    &::-webkit-scrollbar {
      display: none;
    }
    -ms-overflow-style: none;
    scrollbar-width: none;
  }
`;

const MobileRow = styled(Row)`
  @media (max-width: 768px) {
    display: inline-flex;
    flex-wrap: nowrap;
  }
`;

const MobileCol = styled(Col)`
  @media (max-width: 768px) {
    width: 300px;
    flex: 0 0 auto;
    white-space: normal;
  }
`;

const GameCards = () => {
  const isMobile = useMediaQuery({ maxWidth: 768 });

  return (
    <ScrollContainer>
      <MobileRow gutter={[16, 16]}>
        {[...Array(8)].map((_, index) => (
          <MobileCol span={isMobile ? null : 6} key={index}>
            <Card
              style={{
                padding: 0,
                margin: 0,
                background: "#1a1a1a",
                borderRadius: 8,
              }}
            >
              <div className="custom-card">
                <Image
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8Z-YKoI4_zW7pIwWILDW414BESPx34WrnGw&s"
                  alt="Diamond"
                  height={40}
                  width={40}
                  style={{
                    borderRadius: "1.78px 1.78px 0px 0px",
                  }}
                />
                <div>
                  <div style={{ color: "white" }}>200 Diamonds</div>
                  <Text style={{ color: "white" }}>
                    Mobile Legends Bang Bang
                  </Text>
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  padding: "16px",
                }}
              >
                <div
                  style={{
                    width: "61px",
                    height: "24px",
                    borderRadius: "100px",
                    color: "white",
                    backgroundColor: "#C72323",
                    textAlign: "center",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  Promo
                </div>
                <div
                  style={{
                    padding: 12,
                    textAlign: "right",
                    color: "#ff4d4f",
                  }}
                >
                  -15.0%
                </div>
              </div>
            </Card>
          </MobileCol>
        ))}
      </MobileRow>
    </ScrollContainer>
  );
};

export default GameCards;
