import { Card, Typography, Row, Col, Button, Space, Divider } from "antd";
import { CopyOutlined, QuestionCircleOutlined } from "@ant-design/icons";
const { Title, Text } = Typography;

const PaymentTimer = () => {
  return (
    <Card
      style={{
        backgroundColor: "#1f1f1f",
        borderRadius: 8,
        border: "none",
        padding: "16px",
      }}
    >
      <Space direction="vertical" style={{ width: "100%" }} align="center">
        <Title level={4} style={{ color: "white", margin: 0 }}>
          MENUNGGU PEMBAYARAN
        </Title>
        <Text style={{ color: "#999999" }}>
          Selesaikan pembayaran sebelum waktu habis
        </Text>

        <Row gutter={16} style={{ marginTop: 24, marginBottom: 24 }}>
          <Col>
            <Card
              style={{
                backgroundColor: "#2c2c2c",
                width: 96,
                textAlign: "center",
                border: "none",
              }}
            >
              <Title level={2} style={{ color: "white", margin: 0 }}>
                7
              </Title>
              <Text style={{ color: "#999999" }}>Jam</Text>
            </Card>
          </Col>
          <Col>
            <Card
              style={{
                backgroundColor: "#2c2c2c",
                width: 96,
                textAlign: "center",
                border: "none",
              }}
            >
              <Title level={2} style={{ color: "white", margin: 0 }}>
                29
              </Title>
              <Text style={{ color: "#999999" }}>Menit</Text>
            </Card>
          </Col>
          <Col>
            <Card
              style={{
                backgroundColor: "#2c2c2c",
                width: 96,
                textAlign: "center",
                border: "none",
              }}
            >
              <Title level={2} style={{ color: "white", margin: 0 }}>
                35
              </Title>
              <Text style={{ color: "#999999" }}>Detik</Text>
            </Card>
          </Col>
        </Row>

        <Text style={{ color: "#999999" }}>
          Agar Pesanan Kamu Tidak Expired
        </Text>
      </Space>
    </Card>
  );
};

export default PaymentTimer;
