import React, { useState } from "react";
import { Typography, Card, Collapse, Radio, Space, Row, Col } from "antd";
import { UpOutlined, CheckOutlined } from "@ant-design/icons";
import CollapsComponent from "./CollapsComponent";
const { Title, Text } = Typography;
const { Panel } = Collapse;

const PaymentMethodSection = () => {
  const [selectedMethod, setSelectedMethod] = useState("");
  const paymentMethod = [
    {
      name: "Qris",
      pathImage: "/images/qris.png",
    },
  ];
  const eWallet = [
    {
      name: "Dana",
      pathImage: "/images/dana.png",
    },
    {
      name: "Link Aja",
      pathImage: "/images/linkaja.png",
    },
    {
      name: "Shopee Pay",
      pathImage: "/images/shopeepay.png",
    },
    {
      name: "Ovo",
      pathImage: "/images/ovo.png",
    },
  ];

  return (
    <div style={{ padding: "24px" }}>
      <Title level={4} style={{ color: "#fff", marginBottom: "24px" }}>
        Pilih Metode Pembayaran
      </Title>

      <CollapsComponent
        label="QRIS"
        selectedMethod={selectedMethod}
        setSelectedMethod={setSelectedMethod}
        image="images/qris.png"
        data={paymentMethod}
      />
      <CollapsComponent
        label="E-wallet"
        selectedMethod={selectedMethod}
        setSelectedMethod={setSelectedMethod}
        data={eWallet}
      />
    </div>
  );
};

export default PaymentMethodSection;
