import { SpinnerLoading } from "@/components";
import { usePosts } from "@/features/blog/hooks/usePosts";
import BlogCard from "./Card";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Scrollbar } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "../../../assets/css/style.css";
const BlogItems = () => {
  const { data, isLoading, error } = usePosts();

  isLoading && <SpinnerLoading />;
  if (error) {
    throw new Error("Fetch Error Data");
  }

  return (
    <Swiper
      modules={[Navigation, Scrollbar]}
      breakpoints={{
        320: {
          slidesPerView: 1,
          spaceBetween: 24,
        },
        776: {
          slidesPerView: 2,
          spaceBetween: 30,
        },
        991: {
          slidesPerView: 3,
          spaceBetween: 35,
        },
      }}
      scrollbar={{ draggable: true }}
      navigation
      className="py-6 px-14"
    >
      {data &&
        data.map((item) => (
          <SwiperSlide key={item.id}>
            <BlogCard key={item.id} item={item} />
          </SwiperSlide>
        ))}
    </Swiper>
  );
};

export default BlogItems;
