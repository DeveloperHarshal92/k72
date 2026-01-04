import React from "react";

const ProjectCard = (props) => {
  return (
    <>
      <div className="lg:w-1/2 group relative rounded-none transition-all hover:rounded-[50px] overflow-hidden h-full">
        <img className="h-full w-full object-cover" src={props.image1} alt="" />
        <div className="opacity-0 transition-all group-hover:opacity-100 absolute top-0 left-0 flex items-center justify-center h-full w-full bg-black/10">
          <h2 className="uppercase text-6xl font-[font-1] pt-3 px-3 border-4 rounded-full text-white border-white">
            Vior le projet
          </h2>
        </div>
      </div>
      <div className="lg:w-1/2 group relative rounded-none transition-all hover:rounded-[50px] overflow-hidden h-full">
        <img className="h-full w-full object-cover" src={props.image2} alt="" />
        <div className="opacity-0 transition-all group-hover:opacity-100 absolute top-0 left-0 flex items-center justify-center h-full w-full bg-black/10">
          <h2 className="uppercase text-6xl font-[font-1] pt-3 px-3 border-4 rounded-full text-white border-white">
            Vior le projet
          </h2>
        </div>
      </div>
    </>
  );
};

export default ProjectCard;
