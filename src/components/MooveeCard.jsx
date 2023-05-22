import React from "react";

function MoveeCard({ moovee }) {
  const imgPath = "https://image.tmdb.org/t/p/original";

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
        type="button"
        className="text-neutral-50 rounded-full px-2.5 py-1 text-xs font-semibold shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 text-neutral-50 hover:text-red-500 shadow-slate-50 shadow-md"
      >
        More +
      </button>
    </div>
  );
}

export default MoveeCard;
