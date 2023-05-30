import React, { useEffect, useContext } from "react";
import "../css/Mooveez.css";
import HeadingPopup from "../components/HeadingPopup";
import MoveeCard from "../components/MooveeCard";
import { MooveezContext } from "../context/MooveezContext";
import { useState } from "react";

function Mooveez() {
  const { mooveez, getMooveez } = useContext(MooveezContext);
  const [searchInput, setSearchInput] = useState("");

  const handleSearchInput = (e) => {
    setSearchInput(e.target.value);
  };

  const filteredMooveez = mooveez.filter((moovee) =>
    moovee.title.toLowerCase().includes(searchInput.toLowerCase())
  );

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
          onChange={handleSearchInput}
          id="search"
          value={searchInput}
        ></input>
      </div>
      <div className="grid grid-cols-2 gap-6 pt-1 m-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mooveeCardGrid">
        {filteredMooveez.map((moovee) => (
          <MoveeCard key={moovee.id} moovee={moovee} />
        ))}
      </div>
    </div>
  );
}

export default Mooveez;
