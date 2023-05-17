import { useState } from "react";
import '../css/HeadingPopUp.css'


function HeadingPopup2() {
  const [isOpeningScreenVisible2, setOpeningScreenVisible2] = useState(false);
  setTimeout(() => {
    setOpeningScreenVisible2(true);
  }, 2500);

  return (
    <div className="mooveezBox">
      {isOpeningScreenVisible2 && <h3 className="text-red-600">Mooveez are for cows, not just for people!</h3>}
    </div>
  );
}

export default HeadingPopup2;
