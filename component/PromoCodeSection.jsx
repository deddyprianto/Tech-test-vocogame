import React from "react";
import { Input, Button, Space, Typography } from "antd";
import { SearchOutlined, TagOutlined, RightOutlined } from "@ant-design/icons";

const { Text } = Typography;

const PromoCodeSection = () => {
  return (
    <Space direction="vertical" size="middle" style={{ width: "100%" }}>
      {/* Input Promo Section */}
      <Space.Compact style={{ width: "100%" }}>
        <Input
          prefix={<SearchOutlined style={{ color: "#8c8c8c" }} />}
          placeholder="Ketik kode promo (opsional)"
          style={{
            backgroundColor: "#141414",
            borderColor: "#434343",
            color: "#fff",
          }}
        />
        <Button
          type="default"
          style={{
            backgroundColor: "#fff",
            borderColor: "#fff",
            color: "#000",
          }}
        >
          Gunakan
        </Button>
      </Space.Compact>

      {/* Available Promo Section */}
      <Button
        type="text"
        icon={<TagOutlined />}
        style={{
          width: "100%",
          height: "auto",
          padding: "12px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          backgroundColor: "#1f1f1f",
          border: "1px solid #434343",
          borderRadius: "8px",
        }}
      >
        <Text style={{ color: "#fff", marginLeft: "8px" }}>
          Lihat promo tersedia
        </Text>
        <RightOutlined style={{ color: "#8c8c8c" }} />
      </Button>
    </Space>
  );
};

export default PromoCodeSection;