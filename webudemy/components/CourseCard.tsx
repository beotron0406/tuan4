// components/CourseCard.tsx
import { Card, Rate } from "antd";
import { FC } from "react";
import Image from "next/image";

interface CourseCardProps {
  title: string;
  author: string;
  rating: number;
  students: number;
  price: number;
  imageUrl: string;
}

const CourseCard: FC<CourseCardProps> = ({
  title,
  author,
  rating,
  students,
  price,
  imageUrl,
}) => {
  const formattedPrice = new Intl.NumberFormat("vi-VN").format(price);

  return (
    <Card
      className="w-52 m-2 transition-opacity duration-300 hover:opacity-80 border-none shadow-none"
      cover={
        <div className="relative h-28">
          <Image alt={title} src={imageUrl} layout="fill" objectFit="cover" />
        </div>
      }
    >
      <h3 className="font-semibold text-xs truncate">{title}</h3>
      <p className="text-gray-500 text-xs truncate">{author}</p>
      <div className="flex items-center my-1">
        <span className="ml-1 text-xs text-gray-600">{rating.toFixed(1)}</span>
        <Rate
          allowHalf
          disabled
          defaultValue={rating}
          style={{ fontSize: 12 }}
        />
      </div>
      <p className="text-gray-500 text-xs">
        ({students.toLocaleString()} students)
      </p>
      <div className="flex justify-between items-center">
        <span className="text-lg font-bold">đ {formattedPrice} </span>
      </div>
    </Card>
  );
};

export default CourseCard;
