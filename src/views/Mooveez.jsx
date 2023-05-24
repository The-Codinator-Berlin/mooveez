import React, { useEffect, useContext } from "react";
import "../css/Mooveez.css";
import HeadingPopup from "../components/HeadingPopup";
import MoveeCard from "../components/MooveeCard";
import { MooveezContext } from "../context/MooveezContext";

function Mooveez() {
  const { mooveez, getMooveez } = useContext(MooveezContext);

  useEffect(() => {
    getMooveez();
  }, []);

  return (
    <div className="homeDiv bg-neutral-900 text-neutral-50">
      <HeadingPopup />
      <div>
        <input
          className="text-neutral-900 rounded mb-1 mt-3 w-80 p-1 border-2 border-red-600"
          type="search"
          placeholder="Search the latest mooveez..."
        ></input>
      </div>
      <div className="grid grid-cols-2 gap-6 pt-1 m-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mooveeCardGrid">
        {mooveez.map((moovee) => (
          <MoveeCard key={moovee.id} moovee={moovee} />
        ))}
      </div>
    </div>
  );
}

export default Mooveez;
