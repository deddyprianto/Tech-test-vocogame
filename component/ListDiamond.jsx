import { Col, Row } from "antd";
import React from "react";
import DiamondProductCard from "./DiamondProductCard.jsx";
import { useSelector } from "react-redux";

const ListDiamond = () => {
  const dataDetail = useSelector(
    (state) => state.dataSlicePersisted.dataDetail
  );

  return (
    <Row gutter={[20, 20]} style={{ padding: "10px", marginTop: "30px" }}>
      {dataDetail.items.map((item) => {
        console.log(item);
        return (
          <Col key={item.id} xs={24} sm={12} md={10}>
            <DiamondProductCard data={item} />
          </Col>
        );
      })}
    </Row>
  );
};

export default ListDiamond;
