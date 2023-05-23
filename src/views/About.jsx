import React from "react";
import '../css/About.css'
function About() {
  return (
    <div>
      <div>
      <h1 className="text-9xl text-red-600 about-h1 font-light">About</h1>
      </div>
      <span className="aboutDiv">
      <p className="text-red-600 pt-14">This website is designed by Carl Manley.<br></br><a className="hover:text-slate-400" href="mailto:carl.manley.berlin@gmail.com"><span className="text-blue-700 hover:text-slate-400">carl.manley.berlin@gmail.com</span></a><br></br>GitHub: <a className="hover:text-slate-400" href="https://github.com/The-Codinator-Berlin"><span className="text-blue-700 hover:text-slate-400">https://github.com/The-Codinator-Berlin</span></a> <br></br><br></br><br></br>This product uses the <span className="text-blue-700 hover:text-slate-400"><a href="https://www.themoviedb.org/">TMDB API</a></span> but is not endorsed or certified by TMDB.
      <br></br> <br></br>
      <div className="tmdbLogoBox">
      <img className="logo" src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_square_1-5bdc75aaebeb75dc7ae79426ddd9be3b2be1e342510f8202baf6bffa71d7f5c4.svg" alt="TMDB Logo"/>
    </div>
          <br></br>
      Built purely for educational purposes.</p>
      
      </span>
      </div>
  );
}

export default About;
