import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

/* //SECTION ---------------------------------------------------------------------------------------------------------------> */
//NOTE - Moovee cards populated pulling data from API via props {moovee} from filteredMooveez

function MoveeCard({ moovee }) {
  //NOTE - imgPath used as poster img only contains half of URL uniquie to that film.
  const imgPath = "https://image.tmdb.org/t/p/original";
  const toSingleMooveePage = useNavigate();
  const { user } = useContext(AuthContext);

  /* //SECTION -------------------------------------------------------------------------------------------------------------> */
  //NOTE - This function navigates user to unique page for each moovee using endpoint from API
  const handleNavigatetoSingleMooveePage = (e) => {
    toSingleMooveePage(`/movies/${moovee.id}`);
  };

  //SECTION ----------------------------------------------------------------------------------------------------------------->
  //NOTE - Below renders moovee poster, title, more button and favourites button only if user logged in
  return (
    <div>
      <div className="moveeCard">
        {moovee.poster_path && (
          <img
            className="movie-cover"
            src={`${imgPath}${moovee.poster_path}`}
            alt={moovee.title}
          />
        )}
      </div>

      <div>
        <h5>{moovee.title}</h5>
      </div>

      <button
        onClick={handleNavigatetoSingleMooveePage}
        type="button"
        className="text-neutral-50 rounded-full px-2.5 py-1 text-xs font-semibold shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 text-neutral-50 hover:text-red-600 shadow-slate-50 shadow-md"
      >
        More +
      </button>
      <br></br>
      {/*//NOTE - Only if user is true will the favouites button appear/ Further development needed!!*/}
      {user && (
        <span className="material-symbols-outlined">
          <button className="hover:text-green-600 active:text-blue-500 rounded-full py-1">
            favorite
          </button>
        </span>
      )}
    </div>
  );
}
// -------------------------------------------------------------------------------------------------------------------------->
export default MoveeCard;
