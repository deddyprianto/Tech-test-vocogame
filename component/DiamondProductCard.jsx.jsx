"use client";

import React from "react";
import { Card, Typography } from "antd";

// Untuk Next.js, kita perlu destructure Text dari Typography
const { Text } = Typography;

const DiamondIcon = () => (
  <svg
    width="32"
    height="32"
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M16 2L4 14L16 26L28 14L16 2Z"
      fill="#00C6FF"
      filter="drop-shadow(0px 0px 4px rgba(0, 198, 255, 0.5))"
    />
  </svg>
);

const DiamondProductCard = () => {
  return (
    <div className="relative w-[300px]">
      {/* Custom 15% OFF ribbon */}
      <div className="absolute -right-1 -top-1 z-10">
        <div className="bg-white text-black py-1 px-3 transform rotate-45 shadow-md font-semibold text-sm">
          15% OFF
        </div>
      </div>

      <Card
        className="bg-[#1E1E1E] border border-gray-700 rounded-lg overflow-hidden"
        bodyStyle={{
          padding: "20px",
          background:
            "linear-gradient(145deg, rgba(40,40,40,0.9) 0%, rgba(20,20,20,0.9) 100%)",
        }}
      >
        <div className="space-y-2">
          {/* Diamond amount */}
          <div className="flex justify-between items-center">
            <span className="text-white text-2xl font-semibold">
              12976 Diamonds
            </span>
            <DiamondIcon />
          </div>

          {/* Bonus text */}
          <span className="text-gray-400 block text-sm">
            (10839 + 2137 Bonus)
          </span>

          {/* Price section */}
          <div className="space-y-1 mt-4">
            <span className="text-[#4ADE80] block text-xl font-semibold">
              Rp 2.755.000,-
            </span>
            <span className="text-gray-500 line-through block">
              Rp 2.783.100,-
            </span>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default DiamondProductCard;
