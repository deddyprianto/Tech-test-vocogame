import { Card } from "antd";
import Image from "next/image";
import React from "react";

const QrCode = () => {
  return (
    <Card
      style={{
        backgroundColor: "#1f1f1f",
        borderRadius: 8,
        border: "none",
        padding: "16px",
        marginTop: "10px",
        color: "white",
        marginBottom: "12px",
      }}
    >
      <div
        style={{
          border: "1px solid rgba(94, 94, 94, 1)",
          borderRadius: "12px",
          padding: "12px",
          gap: "12px",
          display: "flex",
        }}
      >
        <Image src="/images/qris.png" alt="" height={50} width={70} />
        <div>
          <p>Scan QRIS</p>
          <p>
            Shopee Pay, OVO, DANA, Gopay, LinkAja, dan transfer bank via QRIS
          </p>
        </div>
      </div>
      <div
        style={{
          backgroundColor: "white",
          borderRadius: "12px",
          padding: "12px",
          marginTop: "12px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Image src="/images/qrcode.png" height={282} width={282} />
      </div>
      <div
        style={{
          backgroundColor: "white",
          borderRadius: "12px",
          padding: "12px",
          marginTop: "12px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "black",
          fontWeight: 600,
        }}
      >
        Unduh QRCODE
      </div>
    </Card>
  );
};

export default QrCode;
