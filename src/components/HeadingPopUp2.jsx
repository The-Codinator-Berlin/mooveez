import { useState } from "react";
import "../css/HeadingPopUp.css";

//SECTION ------------------------------------------------------------------------------------------------------------------>
//NOTE - This function populates h3 after 2.5 seconds on the Mooveez page

function HeadingPopup2() {
  const [isOpeningScreenVisible2, setOpeningScreenVisible2] = useState(false);
  setTimeout(() => {
    setOpeningScreenVisible2(true);
  }, 2500);

  return (
    <div className="mooveezBox">
      {isOpeningScreenVisible2 && (
        <h3 className="text-red-600 font-light">
          Mooveez are for cows, not just for people!
        </h3>
      )}
    </div>
  );
}

// ------------------------------------------------------------------------------------------------------------------------->

export default HeadingPopup2;
