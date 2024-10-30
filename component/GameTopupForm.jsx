import React from "react";
import { Card, Form, Input, Typography, Space } from "antd";

const { Title, Text } = Typography;

const GameTopupForm = () => {
  const iconsSvg = () => {
    return (
      <svg
        width="40"
        height="30"
        viewBox="0 0 40 30"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          opacity="0.5"
          d="M17.3342 2.268L16.3302 1.558C14.8974 0.544194 13.1854 -0.00015732 11.4302 3.4105e-08H10.2062C9.39616 3.4105e-08 8.58016 0.0499997 7.81816 0.32C3.05216 2.012 -0.225837 8.19 0.0121626 22.206C0.0601626 25.03 0.720162 28.15 3.26816 29.368C4.13735 29.7859 5.08974 30.0019 6.05416 30C7.13816 30.0178 8.20307 29.7136 9.11416 29.126C9.93416 28.59 10.6542 27.894 11.3742 27.198C12.2622 26.338 13.1502 25.478 14.2222 24.922C15.3901 24.3163 16.6865 24.0001 18.0022 24H22.0002C23.3162 24 24.6122 24.316 25.7802 24.92C26.8522 25.478 27.7402 26.338 28.6302 27.198C29.3502 27.894 30.0702 28.59 30.8862 29.126C31.6662 29.638 32.6762 30 33.9482 30C34.9126 30.0019 35.865 29.7859 36.7342 29.368C39.2822 28.15 39.9422 25.028 39.9902 22.206C40.2282 8.19 36.9502 2.012 32.1842 0.322C31.4202 0.0499996 30.6002 3.4105e-08 29.7942 3.4105e-08H28.5702C26.8147 0.000295752 25.1027 0.545365 23.6702 1.56L22.6662 2.268C21.8866 2.81954 20.9551 3.11572 20.0002 3.11572C19.0452 3.11572 18.1137 2.81954 17.3342 2.268Z"
          fill="white"
        />
      </svg>
    );
  };
  const [form] = Form.useForm();

  return (
    <div
      style={{
        backgroundColor: "#141414",
        padding: "24px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Card
        className="card-custom"
        style={{
          maxWidth: 500,
          width: "100%",
          backgroundColor: "transparent",
        }}
      >
        <Space direction="vertical" size="large" style={{ width: "100%" }}>
          {/* Header */}
          <Space align="start">
            <div
              style={{
                width: 48,
                height: 48,
                backgroundColor: "#141414",
                borderRadius: 8,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {iconsSvg()}
            </div>
            <Space direction="vertical" size={0}>
              <Title level={4} style={{ margin: 0, color: "#fff" }}>
                Topup Game
              </Title>
              <Text style={{ color: "#8c8c8c" }}>
                Lengkapi data dan dapatkan produk anda!
              </Text>
            </Space>
          </Space>

          {/* Form */}
          <Form form={form} layout="vertical" style={{ width: "100%" }}>
            <Form.Item
              label={<Text style={{ color: "#fff" }}>User ID*</Text>}
              name="userId"
              rules={[
                { required: true, message: "Please input your User ID!" },
              ]}
            >
              <Input
                placeholder="Masukkan User ID"
                style={{
                  backgroundColor: "#141414",
                  borderColor: "#434343",
                  color: "#fff",
                }}
              />
            </Form.Item>

            <Form.Item
              label={<Text style={{ color: "#fff" }}>Zone ID*</Text>}
              name="zoneId"
              rules={[
                { required: true, message: "Please input your Zone ID!" },
              ]}
            >
              <Input
                placeholder="Masukkan Zone ID"
                style={{
                  backgroundColor: "#141414",
                  borderColor: "#434343",
                  color: "#fff",
                }}
              />
            </Form.Item>

            <Form.Item
              label={<Text style={{ color: "#fff" }}>Nomor WhatsApp</Text>}
              name="whatsapp"
            >
              <Input
                placeholder="Ketik nomor WA (081********21)"
                style={{
                  backgroundColor: "#141414",
                  borderColor: "#434343",
                  color: "#fff",
                }}
              />
            </Form.Item>

            <Text style={{ color: "#8c8c8c", fontSize: 12 }}>
              Untuk mengetahui User ID Anda, silakan klik menu profile dibagian
              kiri atas pada menu utama game. User ID akan terlihat dibagian
              bawah Nama Karakter Game Anda. Silakan masukkan User ID dan Server
              ID / Zone ID Anda untuk menyelesaikan transaksi. User ID berada
              diluar tanda kurung dan Server ID / Zone ID didalam tanda kurung.
              Contoh: 12345678(1234).
            </Text>
          </Form>
        </Space>
      </Card>
    </div>
  );
};

export default GameTopupForm;
