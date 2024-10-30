import React from "react";
import { Row, Col, Typography, Space } from "antd";
import {
  CustomerServiceOutlined,
  SafetyCertificateOutlined,
} from "@ant-design/icons";
import { useSelector } from "react-redux";

const { Title, Text } = Typography;

const DeskstopViewDetail = () => {
  const dataDetail = useSelector(
    (state) => state.dataSlicePersisted.dataDetail
  );

  console.log(dataDetail);

  const headerStyle = {
    background:
      "linear-gradient(90deg, rgba(88,58,121,1) 0%, rgba(145,85,204,1) 100%)",
    padding: "20px",
    borderRadius: "16px",
    position: "relative",
    overflow: "hidden",
    marginTop: "-50px",
  };

  const overlayStyle = {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background:
      "linear-gradient(180deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%)",
    backdropFilter: "blur(10px)",
    zIndex: 1,
  };

  const contentStyle = {
    position: "relative",
    zIndex: 2,
  };

  const iconTextStyle = {
    color: "white",
    display: "flex",
    alignItems: "center",
    gap: "8px",
    fontSize: "14px",
  };

  return (
    <div style={headerStyle}>
      <div style={overlayStyle} />
      <div style={contentStyle}>
        <Row gutter={16} align="middle">
          <Col>
            <img
              src={dataDetail?.image}
              alt="MLBB"
              style={{
                borderRadius: "16px",
                width: "80px",
                height: "80px",
              }}
            />
          </Col>
          <Col flex="1">
            <Space direction="vertical" size={4}>
              <Title
                level={3}
                style={{
                  color: "white",
                  margin: 0,
                  fontSize: "24px",
                  fontWeight: "600",
                }}
              >
                {dataDetail.name}
              </Title>
              <Text style={{ color: "rgba(255,255,255,0.8)" }}>
                {dataDetail.publisher}
              </Text>
              <Row gutter={24}>
                <Col>
                  <div style={iconTextStyle}>
                    <CustomerServiceOutlined />
                    <span>Customer Service 24/7</span>
                  </div>
                </Col>
                <Col>
                  <div style={iconTextStyle}>
                    <SafetyCertificateOutlined />
                    <span>Official Distributor</span>
                  </div>
                </Col>
              </Row>
            </Space>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default DeskstopViewDetail;
