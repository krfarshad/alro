import { useProjects } from "@/features/projects/hooks/useProjects";
import { Swiper, SwiperSlide } from "swiper/react";
import { Scrollbar } from "swiper/modules";
import "swiper/css";
import { useContext } from "react";
import { FilterContext, FilterLoading, ProjectCard } from "@/features/projects";
import { Empty } from "@/components";
const ProjectItems = () => {
  const { filters } = useContext(FilterContext);
  const { data, isLoading, error } = useProjects({ filters: filters });

  if (isLoading) {
    return <FilterLoading />;
  }

  if (error) {
    throw new Error("Fetch Error Data");
  }
  return (
    <>
      {data && data.length ? (
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
          {data.map((item) => (
            <SwiperSlide key={item.id}>
              <ProjectCard project={item} />
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        <Empty className="h-96 flex items-center flex-wrap" />
      )}
    </>
  );
};

export default ProjectItems;
