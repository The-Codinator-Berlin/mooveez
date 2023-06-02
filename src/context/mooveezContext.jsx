import { createContext, useState } from "react";

//SECTION ------------------------------------------------------------------------------------------------->
//NOTE - MooveezContext created and exported

export const MooveezContext = createContext();

// -------------------------------------------------------------------------------------------------------->

//SECTION ------------------------------------------------------------------------------------------------->
//NOTE - MooveezContextProvider function created and exported, setting the state of the array to empty which
//will allow any moovees that the API is giving us to be stored

export const MooveezContextProvider = (props) => {
  const [mooveez, setMooveez] = useState([]);

  //SECTION ------------------------------------------------------------------------------------------------->
  //NOTE - geMooveez function is fetching the data from the API

  const getMooveez = async () => {
    //NOTE - Here the endpoint is stored in a variable URL and the API key from the .env file is imported
    //into the URL
    const url = `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_TBBD_API_KEY}`;
    //NOTE - The function then tries to fetch the data from the API and if there is a response it stores the information
    //into JSON format making it available for use. Mooveez is then being set (setMooveez) with the data
    //storing it in the variable, allowing us to use this across each file when needed. If there is no response
    //then with the try/catch it will catch the error.
    try {
      const response = await fetch(url);
      const data = await response.json();
      console.log(data.results);
      setMooveez(data.results);
    } catch (error) {
      console.log("error :>> ", error);
    }
  };

  // -------------------------------------------------------------------------------------------------------->

  //SECTION ------------------------------------------------------------------------------------------------->
  //NOTE - This allows the routes that alre within the MooveezContext.Provider to have access to mooveez, getMooveez

  return (
    <MooveezContext.Provider value={{ mooveez, getMooveez }}>
      {props.children}
    </MooveezContext.Provider>
  );
};
