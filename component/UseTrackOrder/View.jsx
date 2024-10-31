"use client";
import Image from "next/image";
import SearchComponent from "../SearchComponent";
import OrderHistoryItem from "../OrderHistoryItem";
import { useEffect, useRef } from "react";

const View = () => {
  const inputRef = useRef(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  return (
    <div
      style={{
        width: "80%",
        margin: "auto",
        marginTop: 16,
        marginBottom: 16,
      }}
    >
      <div
        style={{
          width: "100%",
          height: "280px",
          position: "relative",
        }}
      >
        <Image
          style={{ objectFit: "contain" }}
          src="/images/bannerTrackOrder.png"
          fill
          alt="icon banner"
        />
      </div>
      <div
        style={{
          backgroundColor: "rgba(40, 40, 40, 1)",
          padding: "22px",
          borderRadius: 12,
        }}
      >
        <SearchComponent placeholder="Mobile Legends Bang Bang" refCustom={inputRef} />
        <p style={{ marginTop: 16, fontSize: 12 }}>
          Pesanan kamu tidak terdaftar meskipun kamu yakin sudah memesan? harap
          tunggu 1-2 jam namun jika pesanan masih tidak muncul maka kamu dapat
          menghubungi kami via Whatsapp
        </p>
      </div>
      <OrderHistoryItem />
    </div>
  );
};

export default View;
