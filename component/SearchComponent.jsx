import { SearchOutlined } from "@ant-design/icons";
import { Button, Input, Space } from "antd";
import React from "react";

const SearchComponent = ({ placeholder, refCustom }) => {
  return (
    <Space.Compact style={{ width: "100%" }}>
      <Input
        ref={refCustom}
        prefix={<SearchOutlined style={{ color: "#8c8c8c" }} />}
        placeholder={placeholder ? placeholder : "Ketik kode promo (opsional)"}
        style={{
          backgroundColor: "rgba(4, 12, 34, 0.08)",
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
  );
};

export default SearchComponent;
