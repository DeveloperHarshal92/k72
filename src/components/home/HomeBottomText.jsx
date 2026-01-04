import React from "react";
import { Link } from "react-router-dom";

const HomeBottomText = () => {
  return (
    <div className="font-[font-2] flex justify-center items-center lg:gap-2 gap-8 mb-11 lg:mb-0">
      <p className="absolute lg:w-[17vw] w-72 lg:right-0 right-5 bottom-45 text-sm font-[font-1] lg:leading-relaxed leading-tight">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;K72 est une agence qui pense chaque action pour nourrir la marque. Demain, dans 5 mois et dans 5 ans. On cherche la friction qui crée l’étincelle pour générer de l’émotion. Pour assurer une relation honnête, on est sans filtre, on dit ce qui doit être dit, on fait ce qui doit être fait.</p>
      <div className="lg:border-3 border-2 hover:border-[#D3FD50] hover:text-[#D3FD50] lg:h-44 flex items-center px-3 pt-2 lg:px-14 border-white rounded-full uppercase">
        <Link
          className="text-[6vw] lg:mt-6"
          to="/projects"
        >
          Projects
        </Link>
      </div>

      <div className="lg:border-3 border-2 hover:border-[#D3FD50] hover:text-[#D3FD50] lg:h-44 flex items-center px-3 pt-2 lg:px-14 border-white rounded-full uppercase">
        <Link
          className="text-[6vw] lg:mt-6"
          to="/agence"
        >
          Agence
        </Link>
      </div>
    </div>
  );
};

export default HomeBottomText;
