import React from "react";

//SECTION ---------------------------------------------------------------------------->
//NOTE - This function displays the headings on the Favouites page (protected route)

function Favourites() {
  return (
    <div className="text-white">
      <div>
        <h1 className="text-9xl text-red-600 about-h1 font-light">Favouites</h1>
        <h3 className="text-red-600 font-light">
          Save the movies you love for later
        </h3>
      </div>
    </div>
  );
}
// ----------------------------------------------------------------------------------->

export default Favourites;
