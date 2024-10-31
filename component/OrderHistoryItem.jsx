import React from "react";
import { List, Typography, Space, Avatar } from "antd";
import { CheckCircleFilled } from "@ant-design/icons";

const { Title, Text } = Typography;

const OrderHistoryItem = () => {
  const orderData = {
    game: "Mobile Legends Bang Bang",
    item: "14820 Diamonds (12389 + 2431 Bonus)",
    price: "Rp3.056.113,-",
    paymentMethod: "QRIS",
    date: "24 Agustus 2023, 14:08",
    status: "Success",
    imageUrl: "/images/mobileLegend.png",
  };

  return (
    <div style={{ marginTop: "24px" }}>
      <Title level={2} style={{ color: "white" }}>
        Riwayat Pesanan
      </Title>

      <List
        style={{
          backgroundColor: "#1e1e1e",
          borderRadius: "8px",
        }}
        dataSource={[orderData]} // In real app, you would map through multiple orders
        renderItem={(item) => (
          <List.Item
            style={{
              padding: "16px",
              border: "none",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                width: "100%",
                gap: "16px",
                flexWrap: "wrap",
              }}
            >
              {/* Game Info Section */}
              <Space size={12} style={{ flex: "1 1 300px" }}>
                <Avatar
                  shape="square"
                  size={48}
                  src={item.imageUrl}
                  style={{ backgroundColor: "#2d2d2d" }}
                >
                  5v5
                </Avatar>
                <div>
                  <Text style={{ color: "#808080", display: "block" }}>
                    {item.game}
                  </Text>
                  <Text style={{ color: "white", fontSize: "16px" }}>
                    {item.item}
                  </Text>
                </div>
              </Space>

              {/* Price Info */}
              <div style={{ flex: "1 1 200px" }}>
                <Text style={{ color: "#808080", display: "block" }}>
                  Harga Produk
                </Text>
                <Text style={{ color: "white" }}>{item.price}</Text>
              </div>

              {/* Payment Method */}
              <div style={{ flex: "1 1 150px" }}>
                <Text style={{ color: "#808080", display: "block" }}>
                  Metode Pembayaran
                </Text>
                <Text style={{ color: "white" }}>{item.paymentMethod}</Text>
              </div>

              {/* Date */}
              <div style={{ flex: "1 1 200px" }}>
                <Text style={{ color: "#808080", display: "block" }}>
                  Tanggal
                </Text>
                <Text style={{ color: "white" }}>{item.date}</Text>
              </div>

              {/* Status */}
              <div style={{ flex: "0 1 100px" }}>
                <Space>
                  <CheckCircleFilled style={{ color: "#4CAF50" }} />
                  <Text style={{ color: "#4CAF50" }}>{item.status}</Text>
                </Space>
              </div>
            </div>
          </List.Item>
        )}
      />
    </div>
  );
};

export default OrderHistoryItem;
