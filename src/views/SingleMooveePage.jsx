import React, { useEffect, useState } from "react";
import SingleMooveeContent from "../components/SingleMooveeContent";
import { useParams } from "react-router-dom";

//SECTION ------------------------------------------------------------------------------------------------------------>
//NOTE - This function contains another fetch for just the movie poster

function SingleMooveePage() {
  const urlParams = useParams();
  const [moovee, setmoovee] = useState(null);

  const getByMooveeId = async () => {
    const url = `https://api.themoviedb.org/3/movie/${urlParams.movieId}?api_key=${process.env.REACT_APP_TBBD_API_KEY}`;
    console.log("url :>> ", url);
    try {
      const response = await fetch(url);
      const data = await response.json();
      console.log(data);
      setmoovee(data);
    } catch (error) {
      console.log("error :>> ", error);
    }
  };

  //-------------------------------------------------------------------------------------------------------------------->

  //SECTION ------------------------------------------------------------------------------------------------------------>
  //NOTE - Calling getByMooveeId runs as soon as singleMooveePage loads

  useEffect(() => {
    getByMooveeId();
  }, []);

  //-------------------------------------------------------------------------------------------------------------------->

  //SECTION ------------------------------------------------------------------------------------------------------------>
  //NOTE - Only if moovee is true does it render the ingleMooveeContent component to display the info specific to that moovee

  return <div>{moovee && <SingleMooveeContent moovee={moovee} />}</div>;
}
//-------------------------------------------------------------------------------------------------------------------->

export default SingleMooveePage;
