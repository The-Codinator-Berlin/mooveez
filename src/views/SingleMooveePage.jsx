import React, { useEffect, useState } from "react";
import SingleMooveeContent from "../components/SingleMooveeContent";
import { useParams } from "react-router-dom";

function SingleMooveePage() {
  const urlParams = useParams();
  console.log("urlParams :>> ", urlParams);
  const [moovee, setmoovee] = useState(null);

  const getByMooveeId = async () => {
    const url = `https://api.themoviedb.org/3/movie/${urlParams.movieId}?api_key=${process.env.REACT_APP_TBBD_API_KEY}`;

    try {
      const response = await fetch(url);
      const data = await response.json();
      console.log(data);
      setmoovee(data);
    } catch (error) {
      console.log("error :>> ", error);
    }
  };
  useEffect(() => {
    getByMooveeId();
  }, []);

  return <div>{moovee && <SingleMooveeContent moovee={moovee} />}</div>;
}

export default SingleMooveePage;
