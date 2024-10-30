import React from "react";
import { Card, Typography, Row, Col, Button, Space, Divider } from "antd";
import { CopyOutlined, QuestionCircleOutlined } from "@ant-design/icons";
import { useSelector } from "react-redux";
import Image from "next/image";

const { Title, Text } = Typography;

const PaymentDetails = () => {
  const dataDetail = useSelector(
    (state) => state.dataSlicePersisted.dataDetail
  );
  return (
    <Card
      style={{
        backgroundColor: "#1f1f1f",
        borderRadius: 8,
        border: "none",
        padding: "16px",
        marginBottom: "16px",
      }}
    >
      <Space direction="vertical" style={{ width: "100%" }} size="large">
        <Row justify="space-between" align="middle">
          <Col>
            <Text style={{ color: "#999999", display: "block" }}>
              Tanggal Pembelian
            </Text>
            <Text style={{ color: "white" }}>08/09/2023</Text>
          </Col>
          <Col>
            <Text style={{ color: "#999999", display: "block" }}>
              Nomor Pesanan
            </Text>
            <Space>
              <Text style={{ color: "white" }}>
                ML-1691549057-VLMEW1WN0FA6MIG
              </Text>
              <CopyOutlined style={{ color: "#999999", cursor: "pointer" }} />
            </Space>
          </Col>
          <Col>
            <Text style={{ color: "#999999", display: "block" }}>
              Metode Pembayaran
            </Text>
            <Text style={{ color: "white" }}>QRIS Untuk Semua Pembayaran</Text>
          </Col>
        </Row>

        <Divider style={{ borderColor: "#2c2c2c", margin: "12px 0" }} />

        <Row gutter={16} align="middle">
          <Col>
            {dataDetail.image ? (
              <Image src={dataDetail.image} width={80} height={80} />
            ) : (
              <Card
                style={{
                  backgroundColor: "#2c2c2c",
                  width: 64,
                  height: 64,
                  border: "none",
                }}
              />
            )}
          </Col>
          <Col>
            <Title level={4} style={{ color: "white", margin: 0 }}>
              {dataDetail.name}
            </Title>
            <Text style={{ color: "#999999" }}>Moonton</Text>
          </Col>
        </Row>

        <Space direction="vertical" style={{ width: "100%" }} size="middle">
          <Title level={5} style={{ color: "white", margin: 0 }}>
            Detail
          </Title>

          <Row justify="space-between">
            <Col>
              <Text style={{ color: "#999999", display: "block" }}>Item</Text>
              <Text style={{ color: "white" }}>5 Diamond</Text>
            </Col>
            <Col>
              <Text style={{ color: "#999999", display: "block" }}>Harga</Text>
              <Text style={{ color: "white" }}>Rp 1.500,-</Text>
            </Col>
          </Row>

          <Row justify="space-between">
            <Col>
              <Text style={{ color: "#999999", display: "block" }}>
                USER ID
              </Text>
              <Text style={{ color: "white" }}>924936253</Text>
            </Col>
            <Col>
              <Text style={{ color: "#999999", display: "block" }}>Fee</Text>
              <Text style={{ color: "white" }}>Rp 45,-</Text>
            </Col>
          </Row>

          <Row justify="space-between">
            <Col>
              <Text style={{ color: "#999999", display: "block" }}>
                ZONE ID
              </Text>
              <Text style={{ color: "white" }}>12666</Text>
            </Col>
            <Col>
              <Text style={{ color: "#999999", display: "block" }}>
                Kode Unik
              </Text>
              <Text style={{ color: "white" }}>338</Text>
            </Col>
          </Row>

          <Row>
            <Col>
              <Text style={{ color: "#999999", display: "block" }}>
                Username
              </Text>
              <Text style={{ color: "white" }}>SilverQuens</Text>
            </Col>
          </Row>
        </Space>

        <Divider style={{ borderColor: "#2c2c2c", margin: "12px 0" }} />

        <Row
          justify="space-between"
          align="middle"
          style={{
            backgroundColor: "white",
            borderRadius: "10px",
            padding: "16px",
          }}
        >
          <Col>
            <Text style={{ color: "#999999", display: "block" }}>
              Total Pembayaran
            </Text>
            <Text
              style={{ color: "#4CAF50", fontSize: 20, fontWeight: "bold" }}
            >
              Rp 1.883,-
            </Text>
          </Col>
          <Col>
            <CopyOutlined
              style={{ color: "#999999", fontSize: 20, cursor: "pointer" }}
            />
          </Col>
        </Row>

        <Button
          type="text"
          style={{
            width: "100%",
            color: "#999999",
            padding: "12px",
          }}
        >
          <p>
            Sudah bayar namun pesanan belum masuk? <br /> Hubungi kamasdi
          </p>
        </Button>
      </Space>
    </Card>
  );
};

export default PaymentDetails;
