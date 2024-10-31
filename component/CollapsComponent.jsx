import React from "react";
import { Typography, Card, Collapse, Radio } from "antd";
import { UpOutlined, CheckOutlined } from "@ant-design/icons";
import { useDispatch } from "react-redux";
import { setPaymentMethod } from "@/feature/dataSlicePersisted";

const { Text } = Typography;
const { Panel } = Collapse;

const CollapsComponent = ({
  setSelectedMethod,
  selectedMethod,
  label,
  data,
}) => {
  const dispatch = useDispatch();

  return (
    <Collapse
      expandIcon={({ isActive }) => (
        <UpOutlined rotate={isActive ? 180 : 0} style={{ color: "#fff" }} />
      )}
      style={{
        background: "#1f1f1f",
        border: "none",
      }}
    >
      <Panel
        header={
          <Text strong style={{ color: "#fff", fontSize: 16 }}>
            {label}
          </Text>
        }
        key="1"
        style={{
          marginBottom: 8,
          background: "#1f1f1f",
          border: "1px solid #434343",
          borderRadius: 8,
        }}
      >
        <Radio.Group value={selectedMethod} style={{ width: "100%" }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gridTemplateRows: "1fr",
              gridAutoColumns: "1fr",
              gap: "10px",
              gridAutoFlow: "row",
              gridTemplateAreas: '". ."',
              width: "100%",
            }}
          >
            {data.map((item) => {
              return (
                <Card
                  key={item.name}
                  style={{
                    width: "100%",
                    border:
                      selectedMethod === item.name ? "1px solid white" : "none",
                    borderRadius: 8,
                    cursor: "pointer",
                    padding: "16px",
                    backgroundColor: "rgba(62, 62, 62, 1)",
                  }}
                  bodyStyle={{ padding: "16px" }}
                  onClick={() => {
                    dispatch(setPaymentMethod(item));
                    setSelectedMethod(item.name);
                  }}
                >
                  <div
                    style={{
                      color: "white",
                    }}
                  >
                    <img src={item.pathImage} style={{ width: "100%" }} />
                    <p>{item.name}</p>
                    <p>Layanan Biaya</p>
                    <p>+ Rp.15.000</p>
                  </div>
                  {selectedMethod === item.name && (
                    <div
                      style={{
                        position: "absolute",
                        bottom: 0,
                        right: 0,
                        backgroundColor: "white",
                        padding: "1px",
                        borderBottomRightRadius: "4px",
                      }}
                    >
                      <CheckOutlined />
                    </div>
                  )}
                </Card>
              );
            })}
          </div>
        </Radio.Group>
      </Panel>
    </Collapse>
  );
};

export default CollapsComponent;
