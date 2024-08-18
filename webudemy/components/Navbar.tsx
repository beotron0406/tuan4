"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  BellOutlined,
  HeartOutlined,
  ShoppingCartOutlined,
  SearchOutlined,
  DownOutlined,
} from "@ant-design/icons";
import { Button, Dropdown, Input, MenuProps, Space } from "antd";

const categoryItems: MenuProps["items"] = [
  {
    key: "1",
    label: "Phát triển",
  },
  {
    key: "2",
    label: "Kinh doanh",
  },
  {
    key: "3",
    label: "Tài chính & Kế toán",
  },
  {
    key: "4",
    label: "CNTT & Phần mềm",
  },
  {
    key: "5",
    label: "Năng suất văn phòng",
  },
  {
    key: "6",
    label: "Phát triển cá nhân",
  },
  {
    key: "7",
    label: "Thiết kế",
  },
  {
    key: "8",
    label: "Marketing",
  },
  {
    key: "9",
    label: "Sức khỏe & Thể dục",
  },
  {
    key: "10",
    label: "Âm nhạc",
  },
];
interface Category {
  name: string;
  subCategories?: string[];
}
const categories: Category[] = [
  {
    name: "Phát triển",
    subCategories: [
      "Phát triển web",
      "Phát triển ứng dụng di động",
      "Ngôn ngữ lập trình",
      "Phát triển trò chơi",
      "Thiết kế & Phát triển cơ sở dữ liệu",
      "Kiểm tra phần mềm",
    ],
  },
  {
    name: "Kinh doanh",
    subCategories: [
      "Phát triển web",
      "Phát triển ứng dụng di động",
      "Ngôn ngữ lập trình",
      "Phát triển trò chơi",
      "Thiết kế & Phát triển cơ sở dữ liệu",
      "Kiểm tra phần mềm",
    ],
  },
  {
    name: "Tài chính & Kế toán",
    subCategories: [
      "Phát triển web",
      "Phát triển ứng dụng di động",
      "Ngôn ngữ lập trình",
      "Phát triển trò chơi",
      "Thiết kế & Phát triển cơ sở dữ liệu",
      "Kiểm tra phần mềm",
    ],
  },
  {
    name: "CNTT & Phần mềm",
    subCategories: [
      "Phát triển web",
      "Phát triển ứng dụng di động",
      "Ngôn ngữ lập trình",
      "Phát triển trò chơi",
      "Thiết kế & Phát triển cơ sở dữ liệu",
      "Kiểm tra phần mềm",
    ],
  },
  {
    name: "Năng suất văn phòng",
    subCategories: [
      "Phát triển web",
      "Phát triển ứng dụng di động",
      "Ngôn ngữ lập trình",
      "Phát triển trò chơi",
      "Thiết kế & Phát triển cơ sở dữ liệu",
      "Kiểm tra phần mềm",
    ],
  },
  {
    name: "Phát triển cá nhân",
    subCategories: [
      "Phát triển web",
      "Phát triển ứng dụng di động",
      "Ngôn ngữ lập trình",
      "Phát triển trò chơi",
      "Thiết kế & Phát triển cơ sở dữ liệu",
      "Kiểm tra phần mềm",
    ],
  },
  {
    name: "Thiết kế",
    subCategories: [
      "Phát triển web",
      "Phát triển ứng dụng di động",
      "Ngôn ngữ lập trình",
      "Phát triển trò chơi",
      "Thiết kế & Phát triển cơ sở dữ liệu",
      "Kiểm tra phần mềm",
    ],
  },
  {
    name: "Marketing",
    subCategories: [
      "Phát triển web",
      "Phát triển ứng dụng di động",
      "Ngôn ngữ lập trình",
      "Phát triển trò chơi",
      "Thiết kế & Phát triển cơ sở dữ liệu",
      "Kiểm tra phần mềm",
    ],
  },
  {
    name: "Sức khỏe & Thể dục",
    subCategories: [
      "Phát triển web",
      "Phát triển ứng dụng di động",
      "Ngôn ngữ lập trình",
      "Phát triển trò chơi",
      "Thiết kế & Phát triển cơ sở dữ liệu",
      "Kiểm tra phần mềm",
    ],
  },
  {
    name: "Âm nhạc",
    subCategories: [
      "Phát triển web",
      "Phát triển ứng dụng di động",
      "Ngôn ngữ lập trình",
      "Phát triển trò chơi",
      "Thiết kế & Phát triển cơ sở dữ liệu",
      "Kiểm tra phần mềm",
    ],
  },
];

