import { SpinnerLoading } from "@/components";
import ProjectItem from "./ProjectCard";
import { useProjects } from "@/features/projects/hooks/useProjects";
import { Swiper, SwiperSlide } from "swiper/react";
import { Scrollbar } from "swiper/modules";
import "swiper/css";
import { useContext } from "react";
import { FilterContext } from "@/features/projects";
const ProjectItems = () => {
  const { filters } = useContext(FilterContext);
  const { data, isLoading, error } = useProjects({ filters: filters });

  isLoading && <SpinnerLoading />;
  if (error) {
    throw new Error("Fetch Error Data");
  }
  return (
    <Swiper
      modules={[Scrollbar]}
      breakpoints={{
        380: {
          spaceBetween: 10,
          width: 400,
        },
        776: {
          spaceBetween: 10,
          width: 400,
        },
        991: {
          spaceBetween: 10,
          width: 400,
        },
      }}
      scrollbar={{ draggable: true }}
      className="py-6 px-14"
    >
      {data &&
        data.map((item) => (
          <SwiperSlide>
            <ProjectItem key={item.id} item={item} />
          </SwiperSlide>
        ))}
    </Swiper>
  );
};

export default ProjectItems;
