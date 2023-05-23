import { createContext, useState } from "react";

export const MooveezContext = createContext();

export const MooveezContextProvider = (props) => {
  // console.log('props :>> ', props);f

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

  return (
    <MooveezContext.Provider value={{ mooveez, getMooveez }}>
      {props.children}
    </MooveezContext.Provider>
  );
};
