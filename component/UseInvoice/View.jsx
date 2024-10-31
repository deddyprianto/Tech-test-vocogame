"use client";
import React from "react";
import {
  Card,
  Typography,
  Space,
  Rate,
  Input,
  Button,
  Row,
  Col,
  Badge,
  Divider,
} from "antd";
import { CopyOutlined, MessageOutlined } from "@ant-design/icons";
import { useSelector } from "react-redux";
import Image from "next/image";

const { Title, Text } = Typography;
const { TextArea } = Input;

const Invoice = () => {
  const orderDetails = useSelector(
    (state) => state.dataSlicePersisted.dataDetail
  );

  return (
    <div
      style={{ width: "80%", margin: "auto", marginTop: 16, marginBottom: 16 }}
    >
      <Card
        bordered={false}
        style={{
          background: "#1e2124",
          color: "white",
          borderRadius: "12px",
        }}
      >
        {/* Header Section */}
        <Row
          justify="space-between"
          align="middle"
          style={{
            marginBottom: 24,
            padding: 16,
          }}
        >
          <Col>
            <Space>
              <MessageOutlined style={{ fontSize: 24, color: "#4CAF50" }} />
              <div>
                <Text style={{ color: "#808080" }}>Nomor Pesanan</Text>
                <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                  <Text style={{ color: "white" }}>
                    {orderDetails.orderNumber}
                  </Text>
                  <CopyOutlined style={{ color: "#808080" }} />
                </div>
              </div>
            </Space>
          </Col>
          <Col>
            <Badge
              style={{
                backgroundColor: "rgba(22, 200, 41, 1)",
                color: "white",
                padding: "8px 16px",
                borderRadius: "6px",
                height: 41,
              }}
              count="Pesanan Berhasil"
            />
          </Col>
        </Row>

        {/* Game Info Section */}
        <div
          style={{
            padding: 16,
          }}
        >
          <Card
            style={{
              backgroundColor: "#2a2d31",
              marginBottom: 24,
              borderRadius: "8px",
            }}
            bordered={false}
          >
            <Space align="start">
              <div
                style={{
                  width: 60,
                  height: 60,
                  borderRadius: 8,
                  background: "#333",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Image
                  src={orderDetails?.image}
                  width={40}
                  height={40}
                  alt="logo games"
                />
              </div>
              <div>
                <Title level={4} style={{ color: "white", margin: 0 }}>
                  {orderDetails.name}
                </Title>
                <Text style={{ color: "#808080" }}>
                  {orderDetails.publisher}
                </Text>
              </div>
            </Space>
          </Card>
        </div>

        {/* Details Section */}
        <div
          style={{
            padding: 16,
          }}
        >
          <Title level={5} style={{ color: "white", marginBottom: 16 }}>
            Detail
          </Title>
          {orderDetails?.items.map((item) => {
            return (
              <Row gutter={[16, 16]} key={item.id}>
                <Col span={12}>
                  <Space
                    direction="vertical"
                    size="small"
                    style={{ width: "100%" }}
                  >
                    <Text style={{ color: "#808080" }}>Name</Text>
                    <Text style={{ color: "white" }}>{item.name}</Text>
                    <Text style={{ color: "#808080", marginTop: 8 }}>
                      USER ID
                    </Text>
                    <Text style={{ color: "white" }}>{item.id}</Text>
                  </Space>
                </Col>
                <Col span={12}>
                  <Space
                    direction="vertical"
                    size="small"
                    style={{ width: "100%" }}
                  >
                    <Text style={{ color: "#808080" }}>Harga</Text>
                    <Text style={{ color: "white" }}>{item.price}</Text>

                    <Text style={{ color: "#808080", marginTop: 8 }}>Fee</Text>
                    <Text style={{ color: "white" }}>{item.priceDiscount}</Text>
                  </Space>
                </Col>
              </Row>
            );
          })}

          <Divider style={{ borderColor: "#333" }} />

          <Space direction="vertical" size="small" style={{ width: "100%" }}>
            <Text style={{ color: "#808080" }}>Tanggal Pembelian</Text>
            <Text style={{ color: "white" }}>{orderDetails.purchaseDate}</Text>

            <Text style={{ color: "#808080", marginTop: 8 }}>
              Metode Pembayaran
            </Text>
            <Text style={{ color: "white" }}>{orderDetails.paymentMethod}</Text>
          </Space>
        </div>

        {/* Total Payment Section */}
        <Card
          style={{
            backgroundColor: "rgba(22, 200, 41, 1)",
            marginTop: 24,
            borderRadius: "0px",
            borderBottomLeftRadius: "8px",
            borderBottomRightRadius: "8px",
            padding: "0px 16px",
          }}
          bordered={false}
        >
          <Row justify="space-between" align="middle" style={{ height: 41 }}>
            <Col>
              <Text style={{ color: "white" }}>Total Pembayaran</Text>
            </Col>
            <Col>
              <Space>
                <Text style={{ color: "white", fontWeight: "bold" }}>
                  {orderDetails.totalPayment}
                </Text>
                <CopyOutlined style={{ color: "white" }} />
              </Space>
            </Col>
          </Row>
        </Card>
      </Card>

      <Card
        bordered={false}
        style={{
          background: "#1e2124",
          color: "white",
          borderRadius: "12px",
          marginTop: "16px",
          padding: "16px",
        }}
      >
        <div style={{ marginTop: 24 }}>
          <Title level={5} style={{ color: "white" }}>
            Tambahkan Ulasan
          </Title>
          <Rate
            defaultValue={5}
            style={{ color: "#4CAF50", marginBottom: 16 }}
          />
          <TextArea
            placeholder="Transaksi lancar dan aman!"
            style={{
              backgroundColor: "#2a2d31",
              color: "white",
              border: "none",
              marginBottom: 16,
            }}
            rows={4}
          />
          <Button
            type="text"
            block
            style={{
              border: "1px solid #333",
              color: "white",
              height: "48px",
              marginBottom: 16,
            }}
          >
            Tambahkan Ulasan
          </Button>
          <Button
            type="text"
            block
            style={{
              border: "1px solid #333",
              color: "white",
              height: "48px",
            }}
          >
            Kembali ke beranda
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default Invoice;
