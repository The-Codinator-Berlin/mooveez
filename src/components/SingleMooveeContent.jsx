import {
  arrayRemove,
  arrayUnion,
  doc,
  getDoc,
  onSnapshot,
  setDoc,
  updateDoc,
} from "firebase/firestore";
import React, { useContext, useEffect, useState } from "react";
import { db } from "../config/FirebaseConfig";
import { AuthContext } from "../context/AuthContext";

// ------------------------------------------------------------------------------------------------------>

//SECTION - Main function that is injected into singleMooveePage
function SingleMooveePageCard({ moovee }) {
  const imgPath = "https://image.tmdb.org/t/p/original";
  const [textAreaInput, setTextAreaInput] = useState("");
  const [singleMooveeCommentArr, setSingleMooveeCommentArr] = useState([]);
  const { user } = useContext(AuthContext);

  // ------------------------------------------------------------------------------------------------------>

  //SECTION - Comments section (textArea) function handling
  const HandleTextAreaInput = (e) => {
    console.log("e.target.value :>> ", e.target.value);
    setTextAreaInput(e.target.value);
  };

  // ------------------------------------------------------------------------------------------------------>

  //SECTION - Hanldling connection between when the submit button is clicked and the comment being created in Firebase and set with a unique ID that is also the ID of a specific moovee
  const HandleSubmitClickWithId = async () => {
    const SingleMooveeCommentsObject = {
      author: user.email,
      text: textAreaInput,
      date: new Date(),
    };
    try {
      const docRef = doc(db, "MooveeComments", moovee.id.toString());
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        const updateDocument = await updateDoc(docRef, {
          SingleMooveeComments: arrayUnion(SingleMooveeCommentsObject),
        });
        setTextAreaInput("");
        console.log("Document updated: ", docRef);
      } else {
        await setDoc(doc(db, "MooveeComments", moovee.id.toString()), {
          SingleMooveeComments: [SingleMooveeCommentsObject],
        });
        setTextAreaInput("");

        console.log("document created>>");
      }
    } catch (error) {
      console.log("error :>> ", error);
    }
  };

  // ------------------------------------------------------------------------------------------------------>

  //SECTION -  ORIGINAL pre-transformed function finding Comment collection and  assigning document (just one) that matches the moovee id

  // const getSingleMooveeComment = async () => {
  //   const docRef = doc(db, "Comment", moovee.id.toString());
  //   try {
  //     const singleMoovee = await getDoc(docRef);
  //     const singleMooveeCommentArr = [];
  //     if (singleMoovee.data().comments) {
  //       setSingleMooveeCommentArr(singleMoovee.data().comments);
  //     }
  //   } catch (error) {
  //     console.log("error :>> ", error);
  //   }
  // };

  // ------------------------------------------------------------------------------------------------------>

  //SECTION - Updating comments added to DOM in realtime
  const getCommentsRealTime = () => {
    const liveCommentDisplay = onSnapshot(
      doc(db, "MooveeComments", moovee.id.toString()),
      (doc) => {
        if (doc.data()?.SingleMooveeComments) {
          setSingleMooveeCommentArr(doc.data().SingleMooveeComments);
        }
      }
    );
  };

  // ------------------------------------------------------------------------------------------------------>

  //SECTION - Transforming date with JS fucntion

  const transformDate = (seconds) => {
    const intnationalDateConversion = new Intl.DateTimeFormat("de", {
      day: "2-digit",
      month: "2-digit",
      year: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
    }).format(seconds);
    return intnationalDateConversion;
  };

  // ------------------------------------------------------------------------------------------------------>

  //SECTION - This function finds the document that matches the mooveeId and converts to string (If not a string, vecause it's a number it would throw an error otherwise). The find() method returns the value of the first element in the array and returns only the comment that the date in nanoseconds matches between what is in firestore and also in the front end. Next it updats the document by removing it and if not throws an error.
  const HandleDeleteByUser = async (singularComment) => {
    if (singularComment.author === user.email) {
      try {
        const documentReferemce = doc(
          db,
          "MooveeComments",
          moovee.id.toString()
        );
        const docSnap = await getDoc(documentReferemce);
        const commentsArray = docSnap.data().SingleMooveeComments;
        const messageToDelete = commentsArray.find((singleStoredComment) => {
          return (
            singleStoredComment.date.nanoseconds ===
            singularComment.date.nanoseconds
          );
        });
        await updateDoc(documentReferemce, {
          SingleMooveeComments: arrayRemove(messageToDelete),
        });
        console.log("Comment deleted!");
      } catch (error) {
        console.log("error :>> ", error);
        console.log("Unable to delete comment!");
      }
    }
  };

  //SECTION - functions called in UseEffect so when page loads all comments that are relevalnt to a moovee with a specific ID will load

  useEffect(() => {
    //NOTE - Left commented in reference to pre-transformed getCommentsRealTime();
    // getSingleMooveeComment();
    getCommentsRealTime(HandleDeleteByUser);
  }, []);

  return (
    //SECTION - Below is everything that is being rendered and displayed on the SingleMoveePage using data from the API
    <div className="text-neutral-50 font-light border-2 rounded border-blue-950">
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
            <h6 className="font-light text-red-500">
              Release date: {moovee.release_date}
            </h6>
            <div className="flex justify-center pt-3">
              <h6 className="bg-green-500 w-12 rounded">
                {moovee.vote_average}
              </h6>
            </div>
          </div>
        </div>
      </div>
      <div className="flex-col w-100 displayComments py-20 bg-neutral-900 text-neutral-50">
        <h2 className="font-bold mb-3">Feel free to leave a comment!</h2>
        <div>
          {/* //NOTE - This checks if singleMooveeCommentArr has anything in it and if it does it maps over it and then bounces the information up to HandleDeleteByUser function so that it can be used in the function to delete a comment. */}
          {singleMooveeCommentArr &&
            singleMooveeCommentArr.map((singularComment, index) => {
              return (
                <div
                  className="border-t-2 border-b-2 mx-6 border-blue-700 mb-2 py-4"
                  key={index}
                >
                  <p>
                    <b className="text-red-600">User:</b>&nbsp;
                    <span>{singularComment.author}</span>
                  </p>
                  <p>
                    <b className="text-red-600">Comment:</b>&nbsp;
                    <span>{singularComment.text}</span>
                  </p>
                  <p>
                    <b className="text-red-600">Date submitted:</b>&nbsp;
                    <span>
                      {transformDate(singularComment.date?.seconds * 1000)}
                    </span>
                  </p>
                  {/* //NOTE - This checks if there is a user logged in with an email that is the same as the person that commented (who also has an email, if so the delete bin is displayed only for that user) */}
                  {user?.email === singularComment.author && (
                    <button
                      onClick={() => HandleDeleteByUser(singularComment)}
                      className="material-symbols-outlined hover:text-red-600 active:text-blue-500"
                    >
                      delete
                    </button>
                  )}
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
          value={textAreaInput}
          onChange={HandleTextAreaInput}
          placeholder="Type your comment here and click the green button below to submit it!"
        />
      </div>
      <div className="mb-5">
        <button
          className="bg-green-500 rounded w-60 h-8 hover:bg-slate-400"
          onClick={HandleSubmitClickWithId}
        >
          Submit
        </button>
      </div>
    </div>
  );
}

export default SingleMooveePageCard;
