"use client";
import React from "react";
import { Layout, Skeleton } from "antd";
import styled from "styled-components";

const { Header, Sider, Content, Footer } = Layout;

// Styled components for custom layout
const StyledLayout = styled(Layout)`
  height: 100vh;
  width: 100vw;
  background: rgba(26, 26, 26, 1);
`;

const StyledHeader = styled(Header)`
  background: rgba(40, 40, 40, 1);
  padding: 0 24px;
  display: flex;
  align-items: center;
`;

const StyledSider = styled(Sider)`
  background: rgba(40, 40, 40, 1);
  padding: 24px;
`;

const StyledContent = styled(Content)`
  padding: 24px;
  background: #f0f2f5;
  overflow: auto;
`;

const StyledFooter = styled(Footer)`
  background: rgba(40, 40, 40, 1);
  padding: 16px 24px;
`;

const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
  margin-top: 24px;
`;

const Card = styled.div`
  background: rgba(40, 40, 40, 1);
  padding: 24px;
  border-radius: 8px;
`;

const ShimmerLayout = () => {
  return (
    <StyledLayout>
      <StyledHeader>
        {/* Header content */}
        <div style={{ display: "flex", alignItems: "center", width: "100%" }}>
          <Skeleton.Avatar size="large" active />
          <div style={{ flex: 1, marginLeft: 20, display: "flex", gap: 16 }}>
            <Skeleton.Button active size="small" />
            <Skeleton.Button active size="small" />
            <Skeleton.Button active size="small" />
          </div>
          <Skeleton.Avatar active />
        </div>
      </StyledHeader>

      <Layout>
        <StyledSider width={250}>
          {/* Sidebar content */}
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            <Skeleton.Button active block />
            <Skeleton.Button active block />
            <Skeleton.Button active block />
            <Skeleton.Button active block />
            <Skeleton.Button active block />
          </div>
        </StyledSider>

        <StyledContent>
          {/* Content header */}
          <div style={{ display: "flex", gap: 16, alignItems: "center" }}>
            <Skeleton.Input active size="large" style={{ width: 200 }} />
            <Skeleton.Button active size="large" />
          </div>

          {/* Content cards */}
          <CardGrid>
            {[...Array(6)].map((_, index) => (
              <Card key={index}>
                <Skeleton active paragraph={{ rows: 3 }} />
              </Card>
            ))}
          </CardGrid>
        </StyledContent>
      </Layout>

      <StyledFooter>
        {/* Footer content */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Skeleton.Input active size="small" style={{ width: 120 }} />
          <div style={{ display: "flex", gap: 16 }}>
            <Skeleton.Button active size="small" />
            <Skeleton.Button active size="small" />
          </div>
        </div>
      </StyledFooter>
    </StyledLayout>
  );
};

export default ShimmerLayout;
