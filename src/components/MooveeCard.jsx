import React from "react";
import { useNavigate } from "react-router-dom";

function MoveeCard({ moovee }) {
  const imgPath = "https://image.tmdb.org/t/p/original";
  const toSingleMooveePage = useNavigate();
  const handleNavigatetoSingleMooveePage = (e) => {
    console.log(e.target.value);

    toSingleMooveePage(`/movies/${moovee.id}`);  };

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
    </div>
  );
}

export default MoveeCard;
