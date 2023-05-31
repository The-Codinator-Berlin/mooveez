import { collection, getDocs } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { db } from "../config/FirebaseConfig";

function SingleMooveePageCard({ moovee }) {
  const imgPath = "https://image.tmdb.org/t/p/original";
  const [TextAreaInput, setTextAreaInput] = useState("");

  const HandleTextAreaInput = (e) => {
    console.log("e.target.value :>> ", e.target.value);
    setTextAreaInput(e.target.value);
  };

  const [mooveeComments, setMooveeComments] = useState([]);

  const getMooveeComments = async () => {
    const querySnapshot = await getDocs(collection(db, "Comment"));
    const commentsArray = [];
    querySnapshot.forEach((doc) => {
      console.log(`${doc.id} => ${doc.data()}`);
      commentsArray.push(doc.data());
    });
    // console.log("commentsArray :>> ", commentsArray);
    setMooveeComments(commentsArray);
  };

  const transformDate = (seconds) => {
    // const date = new Date(seconds * 1000).toLocaleString();
    const intnationalDateConversion = new Intl.DateTimeFormat("de", {
      
      day:"2-digit",
      month: "2-digit",
      year: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
    }).format(seconds);
    console.log('internationalDateConversion :>> ', intnationalDateConversion);
    return intnationalDateConversion;
  };

  useEffect(() => {
    getMooveeComments();
  }, []);

  return (
    <div className="text-white font-light border-2 rounded border-blue-950">
      <div className="flex justify-around m-4">
        <div className="flex-col justify-items-center">
          <h1 className="text-5xl text-red-600 font-light mt-8">
            {moovee.title}
          </h1>
          <h5 className="text-red-600">{moovee.tagline}</h5>
          <br></br>
          <div className="flex-row justify-center mb-7 p-text mx-16">
            <p>{moovee.overview}</p>
          </div>
          <div className="w-100% flex justify-center">
            {moovee.poster_path && (
              <img
                className="movie-cover w-60"
                src={`${imgPath}${moovee.poster_path}`}
                alt={moovee.title}
              />
            )}
          </div>
          <div>
            <h6 className="font-light">Release date: {moovee.release_date}</h6>
            <div className="flex justify-center pt-3">
              <h6 className="bg-green-500 w-12 rounded">
                {moovee.vote_average}
              </h6>
            </div>
          </div>
        </div>
      </div>
      <div className="flex-col h-80 w-100 displayComments py-6 bg-blue-600 text-black">
        <h2 className="font-bold mb-3">Feel free to leave a comment!</h2>
        <div>
          {mooveeComments &&
            mooveeComments.map((comment) => {
              return (
                <div className="border-2 border-blue-500 mb-2">
                  <p>
                    <b className="text-red-800">User:</b>
                    <span>{comment.author}</span>
                  </p>
                  <p>
                    <b className="text-red-800">Comment:</b>
                    <span>{comment.text}</span>
                  </p>
                  <p>
                    <b className="text-red-800">Date submitted:</b>
                    <span>{transformDate(comment.date.seconds * 1000)}</span>
                  </p>
                </div>
              );
            })}
        </div>
      </div>
      <div className="m-6 border-2 border-red-600 rounded w-100">
        <input
          className="text-black w-full h-20 p-2 text-center"
          type="textarea"
          name="textValue"
          id="text"
          value={TextAreaInput}
          onChange={HandleTextAreaInput}
          placeholder="Type your comment here and click the green button below to submit it!"
        />
      </div>
      <div className="mb-5">
        <button className="bg-green-500 rounded w-60 h-8 hover:bg-slate-400">
          Submit
        </button>
      </div>
    </div>
  );
}

export default SingleMooveePageCard;
