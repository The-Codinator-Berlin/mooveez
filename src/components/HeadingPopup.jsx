import { useState } from "react";
import '../css/HeadingPopUp.css'


function HeadingPopup() {
  const [isOpeningScreenVisible, setOpeningScreenVisible] = useState(false);
  setTimeout(() => {
    setOpeningScreenVisible(true);
  }, 1000);
  return (
    <div className="mooveezBox">
      {isOpeningScreenVisible &&<h1 className="text-9xl text-red-600">MOOVEEZ</h1>}
      <h3 className="text-red-600">Mooveez are for cows not just for people!</h3>
    </div>
  );
}

export default HeadingPopup;
