import React, { useState, useEffect } from "react";
import "../css/Mooveez.css";
import HeadingPopup from "../components/HeadingPopup";
import MoveeCard from "../components/MooveeCard";

function Mooveez() {
  const [mooveez, setMooveez] = useState([]);

  const getMooveez = async () => {
    const url = `https://api.themoviedb.org/3/discover/movie?api_key=6b4723f60651331047b0a32019781271`;

    try {
      const response = await fetch(url);
      const data = await response.json();
      console.log(data.results);
      setMooveez(data.results);
    } catch (error) {
      console.log("error :>> ", error);
    }
  };

  useEffect(() => {
    getMooveez();
  }, []);

  return (
    <div className="homeDiv bg-neutral-900 text-neutral-50">
      <HeadingPopup />
      <div className="grid grid-cols-2 gap-6 pt-1 m-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mooveeCardGrid">
        {mooveez.map((moovee) => (
          <MoveeCard key={moovee.id} moovee={moovee} />
        ))}
      </div>
    </div>
  );
}

export default Mooveez;
