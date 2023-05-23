import { useState } from "react";
import '../css/HeadingPopUp.css'
import HeadingPopup2 from "./HeadingPopUp2";


function HeadingPopup() {
  const [isOpeningScreenVisible, setOpeningScreenVisible] = useState(false);
  setTimeout(() => {
    setOpeningScreenVisible(true);
  }, 1000);

  return (
    <div className="mooveezBox">
      {isOpeningScreenVisible &&<h1 className="sm: text-4xl md:text-9xl text-red-600">MOOVEEZ
      </h1>}
      <HeadingPopup2 />
    </div>
  );
}

export default HeadingPopup;
