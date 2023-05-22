import { useState, useEffect } from "react";
import "../css/Mooveez.css";
import HeadingPopup from "../components/HeadingPopup";

function Mooveez() {
  const [mooveez, setMooveez] = useState([]);
  const getMooveez = async () => {
    let url = `https://api.themoviedb.org/3/discover/movie?api_key=6b4723f60651331047b0a32019781271`;

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
      <div className="container mx-auto"></div>
    </div>
  );
}

export default Mooveez;
