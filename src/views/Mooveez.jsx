import React, { useEffect, useContext } from "react";
import { MooveezContext } from "../context/MooveezContext";
import { useState } from "react";
import MoveeCard from "../components/MooveeCard";
import HeadingPopup from "../components/HeadingPopup";

//NOTE -Mooveez function contains everything that is contained on the Mooveez page (home page)

function Mooveez() {
  //SECTION ----------------------------------------------------------------------------------------------------------------->
  //NOTE -Context available so the page has access to the fetch data and search input state set initially to empty string

  const { mooveez, getMooveez } = useContext(MooveezContext);
  const [searchInput, setSearchInput] = useState("");

  // ------------------------------------------------------------------------------------------------------------------------>

  //SECTION ----------------------------------------------------------------------------------------------------------------->
  //NOTE - handleSearchInput listening for changes in the input when a user types and searches for moovee

  const handleSearchInput = (e) => {
    setSearchInput(e.target.value);
  };

  // ------------------------------------------------------------------------------------------------------------------------>

  //SECTION ----------------------------------------------------------------------------------------------------------------->
  //NOTE - mooveez fetch data is filtered and for every single moovee if the moovee title which is converted to lower case
  //matches what is tyed in the search input it is stored in filteredMooveez
  const filteredMooveez = mooveez.filter((moovee) =>
    moovee.title.toLowerCase().includes(searchInput.toLowerCase())
  );

  // ------------------------------------------------------------------------------------------------------------------------>

  //SECTION ----------------------------------------------------------------------------------------------------------------->
  //NOTE - getMooveez being called on page load so that data is loaded straight away
  useEffect(() => {
    getMooveez();
  }, []);

  // ------------------------------------------------------------------------------------------------------------------------>

  //SECTION ----------------------------------------------------------------------------------------------------------------->
  //NOTE - Below we have the heading component which has been imported, the search input and then the filtered mooveez are mapped
  // over and a card is created for each one, adding an id as the key
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
  // ------------------------------------------------------------------------------------------------------------------------>
}

export default Mooveez;
