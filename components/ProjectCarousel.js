import React from "react";
import Image from "next/image";

const ProjectCarousel = ({ projects }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div>
      {/* {projects.map((project) => (
        <div key={project.id} className="px-4">
          <h2 className="text-2xl font-bold text-primary mb-2">
            {project.title}
          </h2>
          <Image
            src={project.image}
            width={project.imageWidth}
            height={project.imageHeight}
            alt={project.title}
          />
          <p className="text-sm mt-2">{project.description}</p>
        </div>
      ))} */}
    </div>
  );
};

export default ProjectCarousel;
