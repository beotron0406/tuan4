// app/page.tsx
import CourseCard from "@/components/CourseCard";
import { Carousel } from "antd";

export default function Home() {
  const courses = [
    {
      title: "The Modern Javascript Bootcamp Course",
      author: "Colt Steele, Stephen Grider",
      rating: 4.7,
      students: 12508,
      price: 2199000,
      imageUrl: "/study1.jpg",
    },
    {
      title: "Complete React Developer (w/ Redux, Hooks, GraphQL)",
      author: "Andrei Neagoie, Yihua Zhang",
      rating: 4.6,
      students: 28420,
      price: 1799000,
      imageUrl: "/study2.jpg",
    },
    {
      title: "JavaScript Pro: Mastering Advanced Concepts and...",
      author: "Colt Steele",
      rating: 4.8,
      students: 754,
      price: 399000,
      imageUrl: "/study3.jpg",
    },
    {
      title: "50 Projects In 50 Days - HTML, CSS & JavaScript",
      author: "Brad Traversy, Florin Pop",
      rating: 4.7,
      students: 11822,
      price: 1899000,
      imageUrl: "/study4.jpg",
    },
    {
      title: "Modern JavaScript From The Beginning 2.0 (2024)",
      author: "Brad Traversy",
      rating: 4.7,
      students: 33992,
      price: 2399000,
      imageUrl: "/study5.jpg",
    },
    {
      title: "Complete React Developer (w/ Redux, Hooks, GraphQL)",
      author: "Andrei Neagoie, Yihua Zhang",
      rating: 4.6,
      students: 28420,
      price: 1799000,
      imageUrl: "/study6.jpg",
    },
    {
      title: "The Modern Javascript Bootcamp Course",
      author: "Colt Steele, Stephen Grider",
      rating: 4.7,
      students: 12508,
      price: 2199000,
      imageUrl: "/study1.jpg",
    },
    {
      title: "Complete React Developer (w/ Redux, Hooks, GraphQL)",
      author: "Andrei Neagoie, Yihua Zhang",
      rating: 4.6,
      students: 28420,
      price: 1799000,
      imageUrl: "/study2.jpg",
    },
    {
      title: "JavaScript Pro: Mastering Advanced Concepts and...",
      author: "Colt Steele",
      rating: 4.8,
      students: 754,
      price: 399000,
      imageUrl: "/study3.jpg",
    },
    {
      title: "50 Projects In 50 Days - HTML, CSS & JavaScript",
      author: "Brad Traversy, Florin Pop",
      rating: 4.7,
      students: 11822,
      price: 1899000,
      imageUrl: "/study4.jpg",
    },
    {
      title: "Modern JavaScript From The Beginning 2.0 (2024)",
      author: "Brad Traversy",
      rating: 4.7,
      students: 33992,
      price: 2399000,
      imageUrl: "/study5.jpg",
    },
    {
      title: "Complete React Developer (w/ Redux, Hooks, GraphQL)",
      author: "Andrei Neagoie, Yihua Zhang",
      rating: 4.6,
      students: 28420,
      price: 1799000,
      imageUrl: "/study6.jpg",
    },
  ];

  const slidesToShow = 5;

  return (
    <div className="w-full">
      <Carousel
        dots={false}
        slidesToShow={5}  
        infinite={false}
        arrows={true}
        responsive={[
          {
            breakpoint: 1024,
            settings: { slidesToShow: 4 },
          },
          {
            breakpoint: 768,
            settings: { slidesToShow: 3 },
          },
          {
            breakpoint: 480,
            settings: { slidesToShow: 2 },
          },
        ]}
      >
        {courses.map((course, index) => (
          <div key={index} className="flex justify-center">
            <CourseCard
              title={course.title}
              author={course.author}
              rating={course.rating}
              students={course.students}
              price={course.price}
              imageUrl={course.imageUrl}
            />
          </div>
        ))}
      </Carousel>
    </div>
  );
}
