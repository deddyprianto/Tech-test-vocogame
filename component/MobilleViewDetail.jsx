import Image from "next/image";
import React from "react";

const MobileViewDetail = () => {
  return (
    <div
      style={{
        backgroundColor: "white",
        color: "black",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Image src="/images/mobileLegend.png" alt="" width={180} height={180} />
      <p>GameManiac.com</p>
      <p>Mobile Legends Bang Bang</p>
      <p>Moonton</p>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <p>Customer Service 24/7</p>
        <p>Official Distributor</p>
      </div>
    </div>
  );
};

export default MobileViewDetail;
