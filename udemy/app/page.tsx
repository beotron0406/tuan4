"use client";

import React from "react";
import { Button, Layout, Space } from "antd";
import { useRouter } from "next/navigation";
import Link from "next/link";

const { Header } = Layout;

const HomePage = () => {
  const router = useRouter();

  return (
    <Layout className="min-h-screen">
      <Header className="flex items-center justify-between bg-white">
        <div className="text-2xl font-bold">
          Chào mừng đến với web khóa học online
        </div>
        <Space>
          <Link href="/user-home-page">
            <Button type="link">Home</Button>
          </Link>
          <Button type="primary" onClick={() => router.push("/login")}>
            Đăng nhập
          </Button>
        </Space>
      </Header>
    </Layout>
  );
};

export default HomePage;