const Navbar: React.FC = () => {
  const [searchValue, setSearchValue] = useState("");

  const handleSearch = () => {
    if (searchValue.trim()) {
      console.log("Searching for:", searchValue);
    }
  };
  return (
    <header>
      <nav className="flex items-center justify-between px-4 py-2 bg-white border-b shadow-lg">
        <div className="flex items-center space-x-4 px-3 py-1">
          <Link href="/">
            <Image
              src="https://www.udemy.com/staticx/udemy/images/v7/logo-udemy.svg"
              alt="Udemy"
              width={91}
              height={34}
            />
          </Link>
          <Dropdown menu={{ items: categoryItems }} trigger={["hover"]}>
            <div
              onClick={(e) => e.preventDefault()}
              className="text-sm font-semibold hover:text-blue-500 transition-colors cursor-pointer"
            >
              <Space>
                Thể loại
                <DownOutlined />
              </Space>
            </div>
          </Dropdown>
          <div className="flex justify-center items-center">
            <Input
              value={searchValue}
              onChange={(e: {
                target: { value: React.SetStateAction<string> };
              }) => setSearchValue(e.target.value)}
              placeholder="Tìm kiếm nội dung bất kỳ"
              className="rounded-full px-4 py-2 w-[600px] border-current"
              prefix={
                <Button
                  onClick={handleSearch}
                  disabled={!searchValue.trim()}
                  type="text"
                  icon={<SearchOutlined />}
                />
              }
            />
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <Dropdown
            menu={{
              items: [
                {
                  key: "1",
                  label: "Udemy Business",
                },
              ],
            }}
            placement="bottom"
            arrow={{ pointAtCenter: true }}
            trigger={["hover"]}
          >
            <Link
              href="/business"
              className="text-sm font-semibold hover:text-blue-500 transition-colors"
            >
              Udemy Business
            </Link>
          </Dropdown>

          <Dropdown
            menu={{
              items: [
                {
                  key: "1",
                  label: "Giảng dạy trên Udemy",
                },
              ],
            }}
            placement="bottom"
            arrow={{ pointAtCenter: true }}
            trigger={["hover"]}
          >
            <Link
              href="/teach"
              className="text-sm font-semibold hover:text-blue-500 transition-colors"
            >
              Giảng dạy trên Udemy
            </Link>
          </Dropdown>

          <Dropdown
            menu={{
              items: [
                {
                  key: "1",
                  label: "Học tập",
                },
              ],
            }}
            placement="bottom"
            arrow={{ pointAtCenter: true }}
            trigger={["hover"]}
          >
            <Link
              href="/learning"
              className="text-sm font-semibold hover:text-blue-500 transition-colors"
            >
              Học tập
            </Link>
          </Dropdown>

          <div className="border-0 ">
            <HeartOutlined className="text-xl" />
          </div>
          <div className="border-0">
            <ShoppingCartOutlined className="text-xl" />
          </div>
          <div className="border-0">
            <BellOutlined className="text-xl" />
          </div>
          <div className="flex space-x-4">
            <Link href="/login">
              <div className="px-4 py-2 text-sm font-semibold text-black border rounded hover:bg-gray-100 transition-colors">
                Đăng nhập
              </div>
            </Link>
            <Link href="/signup">
              <div className="px-4 py-2 text-sm font-semibold text-white bg-black border border-black rounded hover:bg-gray-800 transition-colors">
                Đăng ký
              </div>
            </Link>
          </div>
        </div>
      </nav>
      <div className="flex justify-center space-x-8 px-4 py-3 bg-white border-b">
        {categories.map((category) => (
          <Dropdown
            key={category.name}
            menu={{
              items: category.subCategories?.map((sub, index) => ({
                key: index,
                label: sub,
                onClick: () => {},
              })),
            }}
            trigger={["hover"]}
            className="dropdown-horizontal flex"
          >
            <Link href={`/${category.name.toLowerCase()}`}>
              <div className="text-sm font-semibold hover:text-blue-500 transition-colors">
                {category.name}
              </div>
            </Link>
          </Dropdown>
        ))}
      </div>
    </header>
  );
};

export default Navbar;
