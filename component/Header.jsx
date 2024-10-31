"use client";
import { Input, Select, Button } from "antd";
import {
  SearchOutlined,
  HomeOutlined,
  FileSearchOutlined,
} from "@ant-design/icons";
import styled from "@emotion/styled";
import Image from "next/image";
import { useRouter } from "next/navigation";

// Styled Components

const Logo = styled.div`
  color: white;
  font-size: 20px;
  display: flex;
  align-items: center;
  gap: 8px;
`;

const NavMenu = styled.div`
  display: flex;
  gap: 16px;
  align-items: center;
`;

const Header = () => {
  const router = useRouter();
  return (
    <div
      style={{
        backgroundColor: "#1a1a1a",
        padding: "0px 24px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        marginTop: "10px",
      }}
    >
      <Logo>
        <Image
          src="https://img.freepik.com/free-vector/flat-design-gaming-logo_23-2150747166.jpg?semt=ais_hybrid"
          alt="GameManiac"
          height={32}
          width={32}
        />
        GameManiac
      </Logo>
      <NavMenu>
        <Button
          onClick={() => router.push("/")}
          type="text"
          icon={<HomeOutlined />}
          style={{ color: "white" }}
        >
          Beranda
        </Button>
        <Button
          type="text"
          icon={<FileSearchOutlined />}
          style={{ color: "white" }}
          onClick={() => router.push("/trackorder")}
        >
          Lacak Pemesanan
        </Button>
        <Input.Search
          placeholder="Lacak Pesanan"
          style={{ width: 200 }}
          prefix={<SearchOutlined />}
        />
        <Select defaultValue="ID" style={{ width: 100 }}>
          <Select.Option value="ID">🇮🇩 ID</Select.Option>
          <Select.Option value="EN">🇺🇸 EN</Select.Option>
        </Select>
      </NavMenu>
    </div>
  );
};

export default Header;
