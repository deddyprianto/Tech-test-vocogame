import { Card } from "antd";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

const QrCode = ({ paymentSelected }) => {
  const route = useRouter();
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
        <Image src={paymentSelected?.pathImage} alt="" height={50} width={70} />
        <div>
          <p>{paymentSelected?.name}</p>
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
      <div
        style={{
          backgroundColor: "blue",
          borderRadius: "12px",
          padding: "12px",
          marginTop: "12px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "white",
          fontWeight: 600,
          cursor: "pointer",
        }}
        onClick={() => route.push("/invoice")}
      >
        Lihat Invoice
      </div>
    </Card>
  );
};

export default QrCode;
