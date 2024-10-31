"use client";
import React from "react";
import View from "./View";
import { useMediaQuery } from "react-responsive";
import { useSelector } from "react-redux";

const Container = () => {
  const paymentSelected = useSelector(
    (state) => state.dataSlicePersisted.paymentMethod
  );
  const isMobile = useMediaQuery({ maxWidth: 768 });

  return <View isMobile={isMobile} paymentSelected={paymentSelected} />;
};

export default Container;
